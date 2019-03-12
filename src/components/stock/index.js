import React, {Component} from 'react';
import Table from './table';
import {ReadableDate,DaysDiff} from "../../utils/date"
import './stock.css';

class Stock extends Component {
  constructor(props) {
      super(props);
      this.state = {
          dayData: [],
      }
  }
  componentDidMount() {
    this.buildTable();
  }
  buildTable(){
    //
    const days = [];
    for (var key in this.props.stockData) {
      if (this.props.stockData.hasOwnProperty(key)) {
        days.push({"date":key,"data":this.props.stockData[key]});
      }
    }
    //console.log(days);
    this.setState({dayData: days})
  }
  render(){
    const {stockMeta ,privateData} = this.props;
    return (
        <div className="stock">
          <h1>{privateData.name} / {privateData.symbol}</h1>
          <p>Updated: {ReadableDate(stockMeta.updated)}</p>
          <p>Days owned: {DaysDiff(privateData.purchaseDate)}</p>
          <p>Purchase price: {privateData.purchasePrice}</p>
          <p>Shares owned: {privateData.purchaseShares}</p>
          <pre>{JSON.stringify(privateData)}</pre>
          <hr/>
          <Table data={this.state.dayData} limit="5" />
        </div>
    )
  }

}
export default Stock;