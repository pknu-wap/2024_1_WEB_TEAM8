// checkBox.styles.js
import styled from 'styled-components';


const CheckBoxCnt = styled.div`
    input[type=checkbox] {
        display: none;
    }

    input[type=checkbox] + label {
        display:block;
        position:relative;
        top:90px;
        flex:1;
        display: inline-block;
        margin: 15px;
        font: 1.5rem 'Noto Sans KR';
        text-align: center;
        border: 1px solid #D6FF32;
        padding: 10px 10px;
        width:50px;
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 50%;
    }

    input[type=checkbox]:checked + label {
        background-image: none;
        background-color: ${({ num }) => {
            switch (num) {
 
                default:
                    return '#D9D9D9';
            }
        }};
        border: 1px solid #D6FF32;
        padding: 10px 10px;
        box-sizing: border-box;
        cursor: pointer;
        z-index: 1;
    }
    @media (max-width: 820px) {
        input[type=checkbox] + label {
            top: 50px;
            font-size: 1.2rem;
            padding: 8px 8px;
            width: 40px;
        }
    }

    @media (max-width: 480px) {
        input[type=checkbox] + label {
            top: 30px;
            font-size: 1rem;
            padding: 5px 5px;
            width: 30px;
        }

    }
`;
    


export default CheckBoxCnt;
