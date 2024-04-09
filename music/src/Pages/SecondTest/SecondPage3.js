import React from "react";
import { Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/progress";

import RockBox from "../../Components/RockBox";

import "./SecondPage.css";

const SecondPage3 = () => {

    return (
        <ChakraProvider>
        <div className="firstPage">
            <div className="progress">
                <Progress value={90} size='md' colorScheme='purple' />
            </div>
            <div className="num2">
                <h3>Q. 환상이 결합 된 환각적인 시공간을 넘나드는 듯한 실험적인 사운드
 지금 나는 내 다채로운 상상 속에만 존재하는 타임 트래블을 하고 싶어져.</h3>
                <RockBox id="ProRock1"/>
            </div>
            <div className="num2">
                <h3>Q.  사회의 문제와 불만을 담아 소리지르듯 표현해주는 어둡고 강렬한 폭팔적인 사운드가 좋아.
 듣고 있다보면 나도 모르게 상징이 담긴 손 모양을 하고 있고 복잡한 내 머리를 돌림판 마냥 돌리고 있어.</h3>
                <RockBox id="HeavyRock1"/>
            </div>
            <div className="num2">
                <h3>Q. 창의성이 도드라지며 다양한 스타일을 조합하는 도전 정신. 정의 내릴순 없지만 다채로움 안에 
균형을 잡은 특이하고 새로운 이 느낌. 가지각색해도 나만의 스타일을 추구하는 나와 비슷해.</h3>
                <RockBox id="AlterRock1"/>
            </div>
            <div className="num2">
                <h3>Q. 패턴은 반복적이지만 머리를 들썩이게 만드는 에너지가 담긴 드럼과 무엇이든 스스로 만들겠다는(DIY)
 정신을 깨우는 가사 이런 음악은 나의 텐션을 올려주고 오늘도 힘차게 전진하게 만들어.</h3>
                <RockBox id="PunkRock1"/>
            </div>
            <div className="num2">
                <h3>Q. 몽환적인 공간에 갇혀 보컬의 감성과 감정이 꿈틀거리는 구름이 되어 하늘위로 나를 둥둥 띄우는 것 같아.
 이건 꿈속이 아닐까? 뭔가 하늘을 헤엄치는것만 같아. </h3>
                <RockBox id="ShowRock1"/>
            </div>
            <div className='linkBox'>
                <Link to="/SecondPage4">
                    <button>다음으로</button> 
                </Link> 
            </div>
        </div>
        </ChakraProvider>
    );
};

export default SecondPage3;