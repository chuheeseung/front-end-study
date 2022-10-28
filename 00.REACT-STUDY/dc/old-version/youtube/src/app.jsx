import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
    // videos : video의 목록을 가질 수 있는 state
    // setVideos : videos를 업데이트
    const [videos, setVideos] = useState([]); 

    useEffect(() => { // 원하는 함수를 등록 -> 컴포넌트가 마운트 or 업데이트 마다 호출
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(
            "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAneC7AOlSpdgdZQlgny89RrwxxgAfENN0", 
            requestOptions
        )
            .then(response => response.json()) // json으로 변환
            .then(result => setVideos(result.items)) //  setVideos를 받아온 result.items로 업데이트 
            .catch(error => console.log('error', error)); // 만약 에러가 발생하면 에러를 콘솔에 출력
    }, []); // 비워진 배열을 두번째 인자로 전달 -> 마운트 되었을 때만 이 부분 호출
    
    return <VideoList videos={videos} />;
};

export default App;
