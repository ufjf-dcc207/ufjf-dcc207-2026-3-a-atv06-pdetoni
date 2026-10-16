import { useState } from 'react';
import './Emoji.css'
import Atributo from './Atributo';
import { EMOJI_MAP, type EmojiType } from './types';




export default function Emoji(){

    const [emoji, setEmoji] = useState<EmojiType>({
        agua:1,
        comida:2,
        energia: 3,
        luz: true,
        vida: 5
    });

    

    function alimentarClick(){
        // if(vida===0) return;
        // setComida(Math.min(5, comida+1));
    }

    function hidratarClick(){
        // if(vida===0) return;
        // setAgua(Math.min(5, agua+1))
    }

    function alternarLuzClick(){
    //    setLuz(!luz);
    }

    function cicleClick(){
        // if(vida===0) return;

        // setComida(Math.max(0, energia-1));
        // if(comida==0){
        //     setVida(Math.max(0, vida-1))
        // }

        // setAgua(Math.max(0, agua-1))
        // if(agua == 0 ){
        //     setVida((prevVida)=>Math.max(0, prevVida-1))
        // }
        // if(luz){
        //     setEnergia(Math.max(0, energia-1))
        //     if (energia === 0){
        //         setVida((prevVida)=>Math.max(0, prevVida-1))
        //     }
        // } else {
        //     setEnergia(Math.min(5, energia+1))
        // }
    }

    console.log("Desenhando...");
    // console.log("Status:", status);
    let status = EMOJI_MAP.get('happy');
    if (emoji.agua === 0 || emoji.comida === 0 || emoji.energia === 0){
        status = EMOJI_MAP.get('sick');
    } 
    if (emoji.vida === 0){
        status = EMOJI_MAP.get('dead')
    }

    return(
        <div className='emoji'>
            <div className='face'>
                {status}
            </div>
            <div className='atributos'>
                <Atributo icone="❤️" valor={emoji.vida}/>
                <Atributo icone="🔋" valor={emoji.energia}/>
                <Atributo icone="💧" valor={emoji.agua}/>
                <Atributo icone="🍗" valor={emoji.comida}/>
                {emoji.luz && "💡"}
            </div>
            <div className='acoes'>
                <button onClick={alimentarClick}>Alimentar</button>
                <button onClick={hidratarClick}>Hidratar</button>
                <button onClick={alternarLuzClick}>{emoji.luz? 'Desligar luz' : 'Ligar luz'}</button>
                <button onClick={cicleClick}>Cicle</button>
            </div>
        </div>
    )
}