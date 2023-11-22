import React from "react";
import {
  Modal as ModalComponent,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps,
  ModalOverlayProps,
} from "@chakra-ui/react";

interface ModalInterface extends ModalProps {
  title: string;
  children: React.ReactElement;
  closable: boolean;
  footer: React.ReactElement;
  overlayProps?: ModalOverlayProps;
}

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  overlayProps,
  closable,
  ...rest
}: ModalInterface) => {
  return (
    <ModalComponent onClose={onClose} isOpen={isOpen} {...rest}>
      <ModalOverlay {...overlayProps} />
      <ModalContent>
        <ModalHeader>
          {title}
          {closable && <ModalCloseButton />}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </ModalComponent>
  );
};
