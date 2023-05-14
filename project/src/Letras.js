import React from "react";
import App from "./App";



export const alfabeto = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

let status = [
    false, true, true, false, true, true, true, true, 
    true, true, true, true, true, true, true, true, 
    true, true, true, true, true, true, true, true,
    true, true
];

export default function Letras() {
 
    return (
        <div class="container_botoes_letras">
            {
            alfabeto.map((i, n) => ( 
                <input type="button" 
                class={checaStatus(n)} 
                value={i} 
                disabled={status[n]}
                onClick={() => clicouNaLetra(i)}
                >    
                </input>
                ))
            }
        </div>
    );
}

function checaStatus(n) {
    if (status[n] === true) return "botao_letra_desabilitado";
    else return "botao_letra_habilitado";
}

function clicouNaLetra(letra) {
 console.log("Clicou na letra: "+letra);
}





