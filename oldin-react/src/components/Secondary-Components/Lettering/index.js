import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import './styles.css';

export default function Lettering() {
    const [letteringText, setLetteringText] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        // Load cache at initialization of component
        const cachedData = localStorage.getItem('letteringData');
        if (cachedData) {
            setLetteringText(JSON.parse(cachedData));
        }

        // Update lettering every 2 minutes
        const interval = setInterval(() => {
            api.get('/avisos_ativos')
                .then(response => {
                    setLetteringText(response.data);
                    // Store data in cache
                    localStorage.setItem('letteringData', JSON.stringify(response.data));
                })
                .catch(error => {
                    console.error('Erro ao obter dados do lettering:', error);
                });
        }, 120000); // 120000 milisseconds = 2 minutes

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Update text only if has data in cache
        if (letteringText.length > 0) {
            setText(letteringText[0].aviso);
        }
    }, [letteringText]);

    return (
        <div className='lettering'>
            <span>{text}</span>
        </div>
    );
}
