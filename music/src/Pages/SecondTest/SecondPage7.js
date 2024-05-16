import React from "react";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import ProgressBar from "@ramonak/react-progress-bar";

import RockBox from "../../Components/RockBox";
import testData from "../../Components/testData";

import "./SecondPage.css";

const SecondPage7 = () => {

    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCompleted(testData[9].completed); 
        }, 20); 
      
        return () => clearTimeout(timeout); 
    }, []); 

    return (
        <ChakraProvider>
        <div className="firstPage">
            <div className="progress">
            <ProgressBar
                    key={9}
                    bgcolor={testData[9].bgcolor}
                    completed={completed}/>
            </div>
            <div className="num2">
                <h3>난 뭐든지 앞서가야해 ! 그렇기 때문에 예상치 못한 음악적 요소 속에 장시간 연주되는 악기의 솔로 연주가 멋있어보여.</h3>
                <RockBox id="ProRock2"/>
            </div>
            <div className="num2">
                <h3>찢어지는 듯한 일렉 기타, 보컬의 샤우팅 힘찬 드럼은 내 심장을 더욱 뜨겁게 타오르게 해.</h3>
                <RockBox id="HeavyRock2"/>
            </div>
            <div className="num2">
                <h3>특이한 기타리프 사운드와 대중적인 틀을 무시하고 각각의 아티스트마다 다채로운 창의성이 도드라지는 음악이 진정한 예술이라고 생각해.</h3>
                <RockBox id="AlterRock2"/>
            </div>
            <div className="num2">
                <h3>단순한 코드를 치는 기타와 빠르고 강렬한 분위기, 반정부적인 가사는 염색머리에 찢어진 청바지를 입고 반항하던 학창(사춘기)시절이 떠올라.</h3>
                <RockBox id="PunkRock2"/>
            </div>
            <div className="num2">
                <h3>무대 위 보컬과 연주자들이 환상에 잠긴듯 발만 보고 기타를 치며 노래를 불러.
아이러니 하지만 이 음악에 집중하면 나 역시 환상속에 잠기는 것 같아.</h3>
                <RockBox id="ShowRock2"/>
            </div>
            <div className='linkBox'>
                <Link to="/SecondPage8">
                    <button>다음으로</button> 
                </Link> 
            </div>
        </div>
        </ChakraProvider>
    );
};

export default SecondPage7;