"use strict"
const AWS = require("aws-sdk");
const dynamoDBClient = new AWS.DynamoDB.DocumentClient({
        region: 'us-east-1',
        endpoint: 'http://localhost:8000'
});

exports.handler = async event => {
    console.log("update auctions")
}
