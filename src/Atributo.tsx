import { useState } from 'react';
import './Atributo.css'

export default function Atributo(){

    const [valor, setValor] = useState<number>(0)

    let coracoes = "";
    for(let i = 0; i < 5; i++){
        if(i < valor){
            coracoes += "❤️";
        } else {
            coracoes += "🩶";
        }
    }

    return(
        <div className='atributo'>
            {valor}{coracoes}
            <button onClick={() => {
                if(valor === 5){
                    setValor(0);
                } else {
                    setValor(valor + 1);
                }
            }}>+</button>
        </div>
    )
}