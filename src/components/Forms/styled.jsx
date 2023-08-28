import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap || "10px"};
  width: 300px;
  padding: 20px;
  border: 1px solid var(--clr-white);
  border-radius: 5px;
`;

export const Label = styled.label`
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
`;

export const ErrorMessage = styled.div`
  color: var(--clr-red);
`;

export const FormFooter = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const RegisterLink = styled(NavLink)`
  text-decoration: underline;
`;

export const CheckBox = styled.input`
  width: 20px;
`;

export const VenueManagerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
