import React from "react";
import { useState } from "react";
import Jogo from "./Jogo";
import Letras from "./Letras";

let [Acao, setAcao] = React.useState("");

export default function App() {
    return (
      <div className="App">
       <Jogo/>
       <Letras/>
      </div>
    );
  }

