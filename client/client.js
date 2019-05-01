const WebSocket = require('ws');
const ws = new WebSocket('ws://192.168.1.13:40510');

const envar= process.env.varForGroup;
var jarray= [];

function groupBy(key, array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var added = false;
    for (var j = 0; j < result.length; j++) {
      if (result[j][key] == array[i][key]) {
        result[j].items.push(array[i]);
        added = true;
        break;
      }
    }
    if (!added) {
      var entry = {items: []};
      entry[key] = array[i][key];
      entry.items.push(array[i]);
      result.push(entry);
    }
  }
  return result;
}

ws.onopen = function(){
	console.log('websocket connected . . . ')
	ws.send('connected')
	console.log(jarray);
}

ws.onmessage = function (ev) {
	console.log('something arrived at client.js file');
	
	jarray = JSON.parse(ev.data);

	jarray = groupBy(envar,jarray);
	
	jarray = JSON.stringify(jarray);
	
	ws.send(jarray);
}
