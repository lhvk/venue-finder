import { styled } from "styled-components";

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  background-color: var(--clr-white);
  max-width: 320px;
  max-height: 600px;
  overflow: hidden;
  width: 100%;
  border-radius: 8px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 16px;

  & .closeModalBtn {
    border: 0;
    background-color: inherit;
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  background-color: inherit;
  max-height: 300px;
  overflow-y: auto;
  padding: 20px 16px;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: var(--clr-white);
    border-radius: 20px;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: var(--clr-grey);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--clr-secondary);
    border-radius: 20px;
    background: linear-gradient(var(--clr-pink), var(--clr-primary));
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 20px 16px;
`;
