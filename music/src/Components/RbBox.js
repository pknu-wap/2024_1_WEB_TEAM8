import React from "react";
import CheckBoxCnt from "./CheckBox.style";
import "../App.css";
import { atom } from "recoil";
import { useRecoilState } from "recoil";
import { useEffect } from "react";


export const RbValueState = atom({
  key: "RB",
  default: {},
});

const RbBox = ({ id }) => {
  const [RbValues, setRbValueState] = useRecoilState(RbValueState);

  const checkOnlyOne = (num) => {
    setRbValueState((prevCheckedValues) => {
      const updatedValues = { ...prevCheckedValues, [id]: num };
      return updatedValues;
    });
  };

  useEffect(() => {
    const handleCheckboxChange = () => {
      console.log(id, RbValues[id]);
    };
  
    const checkboxElement = document.getElementById(`checkBoxCnt_${id}`);
  
    if (checkboxElement) {
      checkboxElement.addEventListener('change', handleCheckboxChange);
    }
  
    return () => {
      if (checkboxElement) {
        checkboxElement.removeEventListener('change', handleCheckboxChange);
      }
    };
  }, [RbValues, id]);

  
  const generateUniqueId = (name) => `${id}_${name}`;

  return (
    <CheckBoxCnt id={`checkBoxCnt_${id}`} num={RbValues[id]}>
      {[1, 2, 3, 4, 5].map((num) => (
        <React.Fragment key={num}>
          <input
            type="checkbox"
            id={generateUniqueId(`b${num}`)}
            name="checkWrap"
            value={num}
            checked={RbValues[id] === num}
            onChange={() => checkOnlyOne(num)}
          />
          <label htmlFor={generateUniqueId(`b${num}`)}>{num}</label>
        </React.Fragment>
      ))}
    </CheckBoxCnt>
  );
};

export default RbBox;
