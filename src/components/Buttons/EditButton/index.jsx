import { Icon } from "../../Icon";
import { ActionsButton } from "../ActionsButton";

export function EditButton({ buttonTitle, onClick, children }) {
  return (
    <ActionsButton
      title={buttonTitle}
      onClick={onClick}>
      <Icon id="edit-icon" />
      {children}
    </ActionsButton>
  );
}
