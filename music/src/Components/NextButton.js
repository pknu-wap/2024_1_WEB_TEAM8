import React from "react";
import { Link } from "react-router-dom";
import "./NextButton.css";

const NextButton = ({ to }) => {
    return (
        <div className='nextPage'>
            <Link to={to}>
                <button>다음으로</button>  
            </Link> 
        </div>
    );
};

export default NextButton;
