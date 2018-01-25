var colections = db.getCollectionNames();
var result = new Array();
for(var idx in colections){
	result.push(db[colections[idx]].stats());
}
print(JSON.stringify(result));