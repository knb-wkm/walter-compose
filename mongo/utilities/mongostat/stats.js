/**
 * stats.js
 * mongostat から指定時間分のレスポンスを受け取ってjson形式で表示する。
 * コンソールで表示するだけなら mongostat を実行する方が良い
 **/

var exec = require('child_process').exec;

var mongostat = "mongostat";	// mongostatのパス
var host = "192.168.99.100";
var port = "27017";
var num_rows = 10;	// 取得するデータ数。１秒毎に１行取得する

if(process.argv[2] === undefined){
	var options = "--discover"; // discoverはレプリカセット・シャードクラスタの全てのインスタンスの状態を表示
}else{
	var options = "";
	for(var i = 2; i<process.argv.length;i++){
		options += ` ${process.argv[i]}`;
	}
}

var command = `${mongostat} -h ${host} -p ${port} -n ${num_rows} ${options}`;

exec(command, function(err, stdout, stderr){
	try {
		if(err) throw stderr;
		var rows = stdout.split('\n');
		var keys = new Array();
		var stats = new Array();
		for(var i in rows){
			if(i === "0"){
				var _keys = rows[i].split( /\s+/ );
				for(var idx in _keys){
					if(_keys[idx].length){
						keys.push(_keys[idx]);
					}
				}
			}else{
				if(rows[i].length){
					var _row = rows[i].split( /\s+/ );
					var row = {};
					for(var j = 0; j < keys.length;j++){
						row[keys[j]] = _row[j];
					}
					stats.push(row);
				}
			}
		}
		console.log( stats );

	} catch (e) {
		console.log(e);
	}
});