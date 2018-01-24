<!-- TOC -->

- [Common options](#common-options)
	- [?pretty=true](#prettytrue)
	- [?format=yaml](#formatyaml)
	- [?human=true](#humantrue)
- [GET    /{index}/_stats](#get-indexstats)
- [GET    /{index}/_segments](#get-indexsegments)
- [GET    /{index}/_recovery](#get-indexrecovery)
	- [現在の状態を取得](#%E7%8F%BE%E5%9C%A8%E3%81%AE%E7%8A%B6%E6%85%8B%E3%82%92%E5%8F%96%E5%BE%97)
- [_cluster](#cluster)
	- [_cluster/health](#clusterhealth)
	- [\_cluster/stats](#clusterstats)
	- [\_cluster/pending\_tasks](#clusterpendingtasks)
- [_tasks](#tasks)
	- [現在のタスクを取得する](#%E7%8F%BE%E5%9C%A8%E3%81%AE%E3%82%BF%E3%82%B9%E3%82%AF%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B)
	- [ノードを指定して取得](#%E3%83%8E%E3%83%BC%E3%83%89%E3%82%92%E6%8C%87%E5%AE%9A%E3%81%97%E3%81%A6%E5%8F%96%E5%BE%97)
	- [タスクのキャンセル](#%E3%82%BF%E3%82%B9%E3%82%AF%E3%81%AE%E3%82%AD%E3%83%A3%E3%83%B3%E3%82%BB%E3%83%AB)
	- [ホットスレッドの取得](#%E3%83%9B%E3%83%83%E3%83%88%E3%82%B9%E3%83%AC%E3%83%83%E3%83%89%E3%81%AE%E5%8F%96%E5%BE%97)
- [_cat](#cat)
- [以下、参考までに](#%E4%BB%A5%E4%B8%8B%E3%80%81%E5%8F%82%E8%80%83%E3%81%BE%E3%81%A7%E3%81%AB)
	- [x-packのインストール](#x-pack%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
	- [zabbixでelasticsearchを監視するやつ](#zabbix%E3%81%A7elasticsearch%E3%82%92%E7%9B%A3%E8%A6%96%E3%81%99%E3%82%8B%08%E3%82%84%E3%81%A4)
	- [広告配信での運用例](#%E5%BA%83%E5%91%8A%E9%85%8D%E4%BF%A1%E3%81%A7%E3%81%AE%E9%81%8B%E7%94%A8%E4%BE%8B)
	- [elastalert](#elastalert)

<!-- /TOC -->

# Common options
## ?pretty=true
jsonでretrunされる

## ?format=yaml
yamlでreturnされる

## ?human=true
人間でもわかりやすい形式にする。ミリ秒の日付が年月日の日付形式になったり、バイトがキロバイトになったりする

# GET    /{index}/_stats
	インデックスの統計情報取得
# GET    /{index}/_segments
	インデックスシャード情報取得
# GET    /{index}/_recovery
	インデックスのリカバリー状況取得

curl -XGET '192.168.99.100:9200/5a5ea5451a949219bdabbbc7/_recovery?human&pretty'


## 現在の状態を取得
curl -XGET '192.168.99.100:9200/_nodes/stats&pretty'
curl -XGET '192.168.99.100:9200/_nodes/{node_id1[,node_id2]}/stats&pretty'


# _cluster
各ノードは下記のように指定できる
```
// Local
GET /_nodes/_local
// Address
GET /_nodes/10.0.0.3,10.0.0.4
GET /_nodes/10.0.0.*
// Names
GET /_nodes/node_name_goes_here
GET /_nodes/node_name_goes_*
// Attributes (set something like node.attr.rack: 2 in the config)
GET /_nodes/rack:2
GET /_nodes/ra*:2
GET /_nodes/ra*:2*
```

## _cluster/health

## \_cluster/stats
	クラスター全体の統計情報を取得する

	_nodes/stats
	_nodes/{nodeId1[,nodeId2]}/stats
		ノード単位での統計情報を取得する

## \_cluster/pending\_tasks
実行されていない（ペンディングされた）タスク

# _tasks

## 現在のタスクを取得する
```
curl -XGET 'localhost:9200/_tasks?pretty'
```

## ノードを指定して取得
```
curl -XGET 'localhost:9200/_tasks?nodes=nodeId1,nodeId2&pretty'
```

## タスクのキャンセル
```
curl -XPOST 'localhost:9200/_tasks/node_id:task_id/_cancel?pretty'
```
すべてのreindexを削除する場合
```
curl -XPOST 'localhost:9200/_tasks/_cancel?nodes=nodeId1,nodeId2&actions=*reindex&pretty'
```

## ホットスレッドの取得
```
curl -XGET '192.168.99.100:9200/_nodes/hot_threads'
```

# _cat
	他apiで取得できる値を抜粋したもの。?helpで詳細を表示できる
```
_cat/allocation?help
```
* \_cat/aliases
* \_cat/allocation
* \_cat/count
* \_cat/fielddata
* \_cat/health
* \_cat/indices
* \_cat/master
* \_cat/nodeattrs
* \_cat/nodes
* \_cat/pending_tasks
* \_cat/plugins
* \_cat/recovery
* \_cat/repositories
* \_cat/thread\_pool
* \_cat/shards
* \_cat/segments
* \_cat/snapshots
* \_cat/templates





# 以下、参考までに
## x-packのインストール
```
bin/elasticsearch-plugin install x-pack
```
securtyがデフォルトで有効。不要ならelasticsearch.ymlから
``` yml
# config/elasticsearch.yml
xpack.security.enabled: false
```
デフォルトのユーザとパスは elastic / changeme

## zabbixでelasticsearchを監視するやつ
[Elasticsearchのクラスタ監視をZabbixでする](https://tubone-project24.xyz/index.php/2017/07/23/elasticsearch-zabbix/)
[github](https://github.com/tubone24/Elastic_zab)

## 広告配信での運用例
[ElasticSearch勉強会 第6回](https://www.slideshare.net/Satully/elasticsearch-study6threaltime20140916)
* [ElasticSearch Head](http://mobz.github.io/elasticsearch-head/) シャードの状況把握
* [bigdesk](http://bigdesk.org/) 細かな負荷監視に利用
* [ElasticHQ](http://www.elastichq.org/) 全体の俯瞰とチューニング箇所の特定に利用
* [Zabbix](http://www.zabbix.com/) 全般的な死活監視と、Fluendからの書き込みの監視

## elastalert
[elastalertでアプリの異常を自動検知して通知したい](https://qiita.com/AknYk416/items/e9e0e2132f6996735ec9)
