import React, {Component} from 'react';
import './App.css';
import {stockList} from './data/stockList';
import Stock from './components/stock';

const alpha = require('alphavantage')({key: process.env.REACT_APP_AVKEY});

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        this.loadData();
    }
    loadData() {
        stockList.forEach((entry) => {
            alpha.data.daily(entry.symbol, "compact", "JSON", '60min')
            .then(data => {
                const polished = alpha.util.polish(data);
                this.setState({data: [...this.state.data, polished]})
            });
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Alphavantage Stock API</h1>
                </header>
                <div className="App-intro">
                    {this.state.data.map((stock,index) => {
                        return <Stock key={index} meta={stock.meta} data={stock.data} />
                    })}
                    <hr/>
                    <h3>Raw data provided by alphaAdvantage</h3>
                    {this.state.data ? JSON.stringify(this.state.data[0]) : <span>No data</span>}
                </div>
            </div>
        );
    }
}
export default App;