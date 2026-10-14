import { useState } from 'react';
import './Emoji.css'
import Atributo from './Atributo';

type EMOJI_KEYS = "happy" | "sick" | "dead"

const EMOJI_MAP = new Map<EMOJI_KEYS, string>([
    ["happy", "😁"],
    ["sick", "😣"],
    ["dead", "😵"]
])

export default function Emoji(){

    const [status, setStatus] = useState<EMOJI_KEYS>("happy")
    const [vida, setVida] = useState<number>(5)
    const [energia, setEnergia] = useState<number>(4)
    const [comida, setComida] = useState<number>(2)
    const [agua, setAgua] = useState<number>(1)
    const [luz, setLuz] = useState<boolean>(true)

    function alimentarClick(){
        setComida(Math.min(5, comida+1));
    }

    function hidratarClick(){
        setAgua(Math.min(5, agua+1))
    }

    function alternarLuzClick(){
       setLuz(!luz);
    }

    function cicleClick(){

        setComida(Math.max(0, energia-1));
        if(comida==0){
            setVida(Math.max(0, vida-1))
        }

        setAgua(Math.max(0, agua-1))
        if(agua == 0 ){
            setVida((prevVida)=>Math.max(0, prevVida-1))
        }
        if(luz){
            setEnergia(Math.max(0, energia-1))
            if (energia === 0){
                setVida((prevVida)=>Math.max(0, prevVida-1))
            }
        } else {
            setEnergia(Math.min(5, energia+1))
        }
    }

    console.log("Desenhando...");
    console.log("Status:", status);

    return(
        <div className='emoji'>
            <div className='face'>
                {EMOJI_MAP.get(status)|| "nothing"}
            </div>
            <div className='atributos'>
                <Atributo icone="❤️" valor={vida}/>
                <Atributo icone="🔋" valor={energia}/>
                <Atributo icone="💧" valor={agua}/>
                <Atributo icone="🍗" valor={comida}/>
                {luz && "💡"}
            </div>
            <div className='acoes'>
                <button onClick={alimentarClick}>Alimentar</button>
                <button onClick={hidratarClick}>Hidratar</button>
                <button onClick={alternarLuzClick}>{luz? 'Desligar luz' : 'Ligar luz'}</button>
                <button onClick={cicleClick}>Cicle</button>
            </div>
        </div>
    )
}