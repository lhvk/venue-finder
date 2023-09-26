import styled from "styled-components";

export const PopoverButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
