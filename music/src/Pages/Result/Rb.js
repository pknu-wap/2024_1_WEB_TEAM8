import React, {useEffect} from "react";
import "./Result.css";
import { ChakraProvider,VStack,Box,StackDivider } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/progress";
import { RbValueState } from "../../Components/RbBox";
import { useRecoilValue } from "recoil";

const Rb = () => {
    const RbValue = useRecoilValue(RbValueState);

    useEffect(()=>{
        console.log(RbValue); 
    },[RbValue])

    let Total = 0;
    let NeoRb = 0;
    let ComtemRb = 0;
    let PunkRb = 0;
    let SoulRb = 0;
    let AlterRb = 0;

    for (const key in RbValue) { // 하위장르 점수 합하기
        if (key === 'NeoRB1' || key === 'NeoRB2') {
            Total += RbValue[key];
            NeoRb += RbValue[key];
        } else if (key === 'ComRB1' || key === 'ComRB2') {
            Total += RbValue[key];
            ComtemRb += RbValue[key];
        } else if (key === 'SoulRB1' || key === 'SoulRB2') {
            Total += RbValue[key];
            SoulRb += RbValue[key];
        } else if (key === 'PunkRB1' || key === 'PunkRB2') {
            Total += RbValue[key];
            PunkRb += RbValue[key];
        } else if (key === 'AlterRB1' || key === 'AlterRB2') {
            Total += RbValue[key];
            AlterRb += RbValue[key];
        };
    };

    NeoRb = parseInt(NeoRb / Total * 100);
    ComtemRb = parseInt(ComtemRb / Total * 100);
    PunkRb = parseInt(PunkRb / Total * 100);
    SoulRb = parseInt(SoulRb / Total * 100);
    AlterRb = parseInt(AlterRb / Total * 100);


    return (
        <ChakraProvider>
        <div className="body">
        <br/><br/><br/><br/><br/>

        <div className="Top">
            <h3>당신의 음악 DNA는</h3>
            <h2>'<span>R&B</span>' 에 가깝군요</h2>
        </div>    

        <div class="singer">
        <table>
        <tr>
        <td><span>NeoRB</span><br/>< img src="/rb_singer1.png" alt="D'Angelo"/>D'Angelo</td>
        <td><span>ComRB</span><br/><img src="/rb_singer2.png" alt="SZA" />Beyoncé<br/></td>
        <td><span>PunkRB</span><br/><img src="/rb_singer3.png" alt="Michael Jackson" />Michael Jackson<br/></td>
        <td><span>SoulRB</span><br/><img src="/rb_singer4.png" alt="Stevie Wonder" />Stevie Wonder<br/></td>
        <td><span>AlterRB</span><br/><img src="/rb_singer5.png" alt="Frank ocean" />Frank ocean</td> 
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
            <img src="rb_m1.jpg"  id="albumcover"/>
            <div id="song">Brown Sugar<br/><span>D'Angelo</span></div>
            <img src="19.png" id="prohibit1"/>
            <div class="play"><img src="sound1.png" id="m1"/><span>play</span></div></td>
            <hr/>
        <hr/>
        </tr>
        <tr>
            <td><img src="/rb_m2.jpg"  id="albumcover" />
            <div id="song">Crazy In Love<br/><span>Beyoncé</span></div>
            <div class="play"><img src="/sound1.png" id="m2"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="/rb_m3.jpg"  id="albumcover"/>
            <div id="song"> I Got You<br/><span>Michael Jackson</span></div>
            <div class="play"><img src="sound1.png" id="m3"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="/rb_m4.jpg"  id="albumcover" />
            <div id="song">You Send Me<br/><span>Stevie Wonder</span></div>
            <div class="play"><img src="sound1.png" id="m4"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="/rb_m5.jpg"  id="albumcover" />
            <div id="song">Self Control<br/><span>Frank ocean</span></div>
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
                <Progress value={NeoRb} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    네오소울 <button>장르설명</button>
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MYDejvhbWZoWsq6gd1ttD20'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
                <Progress value={ComtemRb} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    컨템포러리 <button>장르설명</button>
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MY2BZBQY_JBa2N6FraJL0su'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
                <Progress value={PunkRb} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    펑크 <button>장르설명</button>
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MYyy_jgPMM_gkmG3LJgdJ_G'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
                <Progress value={SoulRb} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    소울 <button>장르설명</button>
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MZyhmm-4g_T2xdeSrQJ6r0O'}
                    ><img className="music" src="./music.png" alt="p"/></button>
                </div>
            </Box>
            <Box >
                <Progress value={AlterRb} size='lg' colorScheme='blue'/>
                <div className="Sub">
                    얼터너티브 <button>장르설명</button>
                <button className="btn"
                        onClick={() => window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MblTfvFXrghM3DHYXyAkiG0'}
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

export default Rb;