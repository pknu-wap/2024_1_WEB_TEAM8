import React, { useEffect } from "react";
import "./Result.css";

import { ChakraProvider,VStack,Box } from "@chakra-ui/react";
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
       <div className="body">
        <br/><br/><br/><br/><br/>

        <div className="Top">
            <h3>당신의 음악 DNA는</h3>
            <h2>'<span>Rock</span>' 에 가깝군요</h2>
        </div>    

        <div class="singer">
        <table>
        <tr>
        <td><span>ProRock</span><br/><br/>< img src="/rock_singer1.png" alt="Yes"/>Yes</td>
        <td><span>HeavyRock</span><br/><br/><img src="/rock_singer2.png" alt="Metallica" />Metallica<br/></td>
        <td><span>AlterRock</span><br/><br/><img src="/rock_singer3.png" alt="Nirvana" />Nirvana<br/></td>
        <td><span>PunkRock</span><br/><br/><img src="/rock_singer4.png" alt="Sex pistols" />Sex pistols<br/></td>
        <td><span>ShowRock</span><br/><br/><img src="/rock_singer5.png" alt="Slow dive" />Slow dive</td> 
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
            <img src="/rock_m1.jpg" id="albumcover"/>
            <div id="song">Owner of a Lonely Heart<br/><span>Yes</span></div>
            <div class="play"><img src="sound1.png" id="m1"/><span>play</span></div></td>
            <hr/>
        <hr/>
        </tr>
        <tr>
            <td><img src="/rock_m2.webp" id="albumcover"/>
            <div id="song">Enter Sandman<br/><span>Metallica</span></div>
            <div class="play"><img src="/sound1.png" id="m2"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="/rock_m3.webp"  id="albumcover" />
            <div id="song">Smells Like Teen Spirit<br/><span>Nirvana</span></div>
            <div class="play"><img src="sound1.png" id="m3"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="/rock_m4.jpg"  id="albumcover" />
            <div id="song">God Save The Queen<br/><span>Sex pistols</span></div>
            <div class="play"><img src="sound1.png" id="m4"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="/rock_m5.jpg"  id="albumcover"/>
            <div id="song">When the Sun Hits<br/><span>Slow dive</span></div>
            <div class="play"><img src="sound1.png" id="m5"/><span>play</span></div>
            </td><hr/> 
        </tr>
    </table>
    </div>

    <div class="graph">
        <h2>현재 <span>나의 음악 DNA</span>분포도</h2>
    </div>
        <VStack
            spacing={3}
            align='stretch'
            marginLeft="335px"
            marginRight="335px"
            >
            <Box w='800px'>
            <ProgressBar completed={ProRock}/>
                <div className="Sub">
                    프로그레시브
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MZUIbKyS_2yQJ2JPZPSrzO0'}
                    ><img className="music" src="./Music.png" alt="p"/></button>
                </div>
            </Box>
            <Box w='800px'>
            <ProgressBar completed={HeavyRock}/>
                <div className="Sub">
                    헤비 
                    <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67Mabu4H5mTkcfBopJhvYqLYZ'}
                    ><img className="music" src="./Music.png" alt="p"/></button>
                </div>
            </Box>
            <Box w='800px'>
            <ProgressBar completed={AlterRock}/>
                <div className="Sub">
                    얼터너티브 
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MbTbdOhM-X-OLPTs18AsV3s'}
                    ><img className="music" src="./Music.png" alt="p"/></button>
                </div>
            </Box>
            <Box w='800px'>
            <ProgressBar completed={PunkRock}/>
                <div className="Sub">
                    펑크 
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MbB05x1nVG1wAGYp9lyW_sZ'}
                    ><img className="music" src="./Music.png" alt="p"/></button>
                </div>
            </Box>
            <Box w='800px'>
            <ProgressBar completed={ShowRock}/>
                <div className="Sub">
                    쇼 
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MZ9gE5dJgB9lO_tbSNK6m59'}
                    ><img className="music" src="./Music.png" alt="p"/></button>
                </div>
            </Box>
        </VStack>
        </div>
        </ChakraProvider>
    );
}

export default Rock;