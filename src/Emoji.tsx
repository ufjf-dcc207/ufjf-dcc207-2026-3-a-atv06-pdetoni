import { useState } from 'react';
import './Emoji.css'
import Atributo from './Atributo';
import { EMOJI_MAP, type AtributoType, type EmojiType } from './types';




export default function Emoji(){

    const [emoji, setEmoji] = useState<EmojiType>({
        agua:1,
        comida:2,
        energia: 3,
        luz: true,
        vida: 5
    });

    

    function alimentarClick(){
        if(emoji.vida===0) return;
        console.log(emoji.comida);
        const novoEmoji = structuredClone(emoji);
        novoEmoji.comida = (Math.min(5, emoji.comida+1)) as AtributoType;
        console.log(emoji.comida);

        setEmoji(novoEmoji);
    }

    function hidratarClick(){
        if(emoji.vida===0) return;
        setEmoji({...emoji, agua: Math.min(5, emoji.agua +1) as AtributoType});
    }

    function alternarLuzClick(){
        setEmoji({...emoji, luz: !emoji.luz});
    }

    function cicleClick(){
        if(emoji.vida===0) return;

        const newEmoji = structuredClone(emoji);

        newEmoji.comida = Math.max(0, newEmoji.comida - 1) as AtributoType;
        if(emoji.comida===0){
            newEmoji.vida = Math.max(0, newEmoji.vida - 1) as AtributoType;
        }

        newEmoji.agua = Math.max(0, newEmoji.agua - 1) as AtributoType;
        if(emoji.agua===0){
            newEmoji.vida = Math.max(0, newEmoji.vida - 1) as AtributoType;
        }

        if(emoji.luz){
            newEmoji.energia = Math.max(0, newEmoji.energia - 1) as AtributoType;
            if (emoji.energia === 0){
                newEmoji.vida = Math.max(0, newEmoji.vida - 1) as AtributoType;
            }
        } else {
            newEmoji.energia = Math.min(5, newEmoji.energia + 1) as AtributoType;
        }

        setEmoji(newEmoji);
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