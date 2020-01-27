import styled from "styled-components";

export const HighscoreStyled = styled.div`
  border-radius: 5px;
  width: 400px;
  color: #fff;
  display: flex;
  flex-direction: column;

  > h2 {
    text-align: center;
    font-size: 30px;
  }

  > .span-highscore {
    background-color: #d19275;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
    text-align: center;
  }

  > table {
    border: 1px solid #ccc;
    width: 100%;
    border-radius: 5px;
    margin-top: 20px;

    th,
    td {
      padding: 10px;
    }

    > thead {
      > tr {
        > th {
          border-bottom: 1px solid #ccc;
          &:first-child {
            text-align: left;
          }
        }
      }
    }

    > tbody {
      > tr {
        &.new {
          background-color: #d19275;
        }
        > td {
          border-bottom: 1px solid #ccc;
          &:not(:first-child) {
            text-align: center;
          }
        }

        &:last-child {
          > td {
            border-bottom: none;
          }
        }
      }
    }
  }
`;
