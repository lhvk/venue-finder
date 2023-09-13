import { Button } from "../Buttons";
import { Icon } from "../Icon";
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "./styled";

/**
 * Modal component for displaying content in a modal dialog.
 * @param {Object} props - The props for the Modal component.
 * @param {Function} handleUpload - A function to be called when the "OK" button is clicked.
 * @param {Function} closeModal - A function to be called when the modal is closed.
 * @param {ReactNode} children - The content to be displayed within the modal.
 * @param {string} modalTitle - The title of the modal.
 * @param {string} buttonType - The type of the button, e.g., "submit".
 * @param {string} formId - The HTML form ID associated with the modal.
 * @param {boolean} [infoOnly=false] - Indicates whether the modal is for displaying information only (no buttons).
 * @returns {JSX.Element} - A JSX element representing the Modal component.
 */

export function Modal({
  handleUpload,
  closeModal,
  children,
  modalTitle,
  buttonType = undefined,
  formId = undefined,
  infoOnly = false,
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
        {!infoOnly && (
          <ModalFooter>
            <Button onClick={closeModal}>Cancel</Button>
            <Button
              onClick={() => handleUpload()}
              type={buttonType}
              form={formId}>
              OK
            </Button>
          </ModalFooter>
        )}
      </ModalContainer>
    </Overlay>
  );
}
