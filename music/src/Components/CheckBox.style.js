// checkBox.styles.js
import styled from 'styled-components';


const CheckBoxCnt = styled.div`
    input[type=checkbox] {
        display: none;
    }

    input[type=checkbox] + label {
        flex:1;
        display: inline-block;
        margin: 10px;
        font: 1.5rem 'Noto Sans KR';
        text-align: center;
        background: #f5f6f7;
        border: 1px solid #8BBF9F;
        padding: 6px 9px;
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 50%;
    }

    input[type=checkbox]:checked + label {
        background-image: none;
        background-color: ${({ num }) => {
            switch (num) {
                case 1:
                case 2:
                    return '#D6BA73';
                case 3:
                    return 'lightgray';
                case 4:
                case 5:
                    return '#857E7B';
                default:
                    return 'white';
            }
        }};
        border: 1px solid white;
        padding: 6px 9px;
        box-sizing: border-box;
        cursor: pointer;
        z-index: 1;
    }`


export default CheckBoxCnt;
