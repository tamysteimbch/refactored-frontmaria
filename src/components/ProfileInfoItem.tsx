import Modal from '@/components/Modal';
import { useDisclosure } from '@chakra-ui/react';
import { toast } from 'react-toastify';
import { updateTeacher } from '@/app/api/teacher';
import { useAppSelector, useAppDispatch } from '../lib/hooks';
import { setTeacher } from '@/lib/features/me/me';

interface ProfileInfoItemProps {
  value: string;
  setValue: (value: string) => void;
  title: string;
  lastName?: string;
  setLastName?: (value: string) => void;
  id: string;
}

export default function ProfileInfoItem({
  value,
  setValue,
  title,
  lastName,
  setLastName,
  id,
}: ProfileInfoItemProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state).me.me;

  return (
    <>
      <div className="flex flex-col gap-2 justify-start items-start">
        <h2 className="text-primary font-bold text-2xl">{title}</h2>
        <h2
          className="text-secondary font-bold text-xl"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        >
          {lastName ? `${value} ${lastName}` : value}
        </h2>
        <button className="text-primary" onClick={onOpen}>
          Editar
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 w-full">
          <Modal isOpen={isOpen} onClose={onClose} title={`Editar ${title}`}>
            <div className="flex flex-col gap-4 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="grid grid-cols-1 gap-1">
                  <label htmlFor="value" className="text-primary font-bold text-xl">
                    {title}
                  </label>
                  <input
                    id="value"
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="border border-primary p-2 rounded"
                  />
                </div>

                {lastName && (
                  <div className="grid grid-cols-1 gap-1">
                    <label htmlFor="value" className="text-primary font-bold text-xl">
                      Sobrenome
                    </label>
                    <input
                      id="value"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName && setLastName(e.target.value)}
                      className="border border-primary p-2 rounded"
                    />
                  </div>
                )}
              </div>
              <button
                className="bg-primary text-white p-2 rounded"
                onClick={async () => {
                  let body: { [key: string]: string } = {};

                  if (lastName) {
                    body = {
                      name: value,
                      lastName,
                    };
                  } else {
                    body = {
                      [title.toLowerCase()]: value,
                    };
                  }

                  try {
                    const teacher = await updateTeacher(body, id);
                    dispatch(setTeacher(teacher));
                    console.log(title);

                    onClose();
                    toast.success(`${title} alterado com sucesso!`);
                  } catch (error) {
                    toast.error('Erro ao alterar os dados.');
                  }
                }}
              >
                Salvar
              </button>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
}
