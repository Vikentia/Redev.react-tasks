import React from 'react'
import styles from '../styles/MainForComponent.module.scss';

export const ChildComponent = ({ name, count }) => {
    return (
        <div >Hello, {name}!
            <p>Счетчик:</p>
            {count}
        </div>
    )
}
