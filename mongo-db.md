Mongo db is No sql data base.
Record in Document db is a collection and it is JOSN i.e. key and value.

Collections are called "Table" and "Row" & "Column" are called key & value pair.

Mongo db provide read & write operation and also provide the following operation:

->Data Aggregation.
->Text Search and Geospatial search.  ---- "will discuss the moved a head"

--------------------------Data Aggregation-----------------------------------------

Aggregation:-It is the process of transforming and analyzing the data stored in the collection
to produced the computed result.
->It is used to perform the various operation on the data such as filtering, grouping, and calculating the 
aggregated values.

Aggregation Pipeline:-It is combination of various stages that perform the operation.
->Each stage perform the operation on the input document.For example stage can filter the data
with the required match.

->The document that are output from a stage can be pass to th other stage for the process.

=>Aggregation pipeline runs with the......... "db.collection.aggregate()" and it does not modify the collection until unless the pipeline contains the "$merge" or "$out"

// refers---------to--------"aggregation-pipeline.js" for example.

-------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------

->Mongo db provide the horizonatl scalability as part of its core functionality.

->Mongo db has multiple storage engine 
1-----Wired storage engine.
2-----In memory storage engine.

-----------------------------------------------------------------------------------------

-----------------------------Data bases and collection-------------------------------------------
->Data base hold one or more collection of documents and to access the data base 
we use mongosh-----> it is REPL of Node.js which is used to access the mongodb

->If data base does not exist mongoDb create the data base when we first insert the data in to the data in to the data base.

e.g.----> use myNewDB
--------> db.myNewCollection1.insertOne( { x: 1 } )

------In this inserOne() operation will create the data base and and the collection both if they 
don't exist.


----------------VIEWS IN MONGO DB--------------------------------------
Views are the querable object in mongo db whose content are defined by the aggregation pipeline
Views don't store the data themselves they provide the virtual representaion of the data.
Views are for views only we cannot perform any operation any operation on it.


--------------------------TYPES OF COLLECTION IN MONGODB--------------------------------------

1->Standard collections-----collection with no specilaity
2->Capped Collections-----------collection with limited size---i.e means when the fixed size is reached 
the oldest document is overwitten by the new records.
3->Time series collections-----------with time series data for storing metrics
4->Sharded Collections-------to share the data across multiple shards---and can be horizontally scalable
5->TTL collections---------automatically delete the records after a certain period of time
6->Clustured Collections--------



