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
  description?: string;
  button1Title?: string;
  button1Action?: () => void;
  button2Title?: string;
  button2Action?: () => void;
}

export default function ModalComponent(props: ModalProps) {
  return (
    <div>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent minWidth={{ base: '100%', sm: '90%', md: '90%', lg: '80%', xl: '60%' }}>
          <ModalHeader backgroundColor={'#D0D4E6'}>
            <div className="flex flex-col text-tertiary gap-8 justify-center items-center md:w-1/2 w-2/3 mx-auto text-center py-[4rem]">
              <p className="text-4xl">{props.title}</p>
              {props.description && (
                <p className="text-tertiary text-[16px]">{props.description}</p>
              )}
            </div>
          </ModalHeader>
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
    </div>
  );
}
