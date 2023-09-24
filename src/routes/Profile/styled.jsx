import { styled } from "styled-components";

export const ProfileMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 100px;
`;

export const AvatarContainer = styled.div`
  max-width: 768px;
  max-height: 768px;
  border-radius: 10px;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 4/3;
  border-radius: 10px;
`;

export const ProfileContainer = styled.div`
  max-width: 768px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;

export const ProfileInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserVenuesListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserVenuesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const UserVenueThumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
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

export const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
`;

export const Container = styled.div`
  display: flex;
  gap: 8px;
`;
