/**
 * kill.js
 * opid: kill対象のオペレーションID。
 */

var exec = require('child_process').exec;


var mongo = "mongo";	// mongoのパス
var host = "192.168.99.100";
var port = "27017";

var opid = process.argv[2];
try {
	if(opid === undefined ) throw "opidを指定してください";
	var command = `${mongo} ${host}:${port} --eval "db.killOp(${opid})"`;
	exec(command, function(err, stdout, stderr){
		if(err) throw (stderr);
		console.log(stdout);
	});
} catch (e) {
	console.log(e);
}

