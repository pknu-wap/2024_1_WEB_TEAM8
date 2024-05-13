import React from "react";
import { Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/progress";

import JazzBox from "../../Components/JazzBox";

import "./SecondPage.css";

const SecondPage1 = () => {

    return (
        <ChakraProvider>
        <div className="firstPage">
            <div className="progress">
                <Progress value={32} size='md' colorScheme='purple' />
            </div>
            <div className="num2">
                <h3>해변에서 하이볼을 홀짝이며 흰모래사장에서 석양이 떠오르는 차분한 선율
 그리고 우리 앞에는 아리따운 탱고댄서들 이건 환상적인 바이브야.</h3>
                <JazzBox id="LatinJazz1"/>
            </div>
            <div className="num2">
                <h3>크리스마스에 파티에 드레스 코드는 레트로 의상과 정장이야. 한손에는 레드 와인, 한손은 너의
허리에.<br/> 따뜻한 분위기 속에서 흘러나오는 앙상블에 몸을 맡긴 난 특별한 사람이 된것만 같아.</h3>
                <JazzBox id="SwingJazz1"/>
            </div>
            <div className="num2">
                <h3>시가향이 풍기는 연기로 자욱한 어두운 바에 홀로 앉아 위스키 한잔 스트레이트로 때리고 비틀거리는 나.
흑인 보컬과 이 쫀득한 리듬이 나를 더 취하게 해.</h3>
                <JazzBox id="SoulJazz1"/>
            </div>
            <div className="num2">
                <h3>나는 길에서 증흥적으로 합을 맞추는 뮤지션들의 모습에 섹시함이 느껴져.<br/> 이것이 진정한
고수가 아닐까? 예측 불가능한 음악의 흐름에 귀를 귀울이는게 나만의 재미야.</h3>
                <JazzBox id="FreeJazz1"/>
            </div>
            <div className="num2">
                <h3>난 느긋하고 여유롭지 않아 차분함 속에도 속도감과 복잡하고 다양한 리듬이 나의 인생과 비슷해.</h3>
                <JazzBox id="BibobJazz1"/>
            </div>
            <div className='linkBox'>
                <Link to="/SecondPage2">
                    <button>다음으로</button> 
                </Link> 
            </div>
        </div>
        </ChakraProvider>
    );
};

export default SecondPage1;