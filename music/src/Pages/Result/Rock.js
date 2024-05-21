import React, { useEffect } from "react";
import "./Result.css";

import { ChakraProvider,VStack,Box,StackDivider } from "@chakra-ui/react";
import ProgressBar from "@ramonak/react-progress-bar";
import { RockValueState } from "../../Components/RockBox";
import { useRecoilValue } from "recoil";

const Rock = () => {
     
    const RockValue = useRecoilValue(RockValueState);

    useEffect(()=>{
        console.log(RockValue);
    },[RockValue]);
    
    let Total = 0;
    let ProRock = 0;
    let HeavyRock = 0;
    let AlterRock = 0;
    let PunkRock = 0;
    let ShowRock = 0;

    for (const key in RockValue) { // 하위장르 점수 합하기
        if (key === 'ProRock1' || key === 'ProRock2') {
            Total += RockValue[key];
            ProRock += RockValue[key];
        } else if (key === 'HeavyRock1' || key === 'HeavyRock2') {
            Total += RockValue[key];
            HeavyRock += RockValue[key];
        } else if (key === 'AlterRock1' || key === 'AlterRock2') {
            Total += RockValue[key];
            AlterRock += RockValue[key];
        } else if (key === 'PunkRock1' || key === 'PunkRock2') {
            Total += RockValue[key];
            PunkRock += RockValue[key];
        } else if (key === 'ShowRock1' || key === 'ShowRock2') {
            Total += RockValue[key];
            ShowRock += RockValue[key];
        };
    };

    // 서브장르당 비율 계산 
    ProRock = parseInt(ProRock / Total * 100);
    HeavyRock = parseInt(HeavyRock / Total * 100);
    AlterRock = parseInt(AlterRock / Total * 100);
    PunkRock = parseInt(PunkRock / Total * 100);
    ShowRock = parseInt(ShowRock / Total * 100);

    return (
        <ChakraProvider>
        <div className="Top">
            <h2>당신은 '락'을 좋아하실겁니다.</h2>
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
            <ProgressBar completed={ProRock}/>
                <div className="Sub">
                    프로그레시브 <button>장르설명</button>
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MZUIbKyS_2yQJ2JPZPSrzO0'}
                    ><img className="music" src="./Music.png" alt="p"/></button>
                </div>
            </Box>
            <Box>
            <ProgressBar completed={HeavyRock}/>
                <div className="Sub">
                    헤비 <button>장르설명</button>
                    <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67Mabu4H5mTkcfBopJhvYqLYZ'}
                    ><img className="music" src="./Music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
            <ProgressBar completed={AlterRock}/>
                <div className="Sub">
                    얼터너티브 <button>장르설명</button>
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MbTbdOhM-X-OLPTs18AsV3s'}
                    ><img className="music" src="./Music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
            <ProgressBar completed={PunkRock}/>
                <div className="Sub">
                    펑크 <button>장르설명</button>
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MbB05x1nVG1wAGYp9lyW_sZ'}
                    ><img className="music" src="./Music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
            <ProgressBar completed={ShowRock}/>
                <div className="Sub">
                    쇼 <button>장르설명</button>
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MZ9gE5dJgB9lO_tbSNK6m59'}
                    ><img className="music" src="./Music.png" alt="p"/></button>
                </div>
            </Box>
        </VStack>
        </ChakraProvider>
    );
}

export default Rock;