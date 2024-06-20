import Modal from '@/components/Modal';
import { useDisclosure } from '@chakra-ui/react';
import { toast } from 'react-toastify';

interface ProfileInfoItemProps {
  value: string;
  setValue: (value: string) => void;
  title: string;
}

export default function ProfileInfoItem({ value, setValue, title }: ProfileInfoItemProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className="flex flex-col gap-2 justify-start items-start">
        <h2 className="text-primary font-bold text-2xl">{title}</h2>
        <h2
          className="text-secondary font-bold text-xl"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        >
          {value}
        </h2>
        <button className="text-primary" onClick={onOpen}>
          Editar
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Modal isOpen={isOpen} onClose={onClose} title={`Editar ${title}`}>
            <div className="flex flex-col gap-4">
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
              <button
                className="bg-primary text-white p-2 rounded"
                onClick={() => {
                  onClose();
                  toast.success(`${title} alterado com sucesso!`);
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
