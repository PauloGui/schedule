import styled from 'styled-components'

export const ContentStyle = styled.div`

       display: flex;
       width: 100vw;

    .container-add {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 150px;
        margin-left: 20px;
        margin-top: 20px;
        background: #333;

        border: 0;
        border-radius: 10px;
        transition: 0.2s;
        cursor: pointer;

        &:hover {
            background: #444;
            transform: translateX(10px);
        }

        a {
            text-decoration: none;
            color: #129C9E;
        }
    }

    .container-contact {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 150px;
        margin-left: 20px;
        margin-top: 20px;
        background: #333;

        border: 0;
        border-radius: 10px;
        transition: 0.2s;
        cursor: pointer;

        &:hover {
            background: #444;
            transform: translateX(10px);
        }

        a {
            text-decoration: none;
            color: #fff;

            strong {
                margin-left: 20%;
            }

            p{
                font: 400 12px Poppins;
                margin-top: 10px;
                margin-left: 0;
            }
        }

    }
`