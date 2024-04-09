import React from "react";
import {useState, useRef} from "react";
import { Link } from "react-router-dom";
import { Progress } from "@chakra-ui/progress";
import { ChakraProvider } from '@chakra-ui/react';

import RockBox from "../../Components/RockBox";
import RbBox from "../../Components/RbBox";
import JazzBox from "../../Components/JazzBox";
import "./FirstPage.css";

const FirstPage1 = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio('./trap.mp3'));

    const playMusic = () => {
        const audio = audioRef.current;

        if (audio.paused) {
        audio.play(); 
        } else {
        audio.pause();
        }
        
        setIsPlaying(!isPlaying);
        // audio.currenTime = 0 // 클릭하면 다시 처음으로 
    };

    return (
        <ChakraProvider>
        <div className="firstPage">
            <div className="progress">
                <Progress value={30} size='md' colorScheme='purple' />       
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>6번 사운드가 당신의 마음에 드나요?</h3>
                <RockBox id="Rock2"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>7번 사운드가 당신의 마음에 드나요?</h3>
                <RbBox id="RB1"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>8번 사운드가 당신의 마음에 드나요?</h3>
                <RbBox id="RB2"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>9번 사운드가 당신의 마음에 드나요?</h3>
                <JazzBox id="Jazz1"/>
            </div>
            <div className="num1">
                <img onClick={playMusic} src="./play.png" alt='Sound Icon'/>
                <h3>10번 사운드가 당신의 마음에 드나요?</h3>
                <JazzBox id="Jazz2"/>
            </div>
            <div className='nextPage'>
                <Link to="/secondPage">
                    <button>다음으로</button>  
                </Link> 
            </div>
        </div>
        </ChakraProvider>
    );
};

export default FirstPage1;