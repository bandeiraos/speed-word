import styled from "styled-components";

export const MenuStyled = styled.div`
  border-radius: 5px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > .btns {
    display: flex;
    flex-direction: column;
    > button {
      margin-top: 20px;
      padding: 0 30px;
    }

    > span {
      color: #fff;
      margin-top: 35px;

      > a {
        color: #fff;
        color: #d19275;
      }
    }
  }
`;
