import React, { Component } from "react";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
// import StockList from "./Components/StockList"


class App extends React.Component {

componentDidMount = () => {
axios({
  baseURL: `https://api.twelvedata.com/time_series`,
  method: 'GET',
  headers: {
    'x-rapidapi-host': 'twelve-data1.p.rapidapi.com',
    'x-rapidapi-key': '8abae5eb38324f5788036fd745d015d2'
  }
})
.then((response) => {
console.log('Data', response.data)
})
.catch(() => {
alert("THERE IS AN ERROR")
})
}
  
  render() {
  return (
  <div>
      <h2>TEST</h2>
  </div>
  )}
}
export default App;
