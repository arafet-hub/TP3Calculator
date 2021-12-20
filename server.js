const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader'); 
const packageDef = protoLoader.loadSync( "calculator.proto" , {}); 
const grpcObject = grpc.loadPackageDefinition(packageDef);
const calculatorPackage = grpcObject.calculatorPackage; 

const server = new grpc.Server(); 

server.bind('localhost:9000' , grpc.ServerCredentials.createInsecure());
server.addService(calculatorPackage.calculator.service,{
	'multiplication': multiplication,
	'addition' : addition,
	'soustraction' : soustraction,
	'division' : division

	
}); 

server.start(); 

const calculator = []; 

function multiplication (call , callback) {
	const resultat = { 
	   'res' : call.request.x * call.request.y
	}
	callback(null, resultat); 
	}
	function addition (call , callback) {
		const resultat = { 
		   'res' : call.request.x + call.request.y
		}
		callback(null, resultat); 
		}
		function soustraction (call , callback) {
			const resultat = { 
			   'res' : call.request.x - call.request.y
			}
			callback(null, resultat); 
			}
			function division (call , callback) {
					if (call.request.y==0) {

						const resultat = {
							'res' : 0,
							'text' : 'erreur on ne peut pas diviser par zéro'
						 }
						 callback(null, resultat); 
						 }
					else{
					const resultat = {
				   'res' : call.request.x / call.request.y,
				   'text' : 'succes'

				}
				callback(null, resultat); 
				}}
			
		
	


