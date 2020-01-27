import styled from "styled-components";

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  height: 220px;
  background-size: 500px;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 800px) {
      height: 100px;
      background-size: 280px;
  }
`;
