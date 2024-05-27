import React from "react";
import { Link } from "react-router-dom";

import "../Pages/FirstTest/FirstPage";
import "./NextButton.css";

import { PopValueState } from "./PopBox";
import { RockValueState } from "./RockBox";
import { HipValueState } from "./HipBox";
import { JazzValueState } from "./JazzBox";
import { RbValueState } from "./RbBox";
import { useRecoilState } from "recoil";

const NextButton = ({ to,popCount, hipCount, rockCount, jazzCount, RbCount }) => {

    const [popValues] = useRecoilState(PopValueState);
    const [hipValues] = useRecoilState(HipValueState);
    const [rockValues] = useRecoilState(RockValueState);
    const [jazzValues] = useRecoilState(JazzValueState);
    const [RbValues] = useRecoilState(RbValueState);

    const isNextButtonDisabled = () => {
        // 모든 체크박스가 체크된 상태인지 확인
        return  !Array.from({ length: popCount }, (_, i) => i+1).every(num => popValues[`Pop${num}`] !== undefined) ||
                !Array.from({ length: hipCount }, (_, i) => i + 1).every(num => hipValues[`Hip${num}`] !== undefined) ||
                !Array.from({ length: rockCount }, (_, i) => i + 1).every(num => rockValues[`Rock${num}`] !== undefined) ||
                !Array.from({ length: jazzCount }, (_, i) => i + 1).every(num => jazzValues[`Jazz${num}`] !== undefined)||
                !Array.from({ length: RbCount }, (_, i) => i + 1).every(num => RbValues[`Rb${num}`] !== undefined);
    };

    return (
        <div className='nextPage'>
            <Link to={to}>
                <button onClick={(e)=>{
                    if (isNextButtonDisabled()) {
                        e.preventDefault();
                    }
                }}
                >다음으로</button>  
            </Link> 
        </div>
    );
};

export default NextButton;
