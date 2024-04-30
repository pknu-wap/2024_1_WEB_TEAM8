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
        margin: 10px;
        font: 1.5rem 'Noto Sans KR';
        text-align: center;
        border: 1px solid #D6FF32;
        padding: 6px 9px;
        width:45px;
        box-sizing: border-box;
        cursor: pointer;
        border-radius: 50%;
    }

    input[type=checkbox]:checked + label {
        background-image: none;
        background-color: ${({ num }) => {
            switch (num) {
 
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
