import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 12px 10px;
  border: none;
  border-radius: 8px;
  background-color: ${props => props.theme === 'primary' ? '#2563eb' : '#333'};
  color: white;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  cursor: pointer;
  margin-bottom: 12px;

  &:hover {
    background-color: ${props => props.theme === 'primary' ? '#1d4ed8' : '#101010'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px #3b82f6;
  }
`;