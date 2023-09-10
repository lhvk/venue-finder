import { ActionsButton } from "..";
import { Icon } from "../../Icon";

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
