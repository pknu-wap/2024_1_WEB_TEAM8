import React, { useEffect } from "react";
import "./Result.css";

import { ChakraProvider,VStack,Box,StackDivider } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/progress";
import { PopValueState } from "../../Components/PopBox";
import { useRecoilValue } from "recoil";

const Pop = () => {
     
    const PopValue = useRecoilValue(PopValueState);


    useEffect(()=>{
        console.log(PopValue);
    },[PopValue]);
    
    let Total = 0;
    let DancePop = 0;
    let ElecPop = 0;
    let IndiPop = 0;
    let LatinPop = 0;
    let BritPop = 0;

    for (const key in PopValue) { // 하위장르 점수 합하기
        if (key === 'DancePop1' || key === 'DancePop2') {
            Total += PopValue[key];
            DancePop += PopValue[key];
        } else if (key === 'ElecPop1' || key === 'ElecPop2') {
            Total += PopValue[key];
            ElecPop += PopValue[key];
        } else if (key === 'IndiPop1' || key === 'IndiPop2') {
            Total += PopValue[key];
            IndiPop += PopValue[key];
        } else if (key === 'LatinPop1' || key === 'LatinPop2') {
            Total += PopValue[key];
            LatinPop += PopValue[key];
        } else if (key === 'BritPop1' || key === 'BritPop2') {
            Total += PopValue[key];
            BritPop += PopValue[key];
        };
    };

    // 서브장르당 비율 계산 
    DancePop = parseInt(DancePop / Total * 100);
    ElecPop = parseInt(ElecPop / Total * 100);
    IndiPop = parseInt(IndiPop / Total * 100);
    LatinPop = parseInt(LatinPop / Total * 100);
    BritPop = parseInt(BritPop / Total * 100);

    return (
        <ChakraProvider>
        <div className="Top">
            <h2>당신은 '팝'을 좋아하실겁니다.</h2>
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
                <Progress value={DancePop} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    댄스팝 <button>장르설명</button> 
                    <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MY-2SwIhakiK3khw88oHzwc'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box>
                <Progress value={ElecPop} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    일렉트로닉팝 <button>장르설명</button>
                    <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67Mai4CdplvjIRFf-znKkJ7_l'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
                <Progress value={BritPop} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    브릿팝 <button>장르설명</button>
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67Mbfvh0blv_vISpJ5lqZUlZy'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
                <Progress value={IndiPop} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    인디팝 <button>장르설명</button>
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67Mbf-zGpf43gE5pfW8_ycXnR'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
                <Progress value={LatinPop} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    라틴팝 <button>장르설명</button>
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MaAWCbd2HcokoqH5sv44OJP'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
        </VStack>
        </ChakraProvider>
    );
}

export default Pop;