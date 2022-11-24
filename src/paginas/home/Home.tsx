import React from "react";
import './Home.css'

let nome = 'Romulo'

function Home(){
    return(
        <div>
            <li>
              <a className="inicio" href="#">Diario de um ninja </a>
            </li>
            <h1 className="texto">Esse é meu texto</h1>
            <h2 className="name">{}Romulo celestino, futuro brabo programador junior </h2>
            <p className="fonte">Turma 02</p>
            <p>Se você e  bom só em uma coisa, não desista por motivo algun, sim treine repedita-vezes aprimorar, torna-se melhor seja único no quer  você e bom -_- </p>
            
        </div>
    )
}
export default Home;