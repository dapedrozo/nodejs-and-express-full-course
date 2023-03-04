const os = require('os');
const fs = require('fs');
const http = require('http');

//crear un server con express
const express = require('express');
const server = express();
server.get('/', function(request, response){
    response.send('<h1>hola</h1>');
    response.end();
})
server.listen(3000, function(){
    console.log('server on port 3000');
})

/*
//crear servidor
//se crea el server asincronamente, tiene una solicitud y una respuesta, y cuando lo crea queda escuchando en el puerto 3000 (listen(3000)) y a penas envie una respuesta con el .end quiere decir que al terminar la respuesta puede seguir recibiendo peticiones de otros users
const handleServer = function(request, response){
    response.writeHead(200,{'Content-type':'text/html'});
    response.write('<h1>hello</h1>');
    response.end();
}
const server = http.createServer(handleServer);
server.listen(3000, function(){
    console.log('servidor en el puerto 3000');
})
*/

/*crear un archivo asincronamente
fs.writeFile('./nombre-de-archivo-a-crear.txt', 'contenido escrito en este caso linea uno xd', function (error) {
    if(error){
        console.log('hay un error: ',error);
    }
    console.log('archivo creado');
})
*/
/*leer archivos asincronamente
fs.readFile('./nombre-de-archivo-a-crear.txt',function(error,datos){
    if (error){
        console.log('error: ',error);
    }
    console.log('datos leidos: ',datos.toString());
})
console.log('ultima linea')
*/
/*
console.log(os.freemem());
*/