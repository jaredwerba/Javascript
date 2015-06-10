var user = prompt("what is the weather like today?").toUpperCase();

switch (user){
    case 'RAINY':
        console.log("I like the rain");
        break;
    case 'SUNNY':
        console.log("Get some Vitamin D");
        break;
    case 'SNOWING':
        console.log("Get a shovel");
        break
    default:
        console.log("Condition doesn't exist");
}
