import { useState } from 'react';
import './Atributo.css'

export default function Atributo(){

    const [valor, setValor] = useState<number>(0)

    return(
        <div className='atributo'>
            {valor}{"❤️".repeat(valor)}<span className='inativo'>{"❤️".repeat(5 - valor)}</span>
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