import React, { Component } from 'react';
import styles from '../styles/MainForComponent.module.scss';
import axios from 'axios';

export class LifecycleComponentClass extends Component {
    constructor() {
        super()
        this.state = {
            infoAboutCat: '',
            count: 0
        }
    }
    componentDidMount() {
        const URL = 'https://catfact.ninja/fact'
        axios.get(URL).then(res => this.setState({ infoAboutCat: res.data.fact }))
    }
    componentDidUpdate() {
        console.log(`Компонент обновился и значение count: ${this.state.count}`)
    }
    shouldComponentUpdate(nextProps, nextState) {
        return (!(nextState.count % 2))
    }

    componentWillUnmount() {
        console.log(`Компонент удалился`)
    }
    handleIncrement = () => {
        this.setState(prevState => ({
            infoAboutCat: prevState.infoAboutCat,
            count: prevState.count + 1
        }));
    };
    render() {
        return (

            <div className={styles.main}>
                <p>Классовая компонента</p>
                <p>Fact about cats:</p>
                <p>{this.state.infoAboutCat}</p>
                <p>Счетчик: {this.state.count}</p>
                <button onClick={() => this.handleIncrement()}>Увеличить</button>
            </div>

        )
    }
}
