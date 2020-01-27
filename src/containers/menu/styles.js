import styled from "styled-components";

export const MenuStyled = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > .btns {
    margin-top: 20px;
    > form {
      display: flex;
      flex-direction: column;
      > button {
        margin-top: 20px;
        padding: 0 30px;
        width: 400px;

        &:not(:disabled) {
          background-color: #e2725b;
          color: #fff;
        }

        &:last-child {
          background-color: #d19275;
          color: #fff;
        }
      }

      > input {
        height: 50px;
        padding: 0 10px;
        border: 0;
        border-bottom: 1px solid #ccc;
        font-size: 22px;
        margin-top: 10px;
        text-align: center;
        background: transparent;
        color: #fff;
        outline: 0;
      }
    }

    > span {
      color: #fff;
      margin-top: 35px;
      display: block;
      padding-bottom: 30px;
      text-align: center;

      > a {
        color: #d19275;
      }
    }
  }
`;
