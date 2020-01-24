import styled from 'styled-components'

export const EndStageStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
    margin-top: 10%;
    padding: 30px;
    border: 1px solid #fff;
    border-radius: 5px;

    > .corrects-wrapper {
        margin-bottom: 20px;
        > span {
            font-size: 18px;
            line-height: 18px;
            color: #fff;
            font-weight: bold;
            text-transform: uppercase;
        }

        > ul {
            margin-left: 30px;
            margin-top: 5px;
            list-style: circle;
            color: #00000090;
        }
    }
`