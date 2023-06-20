//Use any online javascript compiler to runn this code//

//Start//
let num1 = parseInt(prompt("Enter any number = "));             //user is requested to enter any number.//

if (num1 > 0) {
    console.log(num1+" is a positive number!");                 //if given number is +ve, it'll print positive number.//
}
else if (num1 < 0) {
    console.log(num1+" is a negative number!");                 //if given number is -ve, it'll print negative number.//
}
if (num1 === 0) {
    console.log(num1+" is zero!");                              //if given number is 0 it'll print Zero.//
}
console.log("Type of given input is "+ "'"+typeof(num1)+"'");   //Extra: This will print data type of given number.//
//End//
