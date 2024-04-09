import React, { useEffect } from "react";
import "./Result.css";

import { ChakraProvider,VStack,Box,StackDivider, Tr } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/progress";
import { HipValueState } from "../../Components/HipBox";
import { useRecoilValue } from "recoil";

const Hip = () => {
     
    const HipValue = useRecoilValue(HipValueState);

    useEffect(()=>{
        console.log(HipValue);
    },[HipValue]);
    
    let Total = 0;
    let DrillHip = 0;
    let TrapHip = 0;
    let AlterHip = 0;
    let RageHip = 0;
    let BoomHip = 0;

    for (const key in HipValue) { // 하위장르 점수 합하기
        if (key === 'DrillHip1' || key === 'DrillHip2') {
            Total += HipValue[key];
            DrillHip += HipValue[key];
        } else if (key === 'TrapHip1' || key === 'TrapHip2') {
            Total += HipValue[key];
            TrapHip += HipValue[key];
        } else if (key === 'AlterHip1' || key === 'AlterHip2') {
            Total += HipValue[key];
            AlterHip += HipValue[key];
        } else if (key === 'RageHip1' || key === 'RageHip2') {
            Total += HipValue[key];
            RageHip += HipValue[key];
        } else if (key === 'BoomHip1' || key === 'BoomHip2') {
            Total += HipValue[key];
            BoomHip += HipValue[key];
        };
    };

    // 서브장르당 비율 계산 
    DrillHip = parseInt(DrillHip / Total * 100);
    TrapHip = parseInt(TrapHip / Total * 100);
    AlterHip = parseInt(AlterHip / Total * 100);
    RageHip = parseInt(RageHip / Total * 100);
    BoomHip = parseInt(BoomHip / Total * 100);

    return (
        <ChakraProvider>
        <div className="Top">
            <h2>당신은 '힙합'을 좋아하실겁니다.</h2>
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
                <Progress value={DrillHip} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    드릴 <button>장르설명</button> 
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67Ma9DKt1sslE4gieQcTHhRwr'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box>
                <Progress value={TrapHip} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    트랩 <button>장르설명</button>
                    <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MYL6EFzJvB0MR0L5mJIwLFf'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
                <Progress value={AlterHip} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    얼터너티브 <button>장르설명</button>
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MZyq1Ry3FaRHdmkcI6f5BHK'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
                <Progress value={RageHip} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    레이지 <button>장르설명</button>
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MbKaetJvGbjuo194EI9OfXi'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
                <Progress value={BoomHip} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    붐뱁 <button>장르설명</button>
                    <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MaSwB65jkuc1vDC0BWsmpRvhttps://www.youtube.com/playlist?list=PLCqnvhwU67MaSwB65jkuc1vDC0BWsmpRv'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
        </VStack>
        </ChakraProvider>
    );
}

export default Hip;