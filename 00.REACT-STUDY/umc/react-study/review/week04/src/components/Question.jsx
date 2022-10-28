import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckedIcon } from '../assets/icon_checked.svg';
import { ReactComponent as UncheckedIcon } from '../assets/icon_unchecked.svg';

function Question({ title, questionList }) {
    const [checkedElement, setCheckedElement] = useState(-1);

    const onChangeRadioButton = (e) => {
        setCheckedElement(Number(e.target.value));
    };

    return (
        <QuestionWrap>
            <div className='questionTitle'>{title}</div>
            <div>
                {
                    questionList.map((question, index) => (
                        <RadioWrap key={index}>
                            <input 
                                type='radio' 
                                value={index}
                                checked={checkedElement === index}
                                onChange={onChangeRadioButton}
                            />    
                            {
                                checkedElement === index ? 
                                <CheckedIcon />: 
                                <UncheckedIcon />
                            }
                            <div className='questionText'>{question}</div>
                        </RadioWrap>
                    ))
                }
            </div>
        </QuestionWrap>
    )
}

export default Question;

const QuestionWrap = styled.div`
    margin-bottom: 16px;

    .questionTitle {
        margin-bottm: 8px;
        font-size: 24px;
        font-weight: bold;
    }
`;

const RadioWrap = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    input {
        display: none;
    }

    .questionText {
        margin-left: 8px;
    }
`;