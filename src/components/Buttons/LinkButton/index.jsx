import styled from "styled-components";

export const LinkButton = styled.button`
  background: transparent;
  cursor: pointer;
  text-decoration: underline;
  color: ${(props) => props.color || "var(--clr-primary)"};
  border: 0;
  font-size: inherit;
  transition: opacity 300ms ease-in-out;
  text-underline-offset: ${(props) => props.offset || "unset"};

  &:hover {
    opacity: 0.8;
  }
`;
