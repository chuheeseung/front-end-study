import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => {setKeyword(event.target.value)};

  console.log("I run all the time");
  const iRunOnlyOnce = () => {console.log("I run only once");};

  // useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("call the api");
  }, []);

  useEffect(() => {
    // if(keyword !== "" && keyword.length >= 5) {
    //   console.log("Search for ", keyword);
    // }
    console.log("I run when 'keyword' changes");
  }, [keyword]);

  // console.log("Search for ", keyword);

  useEffect(() => {
    console.log("I run when 'counter' changes");
  }, [counter]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here ..." />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
