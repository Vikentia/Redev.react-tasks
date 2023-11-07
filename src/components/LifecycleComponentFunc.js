import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/MainForComponent.module.scss';

export const LifecycleComponentFunc = () => {

    let [count, setCount] = useState(0)
    let [infoAboutCat, setInfoAboutCat] = useState('')

    useEffect(() => {
        const URL = 'https://catfact.ninja/fact'
        axios.get(URL).then(res => setInfoAboutCat(res.data.fact))
    }, [])
    useEffect(() => {
        console.log(`Компонент обновился и значение count: ${count}`)
        return () => {
            console.log(`Функциональный компонент удалился`)
        }
    }, [count])
    const handleIncrement = () => {
        setCount(count + 1)
    }
    return (
        <div className={styles.main}>
            <p>Функциональная компонента</p>
            <p>Fact about cats:</p>
            <p>{infoAboutCat}</p>
            <LifecycleComponentFuncChildCont count={count} />
            <button onClick={() => handleIncrement()}>Увеличить</button>
        </div>
    )
}

export const LifecycleComponentFuncChild = ({ count }) => {
    return (
        <p>Счетчик: {count}</p>
    )
}

const LifecycleComponentFuncChildCont = React.memo(LifecycleComponentFuncChild, (prevProps, nextProps) => {
    return nextProps.count % 2 !== 0 && prevProps.count !== nextProps.count;
})
