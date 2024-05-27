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
    // 음원 개수가 총 10개이므로 각 음원의 상태를 배열 형태로 다루어야함 
    const audioRefs = useRef([]);
    const playMusic = async(audioName) => {
        try {
            // audioRef에 음원이 설정되지 않았다면 설정해줘야함
            if (!audioRefs.current[audioName].src) {
                // audioName 변수(숫자 1~10)를 사용해서 각 문항마다 다른 음원을 서버로 요청함.
                const response = await fetch(`https://34.64.108.76.nip.io/music/${audioName}`, {
                    method: 'POST' // POST 요청으로 변경
                });
                // 응답 데이터(response)는 바이너리 데이터이므로 Blob(Binary Large Object) 객체로 변환하여 저장.
                const blob = await response.blob();
                // Blob 객체로부터 URL을 생성하여 audioRef의 src에 저장해줌 
                audioRefs.current[audioName].src = URL.createObjectURL(blob); // 생성된 URL을 audioRef에 설정
            }
            
            // 이전에 재생 중이던 모든 오디오 일시 정지 
            audioRefs.current.forEach((audio,i)=>{
                if (i !== audioName && !audio.paused){
                    audio.pause();
                    audio.currentTime = 0;
                    }
                })
            
            if (audioRefs.current[audioName].paused) {
                audioRefs.current[audioName].play();
            } else {
                audioRefs.current[audioName].pause();
            }
        } catch (error) {
            console.error('Error handling audio:', error);
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
                <img onClick={() => playMusic(6)} src="./sound1.png" alt='Sound Icon'/>
                <h3><span>6.</span><div class="q1">6번 사운드가 당신의 마음에 드나요?</div></h3>
                <RockBox id="Rock2"/>
                <audio ref={el => audioRefs.current[6] = el} />
            </div>
            <div className="num1">
                <img onClick={() => playMusic(7)} src="./sound1.png" alt='Sound Icon'/>
                <h3><span>7.</span><div class="q1">7번 사운드가 당신의 마음에 드나요?</div></h3>
                <RbBox id="RB1"/>
                <audio ref={el => audioRefs.current[7] = el} />
            </div>
            <div className="num1">
                <img onClick={() => playMusic(8)} src="./sound1.png" alt='Sound Icon'/>
                <h3><span>8.</span><div class="q1">8번 사운드가 당신의 마음에 드나요?</div></h3>
                <RbBox id="RB2"/>
                <audio ref={el => audioRefs.current[8] = el} />
            </div>
            <div className="num1">
                <img onClick={() => playMusic(9)} src="./sound1.png" alt='Sound Icon'/>
                <h3><span>9.</span><div class="q1">9번 사운드가 당신의 마음에 드나요?</div></h3>
                <JazzBox id="Jazz1"/>
                <audio ref={el => audioRefs.current[9] = el} />
            </div>
            <div className="num1">
                <img onClick={() => playMusic(10)} src="./sound1.png" alt='Sound Icon'/>
                <h3><span>10.</span><div class="q1">10번 사운드가 당신의 마음에 드나요?</div></h3>
                <JazzBox id="Jazz2"/>
                <audio ref={el => audioRefs.current[10] = el} />
            </div>
            <NextButton to="/SecondPage" />
        </div>
        </ChakraProvider>
    );
};

export default FirstPage1;