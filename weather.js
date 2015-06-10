var user = prompt("what is the weather like today?").toUpperCase();

switch (user){
    case 'RAINY':

        if('RAINY' && 'SUNNY'){
            console.log("how is that possible");
        }
        else{
            console.log("whats going on here");
        }
        console.log("I like the rain");
        break;
    case 'SUNNY':
        if ('SUNNY' || 'SNOWING'){
            console.log("I hope there isn't any ice");
        }
        else{
            console.log("wtf");
        }
        console.log("Get some Vitamin D");
        break;
    case 'SNOWING':
        console.log("Get a shovel");
        break
    default:
        console.log("Condition doesn't exist");
}
