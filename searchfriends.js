var friends = {
    bill:{
        firstName: "Bill",
        lastName: "Gates",
        number: "(206) 555-5555",
        address: ['One Microsoft Way', 'Redmond', 'WA', '98052']
    },
    steve:{
        firstName: "Steve",
        lastName: "Jobs",
        number: "(206)565-6666",
        address: ['One infinite loop', 'cupertino', 'CA', '02067']
    }
};

var list = function (friends){
    for(var firstName in friends){
        console.log(firstName)
    }
};
list

function search(name) {
    for (var person in friends) {
        var found = friends[person];
        if (found.firstName === name) {
            console.log(found);
            return found;
        }
    }
}

search("Steve")
