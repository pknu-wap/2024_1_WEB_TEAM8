import React from "react";
import {useState, useRef} from "react";
import { Link } from "react-router-dom";
import { Progress } from "@chakra-ui/progress";
import { ChakraProvider } from '@chakra-ui/react';

import PopBox from "../../Components/PopBox";
import HipBox from "../../Components/HipBox";
import RockBox from "../../Components/RockBox";

import "./FirstPage.css"


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

    

    return (
        <ChakraProvider>
        <div className="firstPage">
            <div className="progress">
                <Progress value={8} size='md' colorScheme='purple'/>
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