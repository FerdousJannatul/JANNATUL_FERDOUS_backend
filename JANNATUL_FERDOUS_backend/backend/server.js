// create a server for local host 3000
const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3000;

const server = http.createServer(app);

//loading data from local json file
var config = require('./api/mockData/favoritesData.json');

//converting the object into an array
const configArray = Object.keys(config).map(i => config[i])

configArray.sort(customfunction);

//sorting data by category
function customfunction(a, b) {
    return a.category < b.category ? 1 : -1;
}

server.listen(port);

