import styled from "styled-components";

export const OuterContainer = styled.div`
  background-color: #fff;
  min-height: 100vh;
  padding: 32px;
`;

export const Container = styled.div`
  background-color: #f9fafb;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #1E40AF;
  margin-bottom: 32px;
`

export const ContainerUsers = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1024px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const CardUsers = styled.div`
  background-color: #2563EB;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s;

  h3 {
    color: white;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 4px;
    text-transform: capitalize;
  }

  p {
    color: #BFDBFE;
    font-size: 14px;
  }

  &:hover {
    background-color: #1D4ED8;
  }
`

export const AvatarContainer = styled.div`
  background-color: #3B82F6;
  padding: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TrashIcon = styled.img`
  color: #fff;
  transition: color 0.2s;
  padding: 8px;
  cursor: pointer;

  &:hover{
    opacity: 0.8;
  }

  &:active{
    opacity: 0.5;
  }
`
