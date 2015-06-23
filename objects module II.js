// objects module II

//
// An Objective Review
// Let's review the basics of objects covered in our previous lesson on objects. Recall we can create objects using either literal notation or constructor notation.
//
// Literal notation creates a single object. Literal notation uses curly brackets { } and the object's default properties are defined within the brackets using property:value notation.
// Constructor notation involves defining an object constructor. And like defining a function, we use the function keyword. You can think of this constructor as a "template" from which you can create multiple objects. To create a new object from a constructor, we use the new keyword.
// Instructions
// Finish the james object by adding properties to it. His job should be "programmer" and should have a married property set to false.
//
// Create a new gabby object using the Person constructor. She should have a job of "student" and her married property should be true.

var james = {
    // add properties to this object!
    job: "programmer",
    married: false

};

function Person(job, married) {
    this.job = job;
    this.married = married;
}

// create a "gabby" object using the Person constructor!

var gabby = new Person("student", true);

//
// Literally Speaking
// In the last exercise, we added methods to objects via constructor notation. We can also add methods to objects in literal notation:
//
// var someObj = {
//
// aProperty: value,
// someMethod: function(some, params) { }
//
// };
// When we call someObj.someMethod(some, values);, the code between the curly brackets { } will run.
//
// Note here we see a method that takes parameters. Methods defined in both constructors and literal notation can take parameters, just like normal functions.
//
// Instructions
// Take a look at the partially-defined james object. Complete the speak method such that the last two lines in the editor will cause "Hello, I am feeling great" and "Hello, I am feeling just okay" to be printed to the console.

var james = {
    job: "programmer",
    married: false,
    speak: function(mood) {
        console.log("Hello, I am feeling " + mood);
    }
};

james.speak("great");
james.speak("just okay");
