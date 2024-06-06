import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

import "./SecondBtn.css";

import { PopValueState } from "../../../Components/PopBox";
import { JazzValueState } from "../../../Components/JazzBox";
import { HipValueState } from "../../../Components/HipBox";
import { RockValueState } from "../../../Components/RockBox";
import { RbValueState } from "../../../Components/RbBox";

const NextButton = ({ to, ids = [], onCompleteButtonClick }) => {
    const [popValues] = useRecoilState(PopValueState);
    const [jazzValues] = useRecoilState(JazzValueState);
    const [hipValues] = useRecoilState(HipValueState);
    const [rockValues] = useRecoilState(RockValueState);
    const [rbValues] = useRecoilState(RbValueState);
    
    const isNextButtonDisabled = () => {
        return ids.some(id => {
            if (id.includes("Pop")) {
                return popValues[id] === undefined;
            } else if (id.includes("Jazz")) {
                return jazzValues[id] === undefined;
            } else if (id.includes("Hip")) {
                return hipValues[id] === undefined;
            } else if (id.includes("Rock")) {
                return rockValues[id] === undefined;
            } else if (id.includes("RB")) {
                return rbValues[id] === undefined;
            } 
            return false;  // Default case if id does not match any known type
        });
    };

    return (
        <div className="nextPage">
            <Link to={to}>
                <button
                    onClick={(e) => {
                        if (isNextButtonDisabled()) {
                            e.preventDefault();
                            console.log("Not all checkboxes are checked");
                        } else {
                            if (onCompleteButtonClick) {
                                onCompleteButtonClick(); // Call the onCompleteButtonClick function if provided
                            }
                        }
                    }}
                >
                    다음으로
                </button>
            </Link>
        </div>
    );
};

export default NextButton;
