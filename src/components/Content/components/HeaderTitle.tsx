import Modal from '@/components/Modal';
import { useDisclosure } from '@chakra-ui/react';
import AddNewQuestion from '@/components/ModalContents/AddNewQuestion';

interface HeaderTitleProps {
  title: string;
  description: string;
  buttonTitle: string;
  buttonIcon: React.ReactNode;
}

export default function HeaderTitle({
  title,
  description,
  buttonTitle,
  buttonIcon,
}: HeaderTitleProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="flex md:flex-row flex-col gap-8 justify-center text-center md:text-left md:justify-between items-center">
      <div className="flex flex-col md:gap-4 gap-1">
        <p className="text-[2.6rem] text-primary">{title}</p>
        <p className="text-lg text-tertiary">{description}</p>
      </div>

      <button
        className="flex justify-between items-center gap-4 bg-secondary hover:bg-tertiary text-white p-2 rounded-lg"
        onClick={() => (isOpen ? onClose() : onOpen())}
      >
        <p>{buttonIcon}</p>
        <p>{buttonTitle}</p>
      </button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Adicionar nova questão"
        description="Aqui você pode adicionar uma nova questão, compartilha-la com outros professores (opcional) e definir qual o seu grau de dificuldade!"
      >
        <AddNewQuestion />
      </Modal>
    </div>
  );
}
