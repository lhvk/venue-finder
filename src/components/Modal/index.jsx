import { Button } from "../Buttons";
import { Icon } from "../Icon";
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "./styled";

export function Modal({
  handleUpload,
  closeModal,
  children,
  modalTitle,
  buttonType,
  formId,
}) {
  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <h2>{modalTitle}</h2>
          <button
            className="closeModalBtn"
            onClick={closeModal}>
            <Icon
              id="x-close-icon"
              height="20px"
              width="20px"
            />
          </button>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={closeModal}>Cancel</Button>
          <Button
            onClick={() => handleUpload}
            type={buttonType}
            form={formId}>
            OK
          </Button>
        </ModalFooter>
      </ModalContainer>
    </Overlay>
  );
}
