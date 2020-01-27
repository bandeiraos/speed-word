import styled from "styled-components";

export const StageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > .content {
    border-radius: 5px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > .word-wrapper {
      display: flex;
      font-size: 40px;
      color: #fff;
      margin-bottom: 20px;
      user-select: none;

      > span {
        &:not(:last-child) {
          margin-right: 2px;
        }
        &.active {
          color: #fafad2;
        }
      }
    }

    > input {
      height: 50px;
      font-size: 30px;
      border: 0;
      border-bottom: 1px solid #ffffff;
      background-color: transparent;
      padding: 0 15px;
      outline: 0;
      width: 300px;
      color: #fff;
      text-align: center;
      letter-spacing: 2px;

      ::placeholder {
        color: #ffffff80;
      }
    }
  }
`;
