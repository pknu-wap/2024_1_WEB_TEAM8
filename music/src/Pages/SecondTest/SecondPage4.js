import React from "react";
import { Link } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/progress";

import RbBox from "../../Components/RbBox";
import { PopValueState } from "../../Components/PopBox";
import { HipValueState } from "../../Components/HipBox";
import { JazzValueState } from "../../Components/JazzBox";
import { RbValueState } from "../../Components/RbBox";
import { RockValueState} from "../../Components/RockBox";
import { useRecoilValue } from "recoil";

import "./SecondPage.css";

function combineKeysValues(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    const combined = {};

    for (let i = 0; i < keys.length; i++) {
        combined[keys[i]] = values[i];
    }

    return combined;
}

const SecondPage4 = () => {

    const PopCheckValue = useRecoilValue(PopValueState);
    const HipCheckValue = useRecoilValue(HipValueState);
    const JazzCheckValue = useRecoilValue(JazzValueState);
    const RbCheckValue = useRecoilValue(RbValueState);
    const RockCheckValue = useRecoilValue(RockValueState);

    // 각 장르당 합 구하기 
    const PopTotal = Object.values(PopCheckValue).reduce((sum,value)=> sum + value, 0);
    const HipTotal = Object.values(HipCheckValue).reduce((sum,value)=> sum + value, 0);
    const JazzTotal = Object.values(JazzCheckValue).reduce((sum,value)=> sum + value, 0);
    const RbTotal = Object.values(RbCheckValue).reduce((sum,value)=> sum + value, 0);
    const RockTotal = Object.values(RockCheckValue).reduce((sum,value)=> sum + value, 0);

    const AllTotal = {
        Pop: PopTotal,
        Hip: HipTotal,
        Jazz: JazzTotal,
        Rb: RbTotal,
        Rock: RockTotal,
    };

    const Result = Object.keys(AllTotal).reduce((max, genre) => {  // 최대값 가진 장르
        return AllTotal[genre] > AllTotal[max] ? genre : max;
    }, 'Pop')

    const maxTotal = AllTotal[Result]; // 최대값

    const completeButton = () => {
        console.log("결과 :" , Result);
        console.log("장르 :", maxTotal);
        sendDataToServer();
    };
    const sendDataToServer = async () => {
        const data = {
            pop: combineKeysValues(PopCheckValue),
            hip: combineKeysValues(HipCheckValue),
            jazz: combineKeysValues(JazzCheckValue),
            rb: combineKeysValues(RbCheckValue),
            rock: combineKeysValues(RockCheckValue)
        }
        try {
          const response = await fetch("/answer", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const responseData = await response.json();
          console.log('Server response:', responseData);
        } catch (error) {
          console.error('Error sending data:', error);
        }
      };      

    return (
        <ChakraProvider>
        <div className="firstPage">
            <div className="progress">
                <Progress value={100} size='md' colorScheme='purple' />
            </div>
            <div className="num2">
                <h3>디지털한 사운드가 기반이 된 끈적한 사랑과 사회참여적인 가사를 담아낸 흑인들의 가사
그리고 고요하고 그루비한 보컬..<br/> 오우.. 이런 노래엔 스모키한 위스키 한잔이 딱이야.</h3>
                <RbBox id="NeoRB1"/>
            </div>
            <div className="num2">
                <h3>현대적인 다양한 장르를 결합해 트렌드를 이끄는 사운드 위에 보컬의 소울과 그루브가 느껴져.
이런 세련된 섹시함은 나의 미간을 찡그리게 만들지.</h3>
                <RbBox id="ComRB1"/>
            </div>
            <div className="num2">
                <h3>끈적하면서 그루비한 보컬의 소울과 드럼의 리듬 위에 째지한 사운드.. 
독특하면서 센스있는 베이스의 그루브는 나를 춤추게 만들지 I Feel Good~</h3>
                <RbBox id="PunkRB1"/>
            </div>
            <div className="num2">
                <h3>교회에서 들릴듯한 전통적인 구성들과 흑인민권 운동을 기반으로 흑인의 한과 울림이 담긴 음악.<br/>
무대 옆에 있는 코러스(콰이어)단 들이 하모니를 만들때 난 그시대를 입체적으로 떠올리게 해.</h3>
                <RbBox id="SoulRB1"/>
            </div>
            <div className="num2">
                <h3>자신만의 아이덴티티로 창의성을 펼쳐내 복잡한 자신의 감정을 다양하고 특이한 사운드로 표현하는
소울이 담겨진 음악.. 이건 아트가 아닐까?</h3>
                <RbBox id="AlterRB1"/>
            </div>
            <div className='linkBox'>
                <Link to={`/${Result}`}>
                    <button onClick={completeButton}>완료</button> 
                </Link>
            </div>
        </div>
        </ChakraProvider>
    );
};

export default SecondPage4;