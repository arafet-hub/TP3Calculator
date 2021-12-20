const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader'); 
const packageDef = protoLoader.loadSync( "calculator.proto" , {}); 
const grpcObject = grpc.loadPackageDefinition(packageDef);
const calculatorPackage = grpcObject.calculatorPackage;

const client = new calculatorPackage.calculator('localhost:9000' , grpc.credentials.createInsecure()); 
client.multiplication({
	'x' : 10 , 
	'y' : 3
} , (err, response ) => { 
       console.log('Multiplication from server' + JSON.stringify(response)); 
}) 
client.soustraction({
	'x' : 10 , 
	'y' : 0
} , (err, response ) => { 
       console.log('soustraction from server' + JSON.stringify(response)); 
}) 
client.addition({
	'x' : 10 , 
	'y' : 3
} , (err, response ) => { 
       console.log('addition from server' + JSON.stringify(response)); 
}) 
client.division({
	'x' : 10 , 
	'y' : 0
	
} , (err, response ) => { 
       console.log('division from server' + JSON.stringify(response)); 
}) 


//node server .js 

//node client .js