import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckedIcon } from './assets/icon_checked.svg';
import { ReactComponent as UncheckedIcon } from './assets/icon_unchecked.svg';

export default function RadioGroup() {
    const [checkedElement, setCheckedElement] = useState(0);
    const [checkListData, setCheckListData] = useState([
        {
            idx: 0, 
            text: "0"
        },
        {
            idx: 1, 
            text: "1"
        },
        {
            idx: 2, 
            text: "2"
        },
        {
            idx: 3, 
            text: "3"
        },
    ]);

    const onChangeRadioInput = (e) => {
        setCheckedElement(e.target.value);
    }

    return (
        <RadioGroupWrap>
            {checkListData.map((data) => {
                <RadioGroupLabel>
                    <input 
                        type='radio' 
                        className='input-hidden'
                        value={data.idx}
                        checked={checkedElement === data.idx} 
                        onChange={onChangeRadioInput}
                    />
                    {checkedElement === data.idx ?
                        (<CheckedIcon/>) :
                        (<UncheckedIcon />)
                    }
                </RadioGroupLabel>
            })}
            
        </RadioGroupWrap>
    )
}


const RadioGroupWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const RadioGroupLabel = styled.div`
    display: flex;
    padding: 8px;

    .input-hidden: {
        display: none;
    }
`;