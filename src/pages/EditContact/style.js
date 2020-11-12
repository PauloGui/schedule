import styled from 'styled-components'

export const EditContactStyle = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    p {
        font-size: 40px;
        margin-bottom: 30px;
        font-weight: bold;
    }

    .input-group {
        display: flex;
        flex-direction: column;

        p {
            font-size: 16px;
            margin-top: 20px;
            margin-bottom: 5px;
            margin-left: 10px;
        }

        input {
            width: 400px;
            height: 40px;
            padding: 5px;
            border: none;
            border-radius: 10px;
            background: #333;
            color: #fff;
        }

        .group-btn {
            display: flex;
            justify-content: space-around;
            margin-top: 30px;
            
            

            .btn-delete {
                background: red;
                width: 100px;
                height: 40px;
                border: 0;
                border-radius: 10px;
                color: #fff;
                font-weight: bold;
                cursor: pointer;
                transition: 0.2s;

                &:hover {
                    background: #BF472C;
                }
            }

            .btn-save {
                width: 100px;
                height: 40px;
                border: 0;
                border-radius: 10px;
                background: #129C9E;
                color: #fff;
                font-weight: bold;
                cursor: pointer;
                transition: 0.2s;

                &:hover {
                    background: #0B7F8C;
                }
            }

        }
    }
`