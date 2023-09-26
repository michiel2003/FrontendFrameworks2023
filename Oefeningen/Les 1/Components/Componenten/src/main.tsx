import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './assets/main.css'
import {Excercise} from "./Excercise.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Excercise  title={"Excercise 1: Multiplication table"}/>
      <Excercise  background={"#77EEEE"} title={"This might work if not I will throw my computer out the window"}/>
      <Excercise  title={"This might work if not I will throw my computer out the window"}/>
      <Excercise  background={"#77EEEE"} title={"This might work if not I will throw my computer out the window"}/>
      <Excercise  title={"This might work if not I will throw my computer out the window"}/>


  </React.StrictMode>,
)
