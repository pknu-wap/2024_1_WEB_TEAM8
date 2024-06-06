import React, { useEffect } from "react";
import "./Result.css";
import CommonModal from './Modal';

import ProgressBar from "@ramonak/react-progress-bar";
import { ChakraProvider,VStack, HStack,Box, useDisclosure, Button} from "@chakra-ui/react";
import { JazzValueState } from "../../Components/JazzBox";
import { useRecoilValue } from "recoil";
import {
    LatinJazzModalBody,
    SwingJazzModalBody,
    SoulJazzModalBody,
    FreeJazzModalBody,
    BibobJazzModalBody} from "./ModalCon"

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

    const maxProgress = Math.max(LatinJazz, SwingJazz, SoulJazz, FreeJazz, BibobJazz);

    const { isOpen: isLatinJazzOpen, onOpen: onLatinJazzOpen, onClose: onLatinJazzClose } = useDisclosure();
    const { isOpen: isSwingJazzOpen, onOpen: onSwingJazzOpen, onClose: onSwingJazzClose } = useDisclosure();
    const { isOpen: isSoulJazzOpen, onOpen: onSoulJazzOpen, onClose: onSoulJazzClose } = useDisclosure();
    const { isOpen: isFreeJazzOpen, onOpen: onFreeJazzOpen, onClose: onFreeJazzClose } = useDisclosure();
    const { isOpen: isBibobJazzOpen, onOpen: onBibobJazzOpen, onClose: onBibobJazzClose } = useDisclosure();

    return (
        <ChakraProvider>
               <div className="body">
        <br/><br/><br/><br/><br/>

        <div className="Top">
            <h3>당신의 음악 DNA는</h3>
            <h2>'<span>재즈</span>' 에 가깝군요!</h2>
        </div>    
        
        <div class="singer">
            <table>
            <tr>
            <td><span>Latin</span><br/>< img src="/jazz_singer1.png" alt="Stan Getz"/>Stan Getz</td>
            <td><span>Swing</span><br/><img src="/jazz_singer2.png" alt="Benny Goodman" />Benny Goodman<br/></td>
            <td><span>Soul</span><br/><img src="/jazz_singer3.png" alt="Jimmy smith" />Jimmy smith<br/></td>
            <td><span>Free</span><br/><img src="/jazz_singer4.png" alt="Ornette Coleman" />Ornette Coleman<br/></td>
            <td><span>Bebop</span><br/><img src="/jazz_singer5.png" alt="Charlie Parker" />Charlie Parker</td> 
            </tr>
            </table>
        </div>
        <div class="graph">
            <h2>현재 <span>나의 음악 DNA</span>분포도</h2>
        </div>
        <VStack
            spacing={3}
            align='stretch'
            marginLeft="300px"
            marginRight="335px"
            className="vstack-custom" 
        >
            <Box className="first_box" w='800px'>
                <HStack spacing={4} align='center'>
                    <div className="Sub">
                        <Button onClick={onLatinJazzOpen}>라틴</Button>
                        <CommonModal isOpen={isLatinJazzOpen} onClose={onLatinJazzClose} title="라틴">
                            <LatinJazzModalBody />
                        </CommonModal>
                    </div>
                    <Box flex='1'>
                        <ProgressBar 
                        bgColor={LatinJazz === maxProgress ? "#D6FF32" : "white"}
                        baseBgColor="rgb(37, 37, 103)"
                        labelColor="black"
                        completed={LatinJazz}/>
                    </Box>
                </HStack>
            </Box>
            <Box className="first_box" w='800px'>
                <HStack spacing={4} align='center'>
                    <div className="Sub">
                        <Button onClick={onSwingJazzOpen}>스윙</Button>
                        <CommonModal isOpen={isSwingJazzOpen} onClose={onSwingJazzClose} title="스윙">
                            <SwingJazzModalBody />
                        </CommonModal>
                    </div>
                    <Box flex='1'>
                        <ProgressBar 
                        bgColor={SwingJazz === maxProgress ? "#D6FF32" : "white"}
                        baseBgColor="rgb(37, 37, 103)"
                        labelColor="black"
                        completed={SwingJazz}/>
                    </Box>
                </HStack>
            </Box>
            <Box className="first_box" w='800px'>
                <HStack spacing={4} align='center'>
                    <div className="Sub">
                        <Button onClick={onSoulJazzOpen}>소울</Button>
                        <CommonModal isOpen={isSoulJazzOpen} onClose={onSoulJazzClose} title="소울">
                            <SoulJazzModalBody />
                        </CommonModal>
                    </div>
                    <Box flex='1'>
                        <ProgressBar 
                        bgColor={SoulJazz === maxProgress ? "#D6FF32" : "white"}
                        baseBgColor="rgb(37, 37, 103)"
                        labelColor="black"
                        completed={SoulJazz}/>
                    </Box>
                </HStack>
            </Box>
            <Box className="first_box" w='800px'>
                <HStack spacing={4} align='center'>
                    <div className="Sub">
                        <Button onClick={onFreeJazzOpen}>프리</Button>
                        <CommonModal isOpen={isFreeJazzOpen} onClose={onFreeJazzClose} title="프리">
                            <FreeJazzModalBody />
                        </CommonModal>
                    </div>
                    <Box flex='1'>
                        <ProgressBar 
                        bgColor={FreeJazz === maxProgress ? "#D6FF32" : "white"}
                        baseBgColor="rgb(37, 37, 103)"
                        labelColor="black"
                        completed={FreeJazz}/>
                    </Box>
                </HStack>
            </Box>
            <Box className="first_box" w='800px'>
                <HStack spacing={4} align='center'>
                    <div className="Sub">
                        <Button onClick={onBibobJazzOpen}>비밥</Button>
                        <CommonModal isOpen={isBibobJazzOpen} onClose={onBibobJazzClose} title="비밥">
                            <BibobJazzModalBody />
                        </CommonModal>
                    </div>
                    <Box flex='1'>
                        <ProgressBar 
                        bgColor={BibobJazz === maxProgress ? "#D6FF32" : "white"}
                        baseBgColor="rgb(37, 37, 103)"
                        labelColor="black"
                        completed={BibobJazz}/>
                    </Box>
                </HStack>
            </Box>
        </VStack>
        <div className="ques">
            <h3>추천 플레이리스트 보기</h3>
        </div>

    <div class="musictable">
       <table>
        <tr>
        <hr/><td>
            <img src="/jazz_m1.jpg" id="albumcover" />
            <div id="song">The Girl From Ipanema<br/><span>Stan Getz</span></div>
            <div class="play"><img onClick={()=> window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MYz-ulK000LqaLp6XPVVD6s'} src="sound1.png" id="m1"/><span>play</span></div></td>
            <hr/>
        <hr/>
        </tr>
        <tr>
            <td><img src="/jazz_m2.jpg" id="albumcover"  />
            <div id="song">Sing Sing Sing<br/><span>Benny Goodman</span></div>
            <div class="play"><img onClick={()=> window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MYu0VZR6fElTGZLEeq5olcL'} src="/sound1.png" id="m2"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="/jazz_m3.jpg"id="albumcover" />
            <div id="song">Midnight Special<br/><span>Jimmy smith</span></div>
            <div class="play"><img onClick={()=> window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MYDB57IXkCJN8NiMLeq0xmM'} src="sound1.png" id="m3"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="/jazz_m4.jpg" id="albumcover"  />
            <div id="song"> Lonely Woman<br/><span>Ornette Coleman</span></div>
            <div class="play"><img onClick={()=> window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MaS65mSke-ouu9Nz5PJLLXw'} src="sound1.png" id="m4"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="/jazz_m5.jpg" id="albumcover" />
            <div id="song">Confirmation<br/><span>Charlie Parker</span></div>
            <div class="play"><img onClick={()=> window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MaWk1QneIEshUvxCa9aBKEv'} src="sound1.png" id="m5"/><span>play</span></div>
            </td><hr/> 
        </tr>
    </table>
    </div>

    </div>
        </ChakraProvider>
    );
}

export default Jazz;