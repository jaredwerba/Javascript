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


//
// Displaying People
// We currently can print out information about any person in our contacts with console.log. That gets tiring. If only we knew some code that stores blocks of code that we can call.
//
// Good thing we know about functions!
//
// We can create a function that consistently displays a specific property of an object.
//
// Instructions
// Define a function called printPerson that takes a parameter called person.
// In the function body, print out the person parameter's firstName property by accessing it with a dot just like before. Then print a space, then their lastName in the same way.
// Call the printPerson() function to print out the first item in the contacts array. The first item in an array is at position 0.
// Then on the next line, call printPerson() again to print out the second item in the contacts array.
// Don't worry if your output appears twice - we're just double checking your code!
//
//
// // Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

// printPerson added here

// 
//
//
// We Made a Friend!
// We have our address book in the contacts array, but what if we make a new friend and want to add them as well?
//
// Objects, just like other types of data, can be put into arrays with a array[position] = object statement. To append something to the end of the array, you need to put it in the position one after the last item.
//
// Since arrays are numbered starting at zero, the number of the last item in the array will be one less than the quantity of items in the array. The size of the array is thus the position to insert at.
//
// The length of an array, like the length of a string, can be found with array.length.
//
// We can do the insert in a succinct way by adding the new object directly into the array position without even giving it a name. This can be confusing, but we will be able to refer to it by its array position, so it does not need a direct name. Do it like this:
//
// contacts[contacts.length] = {
//     firstName: firstName,
//     lastName: lastName,
//     phoneNumber: phoneNumber,
//     email: email
// };
// (Assuming you defined the add function with the parameters firstName, lastName, phoneNumber, and email.)
//
// That will automatically create a new object and add it into the array. Pretty neat.
//
// Instructions
// We'll be creating a function that allows us to add our new friend to the address book.
//
// Create a function called add with the parameters firstName, lastName, and email, phoneNumber.
// In this new function, you want to create a new contact object like bob and mary. Instead of having this object's property values be filled with strings though, set them to the appropriate function parameters passed in.
// Add this new contact object to the contacts array.
// Call add with whatever first name, last name, phone number, and email arguments you like.
// Make sure you call the list function, to check if your new entry is added. And delete any other function that logs output in the console, i.e 'search' function.
// Run the code!
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/

 function search(lastName){
    var contactsLength = contacts.length;
        for(i=0;i<=length;i++){
            if(contacts[i].lastName===lastName) {
            printPerson(contacts[i]);
            }
        }
    }



function add (firstName, lastName, email, phoneNumber){
    contacts[contacts.length] = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    };
}

add("jared", "werba", "jwerba@gmail.com", 5555);
list();
