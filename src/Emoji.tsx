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

    function alimentarClick(){
        setComida(Math.min(5, comida+1));
    }

    function hidratarClick(){
        setAgua(Math.min(5, agua+1))
    }

    function alternarLuzClick(){
        console.log("Status:", status);
        console.log("Dead!");
        setStatus("dead");
        console.log("Status:", status);
    }

    function cicleClick(){
        switch(status){
            case "happy":
                setStatus("sick");
                break;
            case "sick":
                setStatus("dead");
                break;
            case "dead":
                setStatus("happy");
                break;
            default:
                setStatus("happy");
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
            </div>
            <div className='acoes'>
                <button onClick={alimentarClick}>Alimentar</button>
                <button onClick={hidratarClick}>Hidratar</button>
                <button onClick={alternarLuzClick}>Ligar luz</button>
                <button onClick={cicleClick}>Cicle</button>
            </div>
        </div>
    )
}