import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { nicknameState } from '../recoil/User';

function Page2() {
    const nickname = useRecoilValue(nicknameState);

    // const setNickname = useSetRecoilState(nicknameState); 

    return (
        <div>{nickname}</div>
    )
}

export default Page2;