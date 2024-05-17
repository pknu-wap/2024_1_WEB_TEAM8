import React from "react";
import {useState, useRef} from "react";
import { ChakraProvider } from '@chakra-ui/react';
import ProgressBar from "@ramonak/react-progress-bar";

import RockBox from "../../Components/RockBox";
import RbBox from "../../Components/RbBox";
import JazzBox from "../../Components/JazzBox";
import NextButton from "../../Components/NextButton";
import useCompleted from "../../Components/useCompleted";

import "./FirstPage.css";
import testData from "../../Components/testData";

const FirstPage1 = () => {
    const completed = useCompleted(0,1);

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef([
        new Audio('./ex.mp3'),
        new Audio('./trap.mp3'),
    ]);

    const playMusic = (index) => {
        const audio = audioRef.current[index];

        // 이전에 재생 중이던 모든 오디오 일시 정지 
        audioRef.current.forEach((audio,i)=>{
            if (i !== index && !audio.paused){
                audio.pause();
                audio.currentTime = 0;
            }
        })

        if (audio.paused) {
        audio.play(); 
        } else {
        audio.pause();
        }
        
        setIsPlaying(!isPlaying);
    };

    return (
        <ChakraProvider>
        <div className="firstPage">
            <div className="progress">
            <ProgressBar
                    key={1}
                    bgcolor={testData[1].bgcolor}
                    completed={completed}/>
            </div>
            <div className="num1">
                <img onClick={() => playMusic(0)} src="./sound1.png" alt='Sound Icon'/>
                <h3><span>6.</span><div class="q1">6번 사운드가 당신의 마음에 드나요?</div></h3>
                <RockBox id="Rock2"/>
            </div>
            <div className="num1">
                <img onClick={() => playMusic(1)} src="./sound1.png" alt='Sound Icon'/>
                <h3><span>7.</span><div class="q1">7번 사운드가 당신의 마음에 드나요?</div></h3>
                <RbBox id="RB1"/>
            </div>
            <div className="num1">
                <img onClick={() => playMusic(1)} src="./sound1.png" alt='Sound Icon'/>
                <h3><span>8.</span><div class="q1">8번 사운드가 당신의 마음에 드나요?</div></h3>
                <RbBox id="RB2"/>
            </div>
            <div className="num1">
                <img onClick={() => playMusic(1)} src="./sound1.png" alt='Sound Icon'/>
                <h3><span>9.</span><div class="q1">9번 사운드가 당신의 마음에 드나요?</div></h3>
                <JazzBox id="Jazz1"/>
            </div>
            <div className="num1">
                <img onClick={() => playMusic(1)} src="./sound1.png" alt='Sound Icon'/>
                <h3><span>10.</span><div class="q1">10번 사운드가 당신의 마음에 드나요?</div></h3>
                <JazzBox id="Jazz2"/>
            </div>
            <NextButton to="/SecondPage"/>
        </div>
        </ChakraProvider>
    );
};

export default FirstPage1;