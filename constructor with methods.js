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
