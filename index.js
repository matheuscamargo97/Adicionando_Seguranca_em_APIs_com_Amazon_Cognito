var AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    
    let responseBody = "";
    let statusCode = 200;
    
    let {id, price} = JSON.parse(event.body);
    
    const params = {
      TableName : 'DIO_curso_items',
       Item: {
         id: id,
         price: price
      }
    };
    
    try {
        
        await dynamoDB.put(params).promise();
        responseBody = JSON.stringify('Item inserido com sucesso!');
        
    } catch (err) {
          
        statusCode = 400;
        responseBody = JSON.stringify(err);
        
    }
      
    const response = {
        statusCode: statusCode,
        body: responseBody
    };
    
    return response;
};
