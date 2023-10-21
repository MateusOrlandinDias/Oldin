import React from 'react';
import './styles.css';

const text = 'AVISO: O site está em manutenção.'

export default function Lettering(){
    return(
        <div className='lettering'>
            <span>{text}</span>
        </div>
    );
}