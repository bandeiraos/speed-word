import styled from "styled-components";

export const EndStageStyled = styled.div`
  > .content {
    border-radius: 5px;
    width: 300px;
    padding: 30px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    color: #fff;
    font-size: 22px;

    > h2 {
      /* border-bottom: 1px solid #ccc; */
      text-align: center;
      padding-bottom: 5px;
      margin-bottom: 10px;
    }

    > span {
      > b {
        font-size: 28px;
      }
    }

    .btn-twitter {
      background-color: #1da1f2;
      border: 1px solid #1da1f2;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15);
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 15px auto;
      width: 100px;
      cursor: pointer;
      height: 30px;
      > a {
        text-decoration: none;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        flex: 1;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    > .corrects-wrapper {
      padding: 20px 0;
      margin-top: 10px;
      border-top: 1px solid #fff;

      > ul {
        list-style: none;
        font-style: italic;
      }
    }

    > .buttons {
      display: flex;
      flex-direction: column;
      button {
        border: 0;
        border-radius: 5px;
        height: 50px;
        cursor: pointer;
        font-size: 15px;
        text-transform: uppercase;
        padding: 0 20px;
        box-shadow: 0 0 14px 1px rgba(0, 0, 0, 0.1);
        margin-top: 20px;

        :disabled {
          background: #ccc;
          cursor: not-allowed;
        }
        &:hover:not(:disabled) {
          opacity: 0.9;
        }
      }
    }
  }
`;
