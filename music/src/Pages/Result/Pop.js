import React, { useEffect } from "react";
import "./Result.css";
import CommonModal from './Modal';

import ProgressBar from "@ramonak/react-progress-bar";
import { ChakraProvider,VStack,Box, useDisclosure, Button } from "@chakra-ui/react";
import { PopValueState } from "../../Components/PopBox";
import { useRecoilValue } from "recoil";
import {
    DancePopModalBody,
    ElecPopModalBody,
    BritPopModalBody,
    IndiPopModalBody,
    LatinPopModalBody
} from "./ModalCon";

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

    // 모달 상태관리
    const { isOpen: isDancePopOpen, onOpen: onDancePopOpen, onClose: onDancePopClose } = useDisclosure();
    const { isOpen: isElecPopOpen, onOpen: onElecPopOpen, onClose: onElecPopClose } = useDisclosure();
    const { isOpen: isBritPopOpen, onOpen: onBritPopOpen, onClose: onBritPopClose } = useDisclosure();
    const { isOpen: isIndiPopOpen, onOpen: onIndiPopOpen, onClose: onIndiPopClose } = useDisclosure();
    const { isOpen: isLatinPopOpen, onOpen: onLatinPopOpen, onClose: onLatinPopClose } = useDisclosure();

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
        <td><span>Dance</span><br/><br/>< img src="/pop_singer1.png" alt="Lady gaga"/>Lady gaga</td>
        <td><span>Electro</span><br/><br/><img src="/pop_singer2.png" alt="Halsey" />Halsey<br/></td>
        <td><span>Indie</span><br/><br/><img src="/pop_singer3.png" alt="The smtihs" />The smtihs<br/></td>
        <td><span>Latin</span><br/><br/><img src="/pop_singer4.png" alt="Camila Cabello" />Camila Cabello<br/></td>
        <td><span>Brit</span><br/><br/><img src="/pop_singer5.png" alt="Oasis" />Oasis</td> 
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
            <ProgressBar completed={DancePop}/>
                <div className="Sub">
                    <Button 
                    onClick={onDancePopOpen}>댄스</Button>
                    <CommonModal isOpen={isDancePopOpen} onClose={onDancePopClose} title="댄스">
                        <DancePopModalBody />
                    </CommonModal>
                </div>
            </Box>
            <Box w='800px'>
                <ProgressBar completed={ElecPop}/>
                <div className="Sub">
                    <Button onClick={onElecPopOpen}>일렉트로</Button>
                    <CommonModal isOpen={isElecPopOpen} onClose={onElecPopClose} title="일렉트로닉">
                        <ElecPopModalBody />
                    </CommonModal>
                </div>
            </Box>
            <Box w='800px'>
                <ProgressBar completed={BritPop}/>
                <div className="Sub">
                <Button onClick={onBritPopOpen}>브릿</Button>
                    <CommonModal isOpen={isBritPopOpen} onClose={onBritPopClose} title="브릿">
                        <BritPopModalBody />
                    </CommonModal>
                </div>
            </Box>
            <Box w='800px'>
                <ProgressBar completed={IndiPop}/>
                <div className="Sub">
                <Button onClick={onIndiPopOpen}>인디</Button>
                    <CommonModal isOpen={isIndiPopOpen} onClose={onIndiPopClose} title="인디">
                        <IndiPopModalBody />
                    </CommonModal>
                </div>
            </Box>
            <Box w='800px'>
                <ProgressBar completed={LatinPop}/>
                <div className="Sub">
                <Button onClick={onLatinPopOpen}>라틴</Button>
                    <CommonModal isOpen={isLatinPopOpen} onClose={onLatinPopClose} title="라틴">
                        <LatinPopModalBody />
                    </CommonModal>
                </div>
            </Box>
        </VStack>
        <div className="ques">
            <h3>추천 플레이리스트 보기</h3>
        </div>
        <div class="musictable">
    <table>
        <tr>
        <hr/><td>
            <img src="/pop_m1.jpg" id="albumcover"/>
            <div id="song">Just Dance<br/><span>Lady gaga</span></div>
            <img src="19.png" id="prohibit1"/>
            <div class="play"><img style={{ cursor: 'pointer' }} onClick={()=> window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MY-2SwIhakiK3khw88oHzwc'} src="sound1.png" id="m1"/><span>play</span></div></td>
            <hr/>
        <hr/>
        </tr>
        <tr>
            <td><img src="/pop_m2.jpg" id="albumcover"/>
            <div id="song">Gasoline<br/><span>Halsey</span></div>
            <div class="play"><img style={{ cursor: 'pointer' }} onClick={()=> window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67Mai4CdplvjIRFf-znKkJ7_l'} src="/sound1.png" id="m2"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="/pop_m3.jpg"  id="albumcover" />
            <div id="song">This Charming Man<br/><span>The smtihs</span></div>
            <div class="play"><img style={{ cursor: 'pointer' }} onClick={()=> window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67Mbf-zGpf43gE5pfW8_ycXnR'} src="sound1.png" id="m3"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="/pop_m4.jpg"  id="albumcover" />
            <div id="song">Havana<br/><span>Camila Cabello</span></div>
            <div class="play"><img style={{ cursor: 'pointer' }} onClick={()=> window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67MaAWCbd2HcokoqH5sv44OJP'} src="sound1.png" id="m4"/><span>play</span></div>
            </td><hr/>
        </tr>
        <tr>
            <td><img src="/pop_m5.webp"  id="albumcover"/>
            <div id="song">Wonderwall<br/><span>Oasis</span></div>
            <div class="play"><img style={{ cursor: 'pointer' }} onClick={()=> window.location.href = 'https://www.youtube.com/playlist?list=PLCqnvhwU67Mbfvh0blv_vISpJ5lqZUlZy'} src="sound1.png" id="m5"/><span>play</span></div>
            </td><hr/> 
        </tr>
    </table>
    </div>
    
        </div>
        </ChakraProvider>
    );
}

export default Pop;