import React from 'react';
import './styles.css';

const text = 'AVISO: ESTAREMOS FECHADOS NO FERIADO DO DIA XX/XX/XXXX.'

export default function Lettering(){
    return(
        <div className='lettering'>
            <span>{text}</span>
        </div>
    );
}