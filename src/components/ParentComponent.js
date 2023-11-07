import React, { useState } from 'react';
import { ChildComponent } from './ChildComponent';
import { SiblingComponent } from './SiblingComponent';
import styles from '../styles/MainForComponent.module.scss';

export const ParentComponent = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <div className={styles.main}>
                <button onClick={() => setCount(count + 1)}>Увеличить</button>
                <button onClick={() => setCount(0)}>Сбросить</button>
                <button onClick={() => setCount(Math.ceil(Math.random() * 10))}>Случайное значение</button>
                <button onClick={() => count && setCount(count - 1)}>Уменьшить</button>
                <ChildComponent name={'Victoria'} count={count} />
                <SiblingComponent />
            </div>
        </div>
    )
}
