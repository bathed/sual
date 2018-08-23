var Product = require ('../models/product');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopdb", { useNewUrlParser: true })
handleError = (err) =>
	console.log("Got an error, err");

	var products = [ 
	new Product({
	imageUrl: 'https://stockx.imgix.net/products/streetwear/Supreme-Brick-Brick.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2',
	title: "Buckler's Soap",
	description:"average",
	price: 25
	}),
	new Product({
	imageUrl: 'https://stockx.imgix.net/products/streetwear/Supreme-Brick-Brick.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2',
	title: "Buckler's Soap",
	description:"average",
	price: 25
	}),
	new Product({
	imageUrl: 'https://stockx.imgix.net/products/streetwear/Supreme-Brick-Brick.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2',
	title: "Buckler's Soap",
	description:"average",
	price: 25
	}),
];

var done=0;
for(var i=0; i<products.length;i++){
	products[i].save(function(err){;
	if (err) return handleError(err);
	done++
	if (done === products.length) {
		exit();
		}
	});
} 
function exit(){
	mongoose.disconnect();
}
