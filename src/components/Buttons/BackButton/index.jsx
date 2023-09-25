import { useNavigate } from "react-router-dom";
import { LinkButton } from "../LinkButton";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <LinkButton
      color="var(--clr-secondary)"
      offset="8px"
      onClick={() => navigate(-1)}>
      &larr; Back
    </LinkButton>
  );
}
