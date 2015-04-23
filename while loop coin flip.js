var coin = Math.floor(Math.random() * 2);

while(coin){
	console.log("Heads! Flipping again...");
	var coin = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");