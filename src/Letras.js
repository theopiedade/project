import React from "react";

const alfabeto = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

const status = [
    "true", "true", "true", "true", "true", "true", "true", "true", 
    "true", "true", "true", "true", "true", "true", "true", "true", 
    "true", "true", "true", "true", "true", "true", "true", "true",
    "true", "true"
];

export default function Letras() {
    return (
        <div class="container_botoes_letras">
            {
            alfabeto.map((i) => ( 
                <input type="button" 
                 class={status[i] === "true" ? botao_letra_desabilitado : botao_letra_habilitado}
                 value={alfabeto[i]} disabled={status[i]}></input>
                ))
            };
        </div>
    );
}