// re-assignment, redeclaration
// scope must be initialized

// let const and var (declaring variables in js)

var student = "Adrian";
student = "Adrian"; // reassigned (yes)

//printing out the value of the student on the console.
console.log('var: ', student);

let course = "HTML";
course = "CSS"; // reassigned (?)
console.log('let: ', course);

const university = "Strathmore University";
university = "USIU"; // reassigned (no)
console.log('const: ', university);

//re declaration
 var student = "Adrian";
 console.log('var: ', university);

 //let course = "rust programming"
 console.log('let: ', university);

 if (true) {
    var age = 20;
    let grade = "A";
    const subject = "chemistry";

    console.log('----Outside the block----');
    console.log('var: ', age);
    //console.log('let: ', grade);
    //console.log('const: ', subject);
 }