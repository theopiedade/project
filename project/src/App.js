import React from "react";
import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";
import {alfabeto} from "./Letras";



export default function App() {
  let [Acao, setAcao] = React.useState("");

    return (
      <div className="App">
       <Jogo/>
       <Letras acao={alfabeto}/>
      </div>
    );
  }

