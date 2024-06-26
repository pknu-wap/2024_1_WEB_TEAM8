import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../App.css';

const Main = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio('./BackMusic.mp3'));

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

    useEffect(() => {
        const audio = audioRef.current; // Copy ref to a local variable

        return () => {
            // Cleanup function to pause the audio when the component unmounts
            audio.pause();
            audio.currentTime = 0; // Reset the audio to the start
        };
    }, []);

    return (
        <div className="Main">
            <div className='sound'>
                <img style={{cursor:"pointer"}}onClick={playMusic} src="./sound1.png" alt='Sound Icon'/>
            </div>
            <div className='text1'>
                <h2>숨겨진 나의 음악 </h2>
                <h1>DNA</h1>
            </div>
            <div className="text3">
                <h4 className="h4-1">음악 장르에는 하위장르를 포함하여 무수히 많은 장르가 존재합니다.</h4>
                <h4 className="h4-2">이 테스트에는 많은 장르 중 대중적인 장르들을 선별하여 추천됩니다.</h4>
            </div>
            <div className='mainButton'>
                <Link to="/firstPage">
                    <button>테스트 시작하기</button>  
                </Link> 
            </div>
        </div>
    );
};

export default Main;
