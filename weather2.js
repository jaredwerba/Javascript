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


//iterate over an array
var languages = ["HTML", "CSS", "JavaScript", "Python", "Ruby"];

for (var i = 0; i < languages.length; i++){
    console.log(languages[i]);
}


var object1 = new Object();
var object2 = {};
var object3 = {};

object1.name = 'jared';
object2['age']=29;
object3.location ='earth';

console.log(object1, object2, object3)


// Our bob object again, but made using a constructor this time
var bob = new Object();
bob.name = "Bob Smith";
bob.age = 30;
// Here is susan1, in literal notation
var susan1 = {
  name: "Susan Jordan",
  age: 24
};
// Make a new susan2 object, using a constructor instead

var susan2 = new Object();

susan2.name = "Susan Jordan";
susan2.age = 24;
