"use strict"
const AWS = require("aws-sdk");
const dynamoDBClient = new AWS.DynamoDB.DocumentClient({
    region: 'us-east-1',
    endpoint: 'http://localhost:8000'
});


exports.handler = async (event) => {
    const { id, email, name, age } = JSON.parse(event.body);

    const params = {
        TableName : process.env.GROUP_TABLE,
        Item : {
            "id": id,
            "email": email,
            "name" : name,
            "age" : age
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
