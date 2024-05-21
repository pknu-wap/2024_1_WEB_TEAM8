import React, { useEffect } from "react";
import "./Result.css";

import ProgressBar from "@ramonak/react-progress-bar";
import { ChakraProvider,VStack,Box,StackDivider } from "@chakra-ui/react";
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
               <div className="body">
        <br/><br/><br/><br/><br/>

        <div className="Top">
            <h3>당신의 음악 DNA는</h3>
            <h2>'<span>재즈</span>' 에 가깝군요</h2>
        </div>    
        
        <div class="singer">
        <table>
        <tr>
        <td><span>LatinJazz</span><br/>< img src="/jazz_singer1.png" alt="Stan Getz"/>Stan Getz</td>
        <td><span>SwingJazz</span><br/><img src="/jazz_singer2.png" alt="Benny Goodman" />Benny Goodman<br/></td>
        <td><span>SoulJazz</span><br/><img src="/jazz_singer3.png" alt="Jimmy smith" />Jimmy smith<br/></td>
        <td><span>FreeJazz</span><br/><img src="/jazz_singer4.png" alt="Ornette Coleman" />Ornette Coleman<br/></td>
        <td><span>BibobJazz</span><br/><img src="/jazz_singer5.png" alt="Charlie Parker" />Charlie Parker</td> 
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
            <img src="/jazz_m1.jpg" id="albumcover" />
            <div id="song">The Girl From Ipanema<br/><span>Stan Getz</span></div>
            <div class="play"><img src="sound1.png" id="m1"/><span>play</span></div></td>
            <hr/>
        <hr/>
        </tr>
        <tr>
            <td><img src="/jazz_m2.jpg" id="albumcover"  />
            <div id="song">Sing Sing Sing<br/><span>Benny Goodman</span></div>
            <div class="play"><img src="/sound1.png" id="m2"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="/jazz_m3.jpg"id="albumcover" />
            <div id="song">Midnight Special<br/><span>Jimmy smith</span></div>
            <div class="play"><img src="sound1.png" id="m3"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="/jazz_m4.jpg" id="albumcover"  />
            <div id="song"> Lonely Woman<br/><span>Ornette Coleman</span></div>
            <div class="play"><img src="sound1.png" id="m4"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="/jazz_m5.jpg" id="albumcover" />
            <div id="song">Confirmation<br/><span>Charlie Parker</span></div>
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
            <ProgressBar completed={LatinJazz}/>
                <div className="Sub">
                    라틴 <button>장르설명</button> 
                    <button className="btn"
                            onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MYz-ulK000LqaLp6XPVVD6s'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box>
            <ProgressBar completed={SwingJazz}/>
                <div className="Sub">
                    스윙 <button>장르설명</button>
                    <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MYu0VZR6fElTGZLEeq5olcL'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
            <ProgressBar completed={SoulJazz}/>
                <div className="Sub">
                    소울 <button>장르설명</button>
                    <button className="btn"
                            onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MYDB57IXkCJN8NiMLeq0xmM'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
            <ProgressBar completed={FreeJazz}/>
                <div className="Sub">
                    프리 <button>장르설명</button>
                    <button className="btn"
                            onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MaS65mSke-ouu9Nz5PJLLXw'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
            <ProgressBar completed={BibobJazz}/>
                <div className="Sub">
                    비밥 <button>장르설명</button>
                    <button className="btn"
                            onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MaWk1QneIEshUvxCa9aBKEv'}
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

export default Jazz;