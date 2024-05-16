import React from "react";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ProgressBar from "@ramonak/react-progress-bar";

import PopBox from "../../Components/PopBox";
import testData from "../../Components/testData";

import "./SecondPage.css";

const SecondPage4 = () => {

    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCompleted(testData[6].completed); 
        }, 20); 
      
        return () => clearTimeout(timeout); 
    }, []); 

    return (
        <ChakraProvider>
        <div className="firstPage">
            <div className="progress">
            <ProgressBar
                    key={6}
                    bgcolor={testData[6].bgcolor}
                    completed={completed}/>
            </div>
            <div className="num2">
                <h3>긍정적인 에너지를 뿜어내는 업템포 음악과 단순하면서 중독성이 강한 멜로디는 내 어깨를 들썩이게 해!</h3>
                <PopBox id="DancePop2"/>
            </div>
            <div className="num2">
                <h3>전자 악기와 디지털한 사운드의 조화!
마치 다채롭고 현란한 레이저쇼 현장에 온 기분이야!</h3>
                <PopBox id="ElecPop2"/>
            </div>
            <div className="num2">
                <h3>전반적으로 밝고 경쾌하지만 가사에는 우울함과 현실의 분노가 담긴 음악.. 
                    마치 나의 양면적인 모습과 닮았어.</h3>
                <PopBox id="BritPop2"/>
            </div>
            <div className="num2">
                <h3>분위기 있는 작은 공연장에 나만 알고싶은 아티스트가 콘서트를 열었어.
감성적인 멜로디와 차분한 선율..이게 나의 안정제지.</h3><br/>
                <PopBox id="IndiPop2"/>
            </div>
            <div className="num2">
                <h3>스페인어만의 특유한 어감과 레게톤의 음악!
마치 스페인 바닷가에서 개최한 뮤직 페스티벌에 와 있는것 같아서 정말 신나!</h3><br/>
                <PopBox id="LatinPop2"/>
            </div>
            <div className='linkBox'>
                <Link to="/SecondPage5">
                    <button>다음으로</button> 
                </Link> 
            </div>
        </div>
        </ChakraProvider>
    );
};

export default SecondPage4;