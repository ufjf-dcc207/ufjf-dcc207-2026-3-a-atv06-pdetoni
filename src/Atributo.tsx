import { useState } from 'react';
import './Atributo.css'

type AtributoProps = {
    icone: string;
}

export default function Atributo({icone}: AtributoProps){

    const [valor, setValor] = useState<number>(0)

    return(
        <div className='atributo'>
            {valor}{icone.repeat(valor)}<span className='inativo'>{icone.repeat(5 - valor)}</span>
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