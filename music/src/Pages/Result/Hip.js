import React, { useEffect } from "react";
import "./Result.css";

import ProgressBar from "@ramonak/react-progress-bar";
import { ChakraProvider,VStack,Box,StackDivider, Tr } from "@chakra-ui/react";
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
               <div className="body">
        <br/><br/><br/><br/><br/>

        <div className="Top">
            <h3>당신의 음악 DNA는</h3>
            <h2>'<span>힙합</span>' 에 가깝군요</h2>
        </div>    

        <div class="singer">
        <table>
        <tr>
        <td><span>DrillHip</span><br/>< img src="/hip_singer1.png" alt="Pop Smoke"/>Pop Smoke</td>
        <td><span>TrapHip</span><br/><img src="/hip_singer2.png" alt="Future" />Future<br/></td>
        <td><span>AlterHiP</span><br/><img src="/hip_singer3.png" alt="Kanye west(Ye)" />Kanye west(Ye)<br/></td>
        <td><span>RageHip</span><br/><img src="/hip_singer4.png" alt="Trippie Redd" />Trippie Redd<br/></td>
        <td><span>BoomHip</span><br/><img src="/hip_singer5.png" alt="B.I.G." />B.I.G.</td> 
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
            <img src="/hip_m1.jpg" id="albumcover"/>
            <div id="song">DIOR<br/><span>Pop Smoke</span></div>
            <img src="/19.png" id="prohibit3"/>
            <div class="play"><img src="sound1.png" id="m1"/><span>play</span></div></td>
            <hr/>
        <hr/>
        </tr>
        <tr>
            <td><img src="/hip_m2.jpg" id="albumcover"/>
            <div id="song">Mask Off<br/><span>Future</span></div>
            <img src="/19.png" id="prohibit1"/>
            <div class="play"><img src="/sound1.png" id="m2"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="/hip_m3.jpg"  id="albumcover" />
            <div id="song">Bound 2<br/><span>Kanye west(Ye)</span></div>
            <img src="/19.png" id="prohibit3"/>
            <div class="play"><img src="sound1.png" id="m3"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="hip_m4.webp"  id="albumcover"/>
            <div id="song">Miss The Rage<br/><span>Trippie Redd</span></div>
            <img src="/19.png" id="prohibit1"/>
            <div class="play"><img src="sound1.png" id="m4"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="hip_m5.webp" id="albumcover"/>
            <div id="song">Hypnotize<br/><span>B.I.G.</span></div>
            <img src="/19.png" id="prohibit1"/>
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
            <ProgressBar completed={DrillHip}/>
                <div className="Sub">
                    드릴 <button>장르설명</button> 
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67Ma9DKt1sslE4gieQcTHhRwr'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box>
            <ProgressBar completed={TrapHip}/>
                <div className="Sub">
                    트랩 <button>장르설명</button>
                    <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MYL6EFzJvB0MR0L5mJIwLFf'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
            <ProgressBar completed={AlterHip}/>
                <div className="Sub">
                    얼터너티브 <button>장르설명</button>
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MZyq1Ry3FaRHdmkcI6f5BHK'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
            <ProgressBar completed={RageHip}/>
                <div className="Sub">
                    레이지 <button>장르설명</button>
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MbKaetJvGbjuo194EI9OfXi'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>z
            </Box>
            <Box >
            <ProgressBar completed={BoomHip}/>
                <div className="Sub">
                    붐뱁 <button>장르설명</button>
                    <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MaSwB65jkuc1vDC0BWsmpRvhttps://www.youtube.com/playlist?list=PLCqnvhwU67MaSwB65jkuc1vDC0BWsmpRv'}
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

export default Hip;