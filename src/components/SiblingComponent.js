import React, { useState } from 'react'
import styles from '../styles/MainForComponent.module.scss';

export const SiblingComponent = () => {
    const [text, setText] = useState('Исходный текст')
    return (<div >
        <div>Текст: {text}</div>
        <button onClick={() => setText('Redev')}>Изменить на Redev</button>
    </div>
    )
}
