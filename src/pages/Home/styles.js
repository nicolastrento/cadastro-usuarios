import styled from "styled-components";
import { Button } from "../../components/Button/styles";

export const Background = styled.div`
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 448px;
  width: 100%;
  background-color: #f9fafb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 52px;
`;

export const Form = styled.form`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Title = styled.h2`
  margin-top: 24px;
  font-size: 29px;
  font-weight: 800;
  text-align: center;
  color: #111827;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const IconWrapper = styled.div`
  position: relative;
  top: 50%;
  left: 12px;
  transform: translateY(155%);
  pointer-events: none;
  color: #9ca3af;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 50px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background-color: #f9fafb;
  font-size: 14px;
  color: #111827;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  &::placeholder {
    color: #9ca3af;
  }

  /* Remove as setas no Chrome, Safari, Edge e Opera */
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ButtonIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;

  svg {
    transition: transform 0.2s;
  }

  ${Button}:hover & svg {
    transform: translateX(0.25rem);
  }
`;
