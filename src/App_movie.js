//import Button from "./Button";
//import React, {useEffect} from "react";
import styled from "./App.module.css";
import { useState , useEffect } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onchange = (e) => setToDo((e.target.value));
    const onSubmit = (e) => {
        e.preventDefault();
        if(toDo == "") {
            return ;
        }
        setToDos((currentArray) => [toDo, ...currentArray]);
        setToDo("");

        //console.log(toDos);
    }
    return <div>
        <h3>My To Do ({toDos.length})</h3>
        <form action="" onSubmit={onSubmit}>
        <input type="text" onChange={onchange} value={toDo} placeholder="write here"/>
        <button>add</button>
        </form>
        <hr/>
        <ul>
        {toDos.map((item,index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
}
export default App;
