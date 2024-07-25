CRUD-
-> Create
-> Read
-> Update
-> Delete

-----------Create operations--------
--insertOne()------------------------------These are methods of Mongoose that we used to handle Mongodb
--inserMany()

e.g. insertOne({
    name:Tabish,
    city:Hyderabad
})


---------Read operation---------
--find
db.user.find(
    {age:{$gt:18}},
    {name:1, address:1}
)

-------Update Operation------------

--updateOne()
--updateMany()
--replaceOne()

e.g-> updateOne(
    {age:{$gt:18}},
    {$set:{status:"reject"}}
)
