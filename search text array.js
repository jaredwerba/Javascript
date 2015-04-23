/*jshint multistr:true */

text = "I like ruby more than javascript because jared it is easier to comprehend and there are less ysntax errors and easier to read Jared so annoying but it is important to making pages dyanmic. i know html css and ruby but i need to learn jared javascript";

var myName = "Jared";
var hits = [];

// Look for "J" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] == "J") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}

if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}