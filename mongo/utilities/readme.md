<!-- TOC -->

- [stats](#stats)
- [serverStatus()](#serverstatus)
- [mongotop](#mongotop)
- [profile](#profile)
	- [profilingの有効化](#profilingの有効化)
	- [profiling結果の取得](#profiling結果の取得)
	- [profilingの無効化](#profilingの無効化)
- [currentOp](#currentop)
- [killOp](#killop)

<!-- /TOC -->

# stats
mongostat から指定時間分のレスポンスを受け取ってjson形式で表示する。
コンソールで表示するだけなら mongostat を実行する方が良い

下記を事前に設定する
* mongoクライアントのパス
* データベースサーバのIP/port
* 取得するデータ数(1秒毎に1件)
```
node utilities/stats
```
下記コマンドで同じ結果が得られる
```
mongostat -h 192.168.99.100 -p 27017 -n 10 --discover
```

# serverStatus()
mongostatとかの参照先
```
mongo 192.168.99.100:27017/walter utilities/serverStatus.js
```

# mongotop
mongotop はJSON形式で取得できる
```
mongotop -h 192.168.99.100 -p 27017 -n 10 --json
```

# profile
## profilingの有効化
10ms以上かかったqueryを対象としてprofilingする
```
mongo 192.168.99.100:27017/walter utilities/setProfilingOn.js
```

## profiling結果の取得

新しい順に10件取得する。
```
mongo 192.168.99.100:27017/walter utilities/showProfiling.js
```

## profilingの無効化
```
mongo 192.168.99.100:27017/walter utilities/setProfilingOff.js
```

# currentOp
現在進行中の操作
```
mongo 192.168.99.100:27017/walter utilities/current0p.js
```

# killOp
下記を事前に設定する
* mongoクライアントのパス
* データベースサーバのIP/port

```
node utilities/kill <opid>
```
