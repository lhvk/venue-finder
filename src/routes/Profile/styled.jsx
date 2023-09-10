import { styled } from "styled-components";
import { MOBILE } from "../../config";

export const ProfileMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;

  @media (${MOBILE}) {
    padding: 10px;
  }
`;

export const ProfileInfo = styled.div`
  text-align: left;
`;

export const AvatarContainer = styled.div`
  max-width: 400px;
`;

export const UserVenuesList = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--clr-grey);
`;

export const UserVenueThumbnail = styled.img`
  width: 100px;
  object-fit: contain;
  border-radius: 8px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 8px;
`;

export const Email = styled.p`
  color: #767676;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap};
  width: 540px;
`;

export const Container = styled.div`
  display: flex;
  gap: 8px;
`;
