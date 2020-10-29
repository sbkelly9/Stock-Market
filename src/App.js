import React, { Component } from "react";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
// import StockList from "./Components/StockList"


class App extends React.Component {
    constructor() {
        super();
        this.state = {
          data: []
        }; //state
      }
  componentDidMount = () => {
    axios({
      baseURL: "https://coinranking1.p.rapidapi.com/coins",
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": "2b8d3472bamshb3c4f5ef0be4828p1ba36ejsnb64c20deed5d",
        "useQueryString": true
      },
    })
      .then((response) => {
        console.log(response);
      })
      .then((data) => this.setState({ data }))
      .catch(() => {
        alert("THERE IS AN ERROR");
      });
  };

  render() {
      
    return (
      <React.Fragment>
      <p>{ this.state.data }</p>
      </React.Fragment>
    );

  }
}
export default App;
