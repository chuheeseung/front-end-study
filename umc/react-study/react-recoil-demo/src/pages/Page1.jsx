import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { nicknameState } from '../recoil/User';

function Page1() {
    const navigate = useNavigate();
    const [nickname, setNickname] = useRecoilState(nicknameState);
    return (
        <>
            <div>
                <input 
                    type="text" 
                    placeholder='닉네임을 입력하세요' 
                    value={nickname} 
                    onChange={(e) => setNickname(e.target.value)} 
                />
            </div>
            <button onClick={() => {navigate('/next')}}>확인</button>
        </>
        
    )
}

export default Page1;