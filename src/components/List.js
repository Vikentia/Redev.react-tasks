import React, { useState } from 'react'
import styles from '../styles/MainForComponent.module.scss'

export const List = ({ dataList, setDataList }) => {
    // const [dataList, setDataList] = useState(data)
    const handleClick = (id) => {
        const updateList = [...dataList.map(e => e.id === id ? { ...e, name: `!!! ${e.name}` } : e)]
        setDataList(updateList)
    }
    return (
        <ol>
            {dataList.map(e => {
                return <div>
                    <li style={{ display: 'inline-block', marginRight: '5px' }} key={e.id}>{e.name}</li>
                    <button style={{ display: 'inline-block' }} onClick={() => handleClick(e.id)}>!!!</button>
                </div>
            })}
        </ol>
    )
}
