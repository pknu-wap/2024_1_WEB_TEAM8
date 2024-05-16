import React, { useEffect } from "react";
import {useState, useRef} from "react";
import { Link } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import ProgressBar from "@ramonak/react-progress-bar";

import PopBox from "../../Components/PopBox";
import HipBox from "../../Components/HipBox";
import RockBox from "../../Components/RockBox";

import "./FirstPage.css"
import testData from "../../Components/testData";

const FirstPage = () => {

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

    // 진행도 애니메이션
    const [completed, setCompleted] = useState(0);

      useEffect(() => {
        const timeout = setTimeout(() => {
            setCompleted(testData[0].completed); 
        }, 20); 
    
        return () => clearTimeout(timeout); // 컴포넌트가 언마운트되거나 재렌더링될 때 타임아웃을 클리어
    }, []); // 처음 렌더링될 때만 실행
    

    return (
        <ChakraProvider>
        <div className="firstPage">
            <div className="progress">
                <ProgressBar
                    key={0}
                    bgcolor={testData[0].bgcolor}
                    completed={completed}/>
            </div>
            <div className="num1">
                <img onClick={() => playMusic(0)} src="./sound1.png" alt='Sound Icon'/>
                <h3><span>1.</span><div class="q1">1번 사운드가 당신의 마음에 드나요?</div></h3>
                <PopBox id="Pop1"/>
            </div>
            <div className="num1">
                <img onClick={() => playMusic(1)} src="./sound1.png" alt='Sound Icon'/>
                <h3><span>2.</span><div class="q1">2번 사운드가 당신의 마음에 드나요?</div></h3>
                <PopBox id="Pop2"/>
            </div>
            <div className="num1">
                <img onClick={() => playMusic(1)} src="./sound1.png" alt='Sound Icon'/>
                <h3><span>3.</span><div class="q1">3번 사운드가 당신의 마음에 드나요?</div></h3>
                <HipBox id="Hip1"/>
            </div>
            <div className="num1">
                <img onClick={() => playMusic(1)} src="./sound1.png" alt='Sound Icon'/>
                <h3><span>4.</span><div class="q1">4번 사운드가 당신의 마음에 드나요?</div></h3>
                <HipBox id="Hip2"/>
            </div>
            <div className="num1">
                <img onClick={() => playMusic(1)} src="./sound1.png" alt='Sound Icon'/>
                <h3><span>5.</span><div class="q1">5번 사운드가 당신의 마음에 드나요?</div></h3>
                <RockBox id="Rock1"/>
            </div>
            <div className='nextPage'>
                <Link to="/FirstPage1">
                    <button>다음으로</button>  
                </Link> 
            </div>
        </div>
        </ChakraProvider>
    );
};

export default FirstPage;