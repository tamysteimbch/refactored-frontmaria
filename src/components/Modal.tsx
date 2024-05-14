import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title: string;
  button1Title?: string;
  button1Action?: () => void;
  button2Title?: string;
  button2Action?: () => void;
}

export default function ModalComponent(props: ModalProps) {
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{props.children}</ModalBody>

          <ModalFooter>
            {props.button1Title && (
              <Button colorScheme="blue" mr={3} onClick={props.onClose}>
                {props.button1Title}
              </Button>
            )}

            {props.button2Title && <Button variant="ghost">{props.button2Title}</Button>}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
