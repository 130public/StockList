import React, {Component} from 'react';
import Row from "./row"


class Table extends Component {
  render(){
    const {data,limit} = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>date</th><th>open</th><th>high</th><th>low</th><th>close</th><th>volume</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, limit).map((entry,index) => { //SLICE LIMITS ORIGINAL LIST OF 100
            return <Row key={index} date={entry.date} data={entry.data}/>
          })}
        </tbody>
      </table>
    );
  }
}

export default Table


