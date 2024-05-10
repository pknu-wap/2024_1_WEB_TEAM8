import React, { useEffect } from "react";
import "./Result.css";

import { ChakraProvider,VStack,Box,StackDivider } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/progress";
import { JazzValueState } from "../../Components/JazzBox";
import { useRecoilValue } from "recoil";

const Jazz = () => {
     
    const JazzValue = useRecoilValue(JazzValueState);

    useEffect(()=>{
        console.log(JazzValue);
    },[JazzValue]);
    
    let Total = 0;
    let LatinJazz = 0;
    let SwingJazz = 0;
    let SoulJazz = 0;
    let FreeJazz = 0;
    let BibobJazz = 0;

    for (const key in JazzValue) { // 하위장르 점수 합하기
        if (key === 'LatinJazz1' || key === 'LatinJazz2') {
            Total += JazzValue[key];
            LatinJazz += JazzValue[key];
        } else if (key === 'SwingJazz1' || key === 'SwingJazz1') {
            Total += JazzValue[key];
            SwingJazz += JazzValue[key];
        } else if (key === 'SoulJazz1' || key === 'SoulJazz2') {
            Total += JazzValue[key];
            SoulJazz += JazzValue[key];
        } else if (key === 'FreeJazz1' || key === 'FreeJazz2') {
            Total += JazzValue[key];
            FreeJazz += JazzValue[key];
        } else if (key === 'BibobJazz1' || key === 'BibobJazz2') {
            Total += JazzValue[key];
            BibobJazz += JazzValue[key];
        };
    };

    // 서브장르당 비율 계산 
    LatinJazz = parseInt(LatinJazz / Total * 100);
    SwingJazz = parseInt(SwingJazz / Total * 100);
    SoulJazz = parseInt(SoulJazz / Total * 100);
    FreeJazz = parseInt(FreeJazz / Total * 100);
    BibobJazz = parseInt(BibobJazz / Total * 100);

    const maxPoint = Math.max(LatinJazz,SwingJazz,SoulJazz,FreeJazz,BibobJazz);
    var maxGenre;
    
    if(maxPoint===LatinJazz){
        maxGenre="라틴";
    }if(maxPoint===SwingJazz){
        maxGenre="스윙";
    }if(maxPoint===SoulJazz){
        maxGenre="스윙";
    }if(maxPoint===FreeJazz){
        maxGenre="스윙";
    }if (maxPoint===BibobJazz){
        maxGenre="비밥";
    }

    return (
        <ChakraProvider>
        <div className="Top">
            <h2>당신의 음악 DNA는 </h2>
            <p><span>재즈에 속한 하위장르 중 {maxGenre}에 가깝군요</span>에 가깝군요</p>
        </div>
        <div className="Playlist">
            <h3>이 노래를 들어보세요!!</h3>
            <h3>- 추천 플레이리스트 바로가기 -</h3>
        </div>
        (플레이리스트 링크)
        <hr/>
        <div className="RB">

        </div>
        <hr/>
        <div className="caution">
            <h3>수많은 장르 중 하나의 장르를 선별하는 테스트이므로</h3>
            <h3>개발자의 주관적인 판단, 생각이 들어있습니다.</h3>
            <h3>결과는 언제나 시간에 따라 달라질 수 있으며</h3>
            <h3>절대적이지 않음을 말씀드립니다.</h3>
        </div>
        <VStack
            className="Stack"
            divider={<StackDivider borderColor='gray.300' />}
            spacing={3}
            align='stretch'
            >
            <Box>
                <Progress value={LatinJazz} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    라틴 <button>장르설명</button> 
                    <button className="btn"
                            onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MYz-ulK000LqaLp6XPVVD6s'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box>
                <Progress value={SwingJazz} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    스윙 <button>장르설명</button>
                    <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MYu0VZR6fElTGZLEeq5olcL'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
                <Progress value={SoulJazz} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    소울 <button>장르설명</button>
                    <button className="btn"
                            onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MYDB57IXkCJN8NiMLeq0xmM'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
                <Progress value={FreeJazz} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    프리 <button>장르설명</button>
                    <button className="btn"
                            onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MaS65mSke-ouu9Nz5PJLLXw'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
                <Progress value={BibobJazz} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    비밥 <button>장르설명</button>
                    <button className="btn"
                            onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MaWk1QneIEshUvxCa9aBKEv'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
        </VStack>
        </ChakraProvider>
    );
}

export default Jazz;