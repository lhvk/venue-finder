import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || "10px"};
  padding-block: ${(props) => props.$paddingBlock || "20px"};
  border: 1px solid var(--clr-white);
  border-radius: 5px;
  width: ${(props) => props.$width || "100%"};
`;

export const Label = styled.label`
  display: block;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #333;
`;

export const NumbersContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;
`;

export const ErrorMessage = styled.span`
  font-size: 1.2rem;
  color: var(--clr-red);
  display: block;
  word-break: break-all;
`;

export const FormFooter = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const RegisterLink = styled(NavLink)`
  color: var(--clr-secondary);
  text-decoration: underline;
`;

export const CheckBox = styled.input`
  width: 20px;
`;

export const VenueManagerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TextArea = styled.textarea`
  border-radius: 8px;
  border: 1px solid #333;
  font-size: inherit;
  font-family: inherit;
  padding: 10px;
  width: 100%;
  min-height: 100px;
  resize: none;
`;

export const MetaSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 8px;
`;

export const Select = styled.select`
  border-radius: 8px;
  font-size: inherit;
  height: 38.5px;
  padding: 8px;
  border: 1px solid #333;
`;
