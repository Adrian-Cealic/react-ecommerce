// realizati un use efect care dinamic deseneaza mai in jos de un imput intr-un paragraf textul pe care se tasteaza

import React, { useEffect, useState } from 'react'


const UseEfectPRACTICE = () => {

    const [inputText, setInputText] = useState('');


    useEffect(() => {
        const text = document.querySelector('.input');
        text.addEventListener('input', (e) => {
            setInputText(e.target.value);
        });
    }, []);

    return (
        <div>
            <input type="text" className='input' />
            <p className='p'>{inputText}</p>
        </div>
    )
}

export default UseEfectPRACTICE
