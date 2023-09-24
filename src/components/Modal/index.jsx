import { Button } from "../Buttons";
import {
  Overlay,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
} from "./styled";

/**
 * Modal component for displaying content in a modal dialog.
 *
 * @component
 * @param {Object} props - The props for the Modal component.
 * @param {Function} props.closeModal - A function to be called when the modal is closed.
 * @param {ReactNode} props.children - The content to be displayed within the modal.
 * @param {string} props.modalTitle - The title of the modal.
 * @param {string} [props.buttonType] - The type of the button, e.g., "submit".
 * @param {string} [props.formId] - The HTML form ID associated with the modal.
 * @param {boolean} [props.infoOnly=false] - Indicates whether the modal is for displaying information only (no buttons).
 * @param {boolean} [props.isSubmitting] - Indicates whether a form submission is in progress.
 * @param {boolean} [props.isChecked] - Indicates whether a checkbox is checked.
 * @param {boolean} [props.isModalOpen] - Indicates whether the modal is open.
 * @param {Function} [props.onClick] - A function to be called when the "OK" button is clicked.
 * @returns {JSX.Element} A JSX element representing the Modal component.
 */

export function Modal({
  closeModal,
  children,
  modalTitle,
  isSubmitting,
  isChecked,
  isModalOpen,
  buttonType = undefined,
  formId = undefined,
  onClick = undefined,
  infoOnly = false,
}) {
  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <h2>{modalTitle}</h2>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        {!infoOnly && (
          <ModalFooter>
            <Button
              onClick={closeModal}
              $color="#333"
              $background="transparent"
              $border="solid 1px #333"
              $isCancelBtn>
              Cancel
            </Button>
            <Button
              disabled={
                isSubmitting || (!isChecked?.venueManager && isModalOpen)
              }
              onClick={onClick}
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
