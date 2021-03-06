<!-- TOC -->

- [mongostat](#mongostat)
- [mongotop](#mongotop)
- [serverStatus()](#serverstatus)
- [profile](#profile)
	- [profilingの有効化](#profilingの有効化)
	- [profiling結果の取得](#profiling結果の取得)
	- [profilingの無効化](#profilingの無効化)
- [currentOp](#currentop)
- [killOp](#killop)
- [stats](#stats)
- [statsAll](#statsall)

<!-- /TOC -->

# mongostat
mongostat から指定時間分のレスポンスを受け取ってjson形式で表示する。
コンソールで表示するだけなら mongostat を実行する方が良い

下記を事前に設定する
* mongoクライアントのパス
* データベースサーバのIP/port
* 取得するデータ数(1秒毎に1件)
```
node utilities/stats
```
下記コマンドで同じ結果が得られる
```
mongostat -h 192.168.99.100 -p 27017 -n 10 --discover
```

# mongotop
mongotop はJSON形式で取得できる
```
mongotop -h 192.168.99.100 -p 27017 -n 10 --json
```

# serverStatus()
mongostatとかの参照先
```
mongo 192.168.99.100:27017/walter utilities/serverStatus.js
```

# profile
## profilingの有効化
10ms以上かかったqueryを対象としてprofilingする
```
mongo 192.168.99.100:27017/walter utilities/setProfilingOn.js
```

## profiling結果の取得

新しい順に10件取得する。
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
* mongoクライアントのパス
* データベースサーバのIP/port

```
node utilities/kill <opid>
```

# stats
DBの統計情報を取得する
```
mongo 192.168.99.100:27017/walter utilities/stats.js
```


# statsAll
すべてのコレクションの統計情報を取得する
```
mongo 192.168.99.100:27017/walter utilities/statsAll.js
```
