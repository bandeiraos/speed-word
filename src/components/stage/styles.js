import styled from 'styled-components'

export const StageStyled = styled.div`
    display: flex;
    justify-content: center;
    background: red;
    margin-top: 10%;
    > .content {
        padding: 20px;
        border: 1px solid #ffffff80;
        border-radius: 5px;
        width: 500px;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        >.word-wrapper {
            display: flex;
            font-size: 30px;
            font-family: 'Arial', sans-serif;
            color: #fff;
            margin-bottom: 20px;
            user-select: none;

            > span {
                &:not(:last-child) {
                    margin-right: 2px;
                }
                &.active {
                    color: greenyellow;
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
`