import React from "react";
import { Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/progress";

import HipBox from "../../Components/HipBox";

import "./SecondPage.css";

const SecondPage2 = () => {

    return (
        <ChakraProvider>
        <div className="firstPage">
            <div className="progress">
                <Progress value={75} size='md' colorScheme='purple' />
            </div>
            <div className="num2">
                <h3>Q. 난 험난했던 나의 출생지의 부심이 넘쳐. 
그래서 그런지 빡센 스토리, 범죄와 관련된 삶 거기에 하드한 비트까지!? 이건 내 피를 끓는다고!</h3>
                <HipBox id="DrillHip1"/>
            </div>
            <div className="num2">
                <h3>Q. 도시적이면서 펍에서 나올 만한 중독성있는 멜로디,
주로 재물과 여자에 대한 가사, 강한 808베이스는 내 아드레날린을 부스트 업!</h3>
                <HipBox id="TrapHip1"/>
            </div>
            <div className="num2">
                <h3>Q. 난 룰 브레이커야. 기존에 있는 틀을 깨부수고 자신만의 독창성을 조화롭게 조합하는 음악이 좋아.</h3>
                <HipBox id="AlterHip1"/>
            </div>
            <div className="num2">
                <h3>Q. 난 에너지가 넘쳐. 손에서 에네르기파가 나올 만한 공격적인 가사와 게임틱한 사운드의 음악이 좋아.</h3>
                <HipBox id="RageHip1"/>
            </div>
            <div className="num2">
                <h3>Q. 카세트에 믹스테잎을 넣고서 락카를 벽에 뿌리며 스케이트보드를 타고 한적한 골목을 가로 질러가
우리 동네 벽에는 그래피티가 가득하지.</h3>
                <HipBox id="BoomHip1"/>
            </div>
            <div className='linkBox'>
                <Link to="/SecondPage3">
                    <button>다음으로</button> 
                </Link> 
            </div>
        </div>
        </ChakraProvider>
    );
};

export default SecondPage2;