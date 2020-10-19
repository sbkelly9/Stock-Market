import axios from 'axios';
import IndexPage from "./index.js";

//api key: 2b8d3472bamshb3c4f5ef0be4828p1ba36ejsnb64c20deed5d

const instance = axios.create({
    baseURL: 'https://alpha-vantage.p.rapidapi.com',
    headers: {
        'content-type':'application/octet-stream',
        "x-rapidapi-host":'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': "2b8d3472bamshb3c4f5ef0be4828p1ba36ejsnb64c20deed5d"
    }
});
export default {
    stockTimeSeries: (symbol) =>
    instance({
        'method':'GET',
        'url':'/query',
        'params': {
            'outputsize':'compact',
            'datatype':'json',
            'function':'TIME_SERIES_DAILY_ADJUSTED',
            'symbol': symbol.toUpperCase()
        },
    })
}