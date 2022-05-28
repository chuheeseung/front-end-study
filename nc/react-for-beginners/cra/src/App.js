import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  function hiFunction() {
    console.log("created :)");

    return byeFunction;
  };

  function byeFunction() {
    console.log("bye :(");
  };

  // useEffect(() => {
  //   console.log("created :)");
  //   return () => console.log("destroyed :("); // clean up
  // }, []);

  useEffect(hiFunction, []);

  // useEffect(() => {
  //   console.log("hi");
  //   return function() {
  //     console.log("bye");
  //   }
  // }, []);

  // useEffect(function() {
  //   console.log("hi");
  //   return function() {
  //     console.log("bye");
  //   }
  // }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => {setKeyword(event.target.value)};
  const onShowing = () => {setShowing(prev => !prev)};

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
      <button onClick={onShowing}>{showing ? "hide" : "show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
