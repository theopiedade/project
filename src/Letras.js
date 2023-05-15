import React from "react";
import App from "./App";


export const alfabeto = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

let status_disabled = [ ];

export default function Letras({obj, setobj}) {
    
    console.log("Letras acionado, obj.status = "+obj.status);
    
    if (obj.status === "iniciado") setarDisabled(false);
    else { setarDisabled(true); }

    function setarDisabled(acao) {
        console.log("Setar disabled acionado com a ação: "+acao);
        alfabeto.map((i, n) => {
             obj.statusBotoesLetras[n] = acao; 
             console.log("Letra: "+i+" = "+obj.statusBotoesLetras[n]);
            })
    }

    function checaStatus(n) {
        console.log("Checa Status acionado "+obj.statusBotoesLetras[n]);
        if (obj.statusBotoesLetras[n] === true) return "botao_letra_desabilitado";
        else return "botao_letra_habilitado";
    }
    setobj(obj);
    return (
        <div class="container_botoes_letras">
            {
            alfabeto.map((i, n) => ( 
                <input type="button" 
                class={checaStatus(n)} 
                value={i} 
                disabled={obj.statusBotoesLetras[n]}
                onClick={() => clicouNaLetra(i)}
                >    
                </input>
                ))
            }
        </div>
    );
}


function clicouNaLetra(letra) {
 console.log("Clicou na letra: "+letra);
}





