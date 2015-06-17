// // Constructors With Methods
// In addition to setting properties, constructors can also define methods. This way, as soon as the object is created it will have its own methods as well.
//
// Here we have a Rectangle constructor, which sets the height and width properties equal to the arguments, just like our Person did with name and age.
//
// Notice we have added a calcArea method. This calculates the area of the rectangle in terms of its height and width.
//
// Line 11 creates a new object rex which makes use of the constructor. You can see how rex calls the calcArea method in line 12 and saves the result in a variable, area.
//
// Instructions
// Define a new method on line 8, calcPerimeter, which calculates and returns the perimeter for a Rectangle in terms of height and width.
//
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
  this.calcPerimeter = function(){
      return 2 * this.height + 2 * this.width
  };
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();

// }
// Constructors in Review
// Constructors are a way to make objects with the keyword new. The most basic constructor is the Object constructor, which will make an object with no methods or properties.
//
// For more complicated objects we can make our own constructors and put in whatever properties and methods we want.
//
// Check out our example to the right to see objects in action. Our Rabbit constructor defines an adjective property and a describeMyself method.
//
// Recall how these kind of custom constructors are important because they allow us to easily make many similar objects.
//
// Instructions
// Create a new object rabbit1 with the adjective "fluffy", a new object rabbit2 with the adjective "happy", and a new object rabbit3 with the adjective "sleepy".
//
// Use the method describeMyself to print out in the console a sentence about each object you just created!
// // now we can easily make all of our rabbits

function Rabbit(adjective) {
    this.adjective = adjective;
    this.describeMyself = function() {
        console.log("I am a " + this.adjective + " rabbit");
    };

var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");

// Arrays of Objects
// Remember that an object is just another type, like a string or number but more complex. This means that just as we can make arrays of numbers and strings, we can also make arrays of objects.
//
// Here we have our Person constructor which should look familiar. We can use this constructor to make an array of Person objects, similar to how we might make an array of numbers but filling in people instead.



// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old

family[3] = new Person("timmy", 6);

//
// Loop the loop
// Arrays filled with objects will work just like arrays filled with numbers and strings.
//
// In the same way we may loop through an array of numbers to print them out or calculate a sum, we can loop through an array of objects and access properties or methods.
//
// Instructions
// Write a person constructor called Person that has two properties (name and age).
// Create an empty array called family.
// There will be four objects in the array. Using your Person constructor, create the four objects and put them in the array. The order of the objects are:
//
// "alice" who is 40
// "bob" who is 42
// "michelle" who is 8
// "timmy" who is 6
// Create a for-loop that loops through the family array and prints out the name property for each family member in order of creation.

// Our Person constructor
function Person (name, age){
this.name = name;
this.age = age;
};


family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2]  = new Person("michelle", 8);
family[3] = new Person ("timmy", 6);

// Now we can make an array of people


// loop through our new array
for(var i = 0; i < family.length; i++){
    console.log(family[i]);
};
//
// Try it Out!
// This time try making your own function that takes objects as parameters!
//
// Here we have given you the Person constructor again, along with the ageDifference function as an example.
//
// Now create a new function, olderAge. It should take two Person objects as parameters, and return the age of whatever Person is older. For example, with 30 year-old alice and 25 year-old bob, olderAge(alice, bob); should return 30, because that is alice's age and she is older than bob. If the two people have the same age then you can return that age.

// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function (person1, person2) {
  if(person1.age > person2.age){
    return person1.age;
  }

  else{
      return person2.age;
  };
};

// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));
