import React from "react";
import Jogo from "./Jogo";
import { useState } from "react";
import Letras from "./Letras";


export default function App(props) {
  console.log("App acionado");
 

  const [obj, setobj] = React.useState ({
        imagemNum: 0,
        imagem: "assets/forca0.png",
        palavra: "",
        palavraArray: [],
        letrasAparecendoArray: [],
        letrasAparecendoTxt: "",
        letrasClicadas: [],
        status: "inicio",
        statusBotoesLetras: []
  });


    return (
      <div className="App">
       <Jogo obj={obj} setobj={setobj} />
       <Letras obj={obj} setobj={setobj}/>
      </div>
    );
  }



