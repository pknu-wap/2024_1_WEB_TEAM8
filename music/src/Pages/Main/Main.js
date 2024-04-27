import React from "react";
import { useEffect,useState,useRef } from "react";
import { Link } from "react-router-dom";
import '../../App.css';

import styled from "styled-components";
import { useScript } from './hooks';

import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LineShareButton,
    LineIcon,

} from "react-share"


const KakaoShareButton = styled.a`
    cursor: pointer;
`;
const KakaoIcon = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 24px;
`;



const Main = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio('./ex.mp3'));

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

    const currentUrl = window.location.href; // 임시 url

    // kakao SDK import하기
	const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
	
	// kakao sdk 초기화하기
	// status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
	useEffect(() => {
		if (status === "ready" && window.Kakao) {
			// 중복 initialization 방지
			if (!window.Kakao.isInitialized()) {
				// 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
				window.Kakao.init(process.env.REACT_APP_KAKAO_KEY);

			}
		}
	}, [status]);	    

    const handleKakaoButton = () => { 
        window.Kakao.Link.sendScrap({
            requestUrl: currentUrl,
        });
    };

    return (
        
        <div className="Main">
            <div className='sound'>
                <img onClick={playMusic} src="./sound.png" alt='Sound Icon'/>
            </div>
            <div className='text1'>
                <h2>음악 장르의 취향,</h2>
                <h2><span style={{fontStyle: 'italic', textShadow: '0 0 5px #848484'}}>사운드</span>와 함께 알아보기</h2>
            </div>
            <div className='text2'>
                <h3>소리가 첨부된 음악테스트를 통해</h3>
                <h3>자신의 음악장르를 찾아봐요!</h3>
            </div>
            <div className='text3'>
                <h4>음악 장르에는 하위장르를 포함하여 무수히 많은 장르가 존재합니다.</h4>
                <h4>이 테스트에는 많은 장르 중 대중적인 장르들을 선별하여 추천됩니다.</h4>
            </div>
            <hr/>
            <div className='mainButton'>
                <Link to="/firstPage">
                    <button>테스트 시작하기</button>  
                </Link> 
            </div>
            <hr/>
            <div className='text4'>
                <h3>친구와 함께 취향을 알아봐요!</h3>
            </div>
            <div className='share'>
                <FacebookShareButton style={{ marginRight: "20px" }} url={currentUrl}>
                    <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
                </FacebookShareButton>
                <TwitterShareButton style={{ marginRight: "20px" }} url={currentUrl}>
                    <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
                </TwitterShareButton>
                <LineShareButton style={{ marginRight: "20px" }} url={currentUrl}>
                    <LineIcon size={48} round={true} borderRadius={24}></LineIcon>
                </LineShareButton>
                <KakaoShareButton onClick={handleKakaoButton}>
					<KakaoIcon src="./kakao.png"></KakaoIcon>
				</KakaoShareButton>
            </div>
        </div>
    );
};

export default Main;