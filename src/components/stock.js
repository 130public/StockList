import React, {Component} from 'react';
import Day from './day';
import {ReadableDate} from "../utils/date"
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
    for (var key in this.props.data) {
      if (this.props.data.hasOwnProperty(key)) {
        days.push({"date":key,"data":this.props.data[key]});
      }
    }
    //console.log(days);
    this.setState({dayData: days})
  }
  render(){
    const {key,meta} = this.props;
    return (
        <div key={key} className="stock">
         <h1>{meta.symbol}</h1>
         <p>Updated: {ReadableDate(meta.updated)}</p>
          <hr/>
          <table>
            <thead>
              <tr>
                <th>date</th><th>open</th><th>high</th><th>low</th><th>close</th><th>volume</th>
              </tr>
            </thead>
            <tbody>
              {this.state.dayData.slice(0, 5).map((entry,index) => { //SLICE LIMITS ORIGINAL LIST OF 100
                return <Day date={entry.date} data={entry.data}/>
              })}
            </tbody>
          </table>
        </div>
    )
  }

}
export default Stock;