import React, { Component } from "react";
import { BrowserRouter, Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
// import StockList from "./Components/StockList"

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      base: [],
      coins: [],
      stats: []
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
        console.log(response.data.data);

        let { base, stats, coins } = response.data.data

        this.setState({ coins: coins, base: base, stats: stats }, () => console.log(this.state.coins))

      })
      .catch(() => {
        alert("THERE IS AN ERROR");
      });
  };

  filterMethod = (coin) => {
    let { name } = coin
    if (name === "Bitcoin" || name === "Ethereum" || name === "Tether USD") {
      return coin
    }
  }
  render() {
    let { coins } = this.state

    if (coins) {

      let filteredList = coins
        .filter(coin => this.filterMethod(coin))
        .map((dog, index) => {
          return (
            <div key={index}>
              <h1>{dog.name}</h1>
              <p>{dog.websiteUrl}</p>
              <p>{dog.price}</p>
            </div>
          )
        })

      return (
        <div>
          {filteredList}
        </div>
      );
    }
  }
}

export default App;