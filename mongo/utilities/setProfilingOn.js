/**
 * profiling を有効にする
 */
var slowTime = 10;	// 10msを超えたもののみ対象
db.setProfilingLevel(2, slowTime);