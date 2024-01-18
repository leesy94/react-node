//import Button from "./Button";
//import React, {useEffect} from "react";
import styled from "./App.module.css";
import { useState , useEffect } from "react";

function App() {
    let str;
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
      console.log("i run only once");
  };
  useEffect(iRunOnlyOnce,[]);
  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]);
    useEffect(() => {
        console.log("i run when '"+keyword+"' changes");
    }, [keyword]);
    useEffect(() => {
        console.log("i run when 'counter,keyword' changes");
    }, [counter,keyword]);
  return (
    <div>
        <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
      <h1 className={styled.title}>{counter}</h1>
      <button onClick={onClick}>click me</button>
        {/*<Button onClick={onClick} text={"click me"}/>*/}
    </div>
  );
}
function App2() {
    const [show, setShow] = useState(false);
    const onClick = () => setShow((prev) => !prev)
  return (
    <div>
        {show ? <Hello/> : null}
        <button onClick={onClick}>{show ? "Hide" : "Show"}</button>
    </div>
  );
}

function Hello() {
    useEffect(() => {
        console.log("create: )");
        return () => console.log("destroy : (");
    }, []);
    return <h1>Hello</h1>
}
export default App2;
