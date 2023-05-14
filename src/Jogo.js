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

export default function Jogo(acao) {
    
   
    if (acao == "iniciar") { 
        let numImagem = 0;
        let numero_sorteado = gereNumeroInteiroEntre(0, palavras.length);
        let palavra_sorteada = palavras[numero_sorteado];
        const array_palavra_escolhida = palavra_sorteada.split(''); // Cria array das letras separadas 
        let array_mostrar_palavra = [];
        array_palavra_escolhida.map((i) => ( array_mostrar_palavra.push = "_" ));
    }
    else if (acao == "erro") { 
        numImagem = numImagem + 1; 
    }
    else if (acao == "acerto") { 
        console.log("Acertou Miseravi!");
    }


    imagem = imagens[numImagem];
    
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