Db.orders.aggregate([               // this aggregation is running on orders collection
    {
        $match:{size:"medium"}      // $match is used to filter the data whose size is "medium"
    },                              // this aggregartion result is pass to the next stage for grouping
    {
        $group:{                      // $group is used to group the data accordingly.
            _id:"$name",
            totalQuantity:{$sum:"$quantity"}
        }
    }
])
//This how the aggregation pipeline works in mongodb.
//Its just a simple example of aggregation pipeline.