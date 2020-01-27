import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: 0;
  border-radius: 5px;
  height: 50px;
  cursor: pointer;
  font-size: 15px;
  text-transform: uppercase;
  padding: 0 20px;
  box-shadow: 0 0 14px 1px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  background-color: #e2725b;
  color: #fff;

  :disabled {
    background: #ccc;
    cursor: not-allowed;
  }
  &:hover:not(:disabled) {
    opacity: 0.9;
  }
`;
