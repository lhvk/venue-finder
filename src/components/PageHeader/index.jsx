import { BackButton } from "../Buttons";
import { BackButtonContainer, HeadingContainer } from "./styled";

export function PageHeader({ pageTitle }) {
  return (
    <HeadingContainer>
      <BackButtonContainer>
        <BackButton />
      </BackButtonContainer>
      <h1>{pageTitle}</h1>
    </HeadingContainer>
  );
}
