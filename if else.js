var isEven = function(number) {
if(number % 2 === 0) {
return true ;
} else if (isNaN(number)) {
return "The input was not a number!" ;
} else {
return false;
} 
};

isEven(10)