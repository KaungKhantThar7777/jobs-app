import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { ReactNode, useState } from 'react';

import { Button } from '../button';

type Props<T> = {
  data: T;
  onConfirm: (data: T) => void;
  title: string;
  body: ReactNode;
};

export const useModal = <T,>({
  data,
  onConfirm,
  title,
  body,
}: Props<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const view = (
    <Modal isOpen={isOpen} onClose={toggle} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{body}</ModalBody>

        <ModalFooter>
          <Button
            mr={3}
            variant="outline"
            onClick={toggle}
          >
            Close
          </Button>
          <Button onClick={() => onConfirm(data)}>
            Yes, Do it
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );

  return { toggle, view };
};
