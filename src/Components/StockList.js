import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://rapidapi.p.rapidapi.com/stocks',
  params: [{exchange: 'NASDAQ', format: 'json'}],
  headers: [{
    'x-rapidapi-host': 'twelve-data1.p.rapidapi.com',
    'x-rapidapi-key': '2b8d3472bamshb3c4f5ef0be4828p1ba36ejsnb64c20deed5d'
  }]
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

// componentWillMount() {
//     fetch(url, optionGET)
//       //converting the API to readable code. Naming it convertedResponse
//       .then((res) => res.json())
//       .then((data) => this.setState({ data }))
//       .catch((err) => {
//         console.log(err);
//       });
//   } 

