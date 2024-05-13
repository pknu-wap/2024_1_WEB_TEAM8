import React from "react";
import { Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/progress";

import JazzBox from "../../Components/JazzBox";

import "./SecondPage.css";

const SecondPage5 = () => {

    return (
        <ChakraProvider>
        <div className="firstPage">
            <div className="progress">
                <Progress value={64} size='md' colorScheme='purple' />
            </div>
            <div className="num2">
                <h3>해모래알들이 부딪히는듯한 리듬과 차분하고 경쾌한 리듬, 따스한 햇살같은 멜로디.. 
                    이 조합은 마치 스페인 바다가 훤히 보이는 브런치 카페에 와 있는것 같아. 이게 낭만 아닐까?모래알들이 부딪히는듯한 리듬과 차분하고 경쾌한 리듬, 따스한 햇살같은 멜로디.. 이 조합은 마치 스페인 바다가 훤히 보이는 브런치 카페에 와 있는것 같아. 이게 낭만 아닐까?</h3>
                <JazzBox id="LatinJazz2"/>
            </div>
            <div className="num2">
                <h3>나도 모르게 고개를 까딱이며 리듬에 발을 툭툭치게 되는 음악! 
                    구두를 바닥에 딱딱 거리며 너의 손을 잡고 노을 위에서 함께 춤을 추고 싶어!</h3>
                <JazzBox id="SwingJazz2"/>
            </div>
            <div className="num2">
                <h3> 늦은 저녁 위스키 바에 중절모를 쓴 흑인 뮤지션이 피아노를 치고 있어. 
                    그의 피아노 건반 터치는 마치 내 영혼을 만지는것 같아.</h3>
                <JazzBox id="SoulJazz2"/>
            </div>
            <div className="num2">
                <h3>정통적인 규칙을 무시한채 연주자의 느낌과 감정에만 몰입해 즉흥으로 표현하는 음악을 들으면 나도 나의 감정을 자유롭고 솔직하게 표현하고 싶어져.</h3>
                <JazzBox id="FreeJazz2"/>
            </div>
            <div className="num2">
                <h3>주제 하나를 가지고 즉흥적으로 자유롭게 합을 맞추는 뮤지션들의 모습에서 섹시함이 느껴져. 이것이 진정한 고수가 아닐까? 예측 불가능한 음악의 흐름에 귀를 귀울이는게 나만의 재미야.</h3>
                <JazzBox id="BibobJazz2"/>
            </div>
            <div className='linkBox'>
                <Link to="/SecondPage9">
                    <button>다음으로</button> 
                </Link> 
            </div>
        </div>
        </ChakraProvider>
    );
};

export default SecondPage5;