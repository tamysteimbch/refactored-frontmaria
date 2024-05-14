import { FaPlus } from 'react-icons/fa';
import { useDisclosure } from '@chakra-ui/react';
import Modal from '../Modal';

export default function CreateExamBtn() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button
        className="grid grid-cols-[auto,1fr] bg-secondary p-4 rounded-lg gap-4 w-4/6 mx-auto hover:bg-tertiary items-center"
        onClick={() => (isOpen ? onClose() : onOpen())}
      >
        <div className="text-xl">
          <FaPlus />
        </div>
        <div className="text-md text-center">{'Criar nova prova'}</div>
      </button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Teste"
        button1Title="Fechar"
        button1Action={onClose}
      >
        <p>Fala tu</p>
      </Modal>
    </>
  );
}
