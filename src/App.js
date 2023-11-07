import { useRef, useState, useContext } from 'react';
import { ParentComponent } from './components/ParentComponent';
import { LifecycleComponentClass } from './components/LifecycleComponentClass';
import { LifecycleComponentFunc } from './components/LifecycleComponentFunc';
import { List } from './components/List';
import { ThemeContext } from './contexts/ThemeContext';
import { Switch } from 'antd';
import s from './App.module.scss'

import styles from './styles/MainForComponent.module.scss'

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const toggleName = theme === 'light' ? 'Включить ночной режим' : 'Выключить ночной режим'
  const data = [{ id: 1, name: "One" }, { id: 2, name: "Two" }, { id: 3, name: "Three" }]
  const [dataList, setDataList] = useState(data)
  const [inputValue, setInputValue] = useState('')
  const link = useRef(null)
  const containerClasses = `${s.App} ${theme === 'light' ? s.light : s.dark}`
  const handleAddToList = () => {
    inputValue && setDataList([...dataList, { id: dataList.length + 1, name: inputValue }])
    setInputValue('')
  }
  const handleInputChange = (e) => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <div className={containerClasses} >
      <p>{toggleName}</p>
      <Switch onChange={toggleTheme} />
      <ParentComponent />
      <LifecycleComponentClass />
      <LifecycleComponentFunc />
      <div className={styles.main}>
        <input ref={link} type='text' value={inputValue} onChange={handleInputChange} />
        <button onClick={() => link.current.focus()}>Focus</button>
        <button onClick={(e) => handleAddToList(e)}>Add</button>
        <List dataList={dataList} setDataList={setDataList} />
      </div>
    </div>
  );
}

export default App;
