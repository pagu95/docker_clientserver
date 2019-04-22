const fs = require('fs')
const express = require('express')
const WebSocketServer = require('ws').Server,
	wss = new WebSocketServer({port: 40510})

/*
const app = express();//
const port = 8080;
const host = 'localhost';

*/

var myarray = [];
	
myarray.push({
    "id": 1,
    "color": "blue",
    "model_name": "ford",
    "year": 2016
},{
    "id": 2,
    "color": "red",
    "model_name": "Fiat",
    "year": 2016
}, {
    "id": 3,
    "color": "blue",
    "model_name": "Maruti",
    "year": 2016
}, {
    "id": 4,
    "color": "red",
    "model_name": "Fiat",
    "year": 2016
}, {
    "id": 5,
    "color": "red",
    "model_name": "tata",
    "year": 2016
});

console.log('SERVER OPENED');
/*
	app.get('/',function (req,res) { res.send('Hello world'); });
	app.listen(port,host); console.log('i listen at port 3000');
	/**/


	wss.on('connection', function(ws){
		//console.log('now i print my array\n' +JSON.stringify(myarray))
	ws.on('message',function(message){
		
		if(String(message) != 'connected'){
			
			console.log ('something else came here')
			fs.writeFile('myjsonarray.json',message,'utf-8');	
		}else{
		
			console.log('recieved : %s',message)

		}
	})
		ws.send(JSON.stringify(myarray))

})
