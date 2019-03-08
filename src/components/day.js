import React from "react"
import {ReadableDate} from "../utils/date"


const Day = ({date,data}) => (

  <tr>
    {/* <td><pre>{JSON.stringify(data)}</pre></td> */}
    <td>{ReadableDate(date)}</td><td>{data.open}</td><td>{data.high}</td><td>{data.low}</td><td>{data.close}</td><td>{data.volume}</td>
  </tr>
)

export default Day
