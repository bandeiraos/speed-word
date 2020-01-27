import styled from "styled-components";

export const RegressiveStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 80px;
  color: #fff;
  font-weight: bold;
  flex-direction: column;

  > div {
    &:last-child {
      font-size: 30px;
      font-style: italic;
      text-align: center;
    }
  }
`;
