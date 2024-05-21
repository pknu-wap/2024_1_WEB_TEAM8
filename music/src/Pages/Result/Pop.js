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
        <div className="body">
        <br/><br/><br/><br/><br/>

        <div className="Top">
            <h3>당신의 음악 DNA는</h3>
            <h2>'<span>POP</span>' 에 가깝군요</h2>
        </div>    

        <div class="singer">
        <table>
        <tr>
        <td><span>DancePop</span><br/><br/>< img src="/pop_singer1.png" alt="Lady gaga"/>Lady gaga</td>
        <td><span>ElecPop</span><br/><br/><img src="/pop_singer2.png" alt="Halsey" />Halsey<br/></td>
        <td><span>IndiPop</span><br/><br/><img src="/pop_singer3.png" alt="The smtihs" />The smtihs<br/></td>
        <td><span>LatinPop</span><br/><br/><img src="/pop_singer4.png" alt="Camila Cabello" />Camila Cabello<br/></td>
        <td><span>BritPop</span><br/><br/><img src="/pop_singer5.png" alt="Oasis" />Oasis</td> 
        </tr>
        </table>
        </div>
        
        <div className="ques">
            <h2>이 노래는 어떠신가요?</h2>
            <h3>추천 플레이리스트 보기</h3>
        </div>
        <div class="musictable">
    <table>
        <tr>
        <hr/><td>
            <img src="/pop_m1.jpg" id="albumcover"/>
            <div id="song">Just Dance<br/><span>Lady gaga</span></div>
            <img src="19.png" id="prohibit1"/>
            <div class="play"><img src="sound1.png" id="m1"/><span>play</span></div></td>
            <hr/>
        <hr/>
        </tr>
        <tr>
            <td><img src="/pop_m2.jpg" id="albumcover"/>
            <div id="song">Gasoline<br/><span>Halsey</span></div>
            <div class="play"><img src="/sound1.png" id="m2"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="/pop_m3.jpg"  id="albumcover" />
            <div id="song">This Charming Man<br/><span>The smtihs</span></div>
            <div class="play"><img src="sound1.png" id="m3"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="/pop_m4.jpg"  id="albumcover" />
            <div id="song">Havana<br/><span>Camila Cabello</span></div>
            <div class="play"><img src="sound1.png" id="m4"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="/pop_m5.webp"  id="albumcover"/>
            <div id="song">Wonderwall<br/><span>Oasis</span></div>
            <div class="play"><img src="sound1.png" id="m5"/><span>play</span></div>
            </td><hr/> 
        </tr>
    </table>
    </div>

    <div class="graph">
        <h2>현재 <span>나의 음악 DNA</span>분포도</h2>
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
        <div className="caution">
            <h3>수많은 장르 중 하나의 장르를 선별하는 테스트이므로 개발자의 주관적인 판단, 생각이 들어있습니다.</h3>
            <h3>결과는 언제나 시간에 따라 달라질 수 있으며 절대적이지 않음을 말씀드립니다.</h3>
        </div>
        </div>
        </ChakraProvider>
    );
}

export default Pop;