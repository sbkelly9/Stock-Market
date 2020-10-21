import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";


//fetch the api using axios
const options = {
  method: 'GET',
  url: 'https://rapidapi.p.rapidapi.com/time_series',
  params: {symbol: 'AMZN', interval: '1day', outputsize: '30', format: 'json'},
  headers: {
    'x-rapidapi-host': 'twelve-data1.p.rapidapi.com',
    'x-rapidapi-key': '2b8d3472bamshb3c4f5ef0be4828p1ba36ejsnb64c20deed5d'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

