import { styled } from "styled-components";

export const ProfileMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100%;
`;

export const EditButtonContainer = styled.div``;

export const EditButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: inherit;
  border: 0;
`;

export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
`;

export const ProfileInfo = styled.div`
  text-align: left;
`;

export const AvatarContainer = styled.div``;
