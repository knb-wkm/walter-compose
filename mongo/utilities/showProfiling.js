db.system.profile.find()
.sort({ts: -1})
.limit(10)
.forEach(printjson); // 結果を取得.新しい順に3件
