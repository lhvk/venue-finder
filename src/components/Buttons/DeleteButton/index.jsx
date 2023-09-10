import { ActionsButton } from "..";
import { Icon } from "../../Icon";

export function DeleteButton({ buttonTitle, onClick, children }) {
  return (
    <ActionsButton
      title={buttonTitle}
      onClick={onClick}>
      <Icon
        id="delete-icon"
        fill="var(--clr-white)"
      />
      {children}
    </ActionsButton>
  );
}
