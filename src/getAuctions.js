"use strict"
const AWS = require("aws-sdk");
const dynamoDBClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1',
    endpoint: 'http://localhost:8000'
});


exports.handler = async event => {
    const table = "test";
    const year = 2015;
    const title = "The Big New Movie";

    const params = {
        TableName:table,
        Item:{
            "id": 3,
            "email": "abc@abc.com",
            "year": year,
            "title": title,
            "info":{
                "plot": "Nothing happens at all.",
                "rating": 0
            }
        }
    };

    console.log("Adding a new item...");
    dynamoDBClient.put(params, function(err, data) {
        if (err) {
            return("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            return("Added item:", JSON.stringify(data, null, 2));
        }
    });
}
