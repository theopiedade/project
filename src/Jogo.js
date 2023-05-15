import React from "react";
import palavras from "./palavras";
import App from "./App";
import {obj, setobj} from "./App"

let imagens = [
    "assets/forca0.png",
    "assets/forca1.png",
    "assets/forca2.png",
    "assets/forca3.png",
    "assets/forca4.png",
    "assets/forca5.png",
    "assets/forca6.png"
];



export default function Jogo({obj, setobj}) {
    let [mostrarLetras, setmostrarLetras] = React.useState(obj.letrasAparecendoTxt);
    let [mostrarImagem, setmostrarImagem] = React.useState(obj.imagem);

    function iniciaJogo({obj, setobj}) {
        console.log("Entrou no inicia Jogo");
        setobj.imagemNum(0);
        obj.imagem = imagens[0];
        obj.palavra = sortearPalavra();
        obj.palavraArray = obj.palavra.split(''); 
        obj.letrasAparecendoArray = [];
        obj.letrasAparecendoTxt = "";
        obj.palavraArray.map((i, n) => {
            obj.letrasAparecendoArray.push = "_";
            obj.letrasAparecendoTxt+=" _ ";
        })
        obj.status = "iniciado"; 
        setmostrarLetras(obj.letrasAparecendoTxt);
        setmostrarImagem(obj.imagem);
        console.log("imagem = "+obj.imagem);
        console.log("Palavra sorteada = "+obj.palavra);
        console.log("Letras aparecendo = "+obj.letrasAparecendoTxt);
        setobj(obj);
        console.log("Status do jogo = "+obj.status);
        console.log("Obj: "+obj);
    }
  

    return (
        <div class="container_cima">
        <div class="forca"> <img src={mostrarImagem}/> </div>
        <div class="botao_e_palavra">
            <input type="button" class="botao_escolher" value="Escolher palavra" onClick={() => iniciaJogo({obj, setobj})}></input>
            <div class="palavra">{mostrarLetras}</div>
        </div>
        </div>
    );
}

function gereNumeroInteiroEntre(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }


function sortearPalavra() {
    let numero_sorteado = gereNumeroInteiroEntre(0, palavras.length);
    return palavras[numero_sorteado];
}
