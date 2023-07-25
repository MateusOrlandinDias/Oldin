import React from 'react';
import './styles.css';

export default function Lettering({text}){
    return(
        <div className='lettering'>
            <span>{text}</span>
        </div>
    );
}