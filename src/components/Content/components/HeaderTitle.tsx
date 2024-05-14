import Modal from '@/components/Modal';
import { useDisclosure } from '@chakra-ui/react';

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
        title="Teste"
        button1Title="Fechar"
        button1Action={onClose}
      >
        <p>Fala tu</p>
      </Modal>
    </div>
  );
}
