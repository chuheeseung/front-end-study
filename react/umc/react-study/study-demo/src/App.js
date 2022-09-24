import Profile from './Profile'

const dummy = [
  {name: "왕호은", email: "youverygood@naver.com"},
  {name: "안정은", email: "youverygood@naver.com"},
  {name: "추희승", email: "youverygood@naver.com"},
  {name: "정서현", email: "youverygood@naver.com"},
  {name: "임가비", email: "youverygood@naver.com"},
  {name: "이정훈", email: "youverygood@naver.com"},
  {name: "이해찬", email: "youverygood@naver.com"},
  {name: "김보인", email: "youverygood@naver.com"},
]

const App = () => {
  return (
    <div className="App" style={{border:'1px solid red'}}>
      {
        dummy.map((item, idx) => {
          return <Profile name={item.name} email={item.email} />;
        })
      }
    </div>
  );
}

export default App;

// 리턴할 때는 하나로 묶여야 한다
// <div></div><div></div> 두개가 되어서는 안된다
// 두개로 만들고 싶으면 두개를 하나로 묶어줘야 한다
// <></> 빈 태그로 감싸주는 것도 가능함