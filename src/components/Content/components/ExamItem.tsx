import { toast } from 'react-toastify';
import Modal from '@/components/Modal';
import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Input } from '@chakra-ui/react';

interface ExamItemProps {
  description: string;
  title: string;
}

export default function ExamItem({ description, title }: ExamItemProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState<string>(description ? description : '');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };
  const handleSave = () => {
    toast.success(`'${title} atualizada com sucesso`);
    onClose();
  };

  return (
    <>
      <div className="flex flex-col justify-start">
        <h2 className="text-3xl text-primary">{title}</h2>
        <p className="pl-6 text-xl text-secondary">{description}</p>
        <button type="button" className="w-1/4 text-sm text-primary" onClick={onOpen}>
          Editar data
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Modal isOpen={isOpen} onClose={onClose} title={`Editar ${title}`}>
            <div className="flex flex-col gap-4">
              {title === 'Data da prova' && (
                <Input
                  id="data"
                  placeholder="Select Date and Time"
                  size="md"
                  type="datetime-local"
                  value={data}
                  onChange={handleChange}
                />
              )}

              {title !== 'Data da prova' && (
                <input
                  type="text"
                  className="border border-primary p-2 rounded"
                  placeholder={title}
                  id="item"
                  value={data}
                  onChange={handleChange}
                />
              )}
              <button
                type="button"
                className="bg-primary text-white p-2 rounded"
                onClick={handleSave}
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
