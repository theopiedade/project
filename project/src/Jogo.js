import React from "react";
import palavras from "./palavras";

let imagens = [
    "assets/forca0.png",
    "assets/forca1.png",
    "assets/forca2.png",
    "assets/forca3.png",
    "assets/forca4.png",
    "assets/forca5.png",
    "assets/forca6.png"
];

let numImagem = 0;
let palavra_sorteada = "";
let array_palavra_escolhida = [];
let mostrar_palavra = "";
let array_mostrar_palavra = [];

export default function Jogo(props, props2) {

    console.log("Palavra sorteada = "+palavra_sorteada);

    let imagem = imagens[numImagem];
    
    return (
        <div class="container_cima">
        <div class="forca"> <img src={imagem}/> </div>
        <div class="botao_e_palavra">
            <input type="button" class="botao_escolher" value="Escolher palavra"></input>
            <div class="palavra">{mostrar_palavra}</div>
        </div>
        </div>
    );
}

function gereNumeroInteiroEntre(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

function prepararJogo() {
    
}

function iniciaJogo() {
    numImagem = 0;
    numero_sorteado = gereNumeroInteiroEntre(0, palavras.length);
    palavra_sorteada = palavras[numero_sorteado];
    array_palavra_escolhida = palavra_sorteada.split(''); 
    array_mostrar_palavra = [];
    mostrar_palavra = "";
    for (let i=0; i<array_palavra_escolhida.length; i++) {
        array_mostrar_palavra.push = "_";
        mostrar_palavra+=" _ ";
    }
}