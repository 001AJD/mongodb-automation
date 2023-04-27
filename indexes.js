db.getCollection("CollectionName").createIndex( { "field1" : 1 }, { background : true } );
db.getCollection("CollectionName2").createIndex( { "field2" : 1 }, { background : true } );
db.getCollection("CollectionName2").createIndex( { "field2" : 1 }, { background : true } );


db.getCollection("Users").createIndex( { "firstName" : 1 }, { background : true } );
db.getCollection("Products").createIndex( { "productName" : 1 }, { background : true } );
db.getCollection("Plans").createIndex( { "planId" : 1 }, { background : true } );