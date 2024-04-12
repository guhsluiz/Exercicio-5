const http = require('http');
const request = require('request');

http.createServer((req, res) => {
    request('https://api.coindesk.com/v1/bpi/currentprice.json', (error, response, body) => {
        console.log(body); // Imprime o corpo da resposta no console
    });
}).listen(8080);
