let x = 10;
// output is always in the form of boolean means meither true or false
if (x > 5) {
  x = 20;
  console.log("I am in the if block");

  document.write("x is now " + x);
  document.write("<h1>I am in web page</h1>");
  // inside html , i have to write.
}

if (x > 20) {
  console.log(x);
} else {
  console.log("myt x is " + x);
  document.write("myt x is " + x);
}

let person = "admin";
// == -> comparing both sides
if (person == "user") {
  console.log("I am user and going to login");
} else {
  console.log("I am not user and going to login");
}

// === -> used for comparing but data types also
// x is number
if (x === "20") console.log(x + " in if part");
else console.log(x + " in else");

// =
// ==  - comparing with out data type
// != - not equal to without data type
// === - comparing with data type
// !=== means not equal with data types

if (x === 20) console.log(x + " in if part");
else console.log(x + " in else");

const pi = 3.14;

// if( pi + 2 < 5){
//     console.log("pi+2 is lesser than 5.")
// }else if(pi +2 == 5.14) {
//     console.log("pi+2 is not lesser than 5.")
// }

if (pi >= 3) {
  console.log("pi+2 is greater or equal than 5.");
} else if (pi == 3.14) {
  console.log("pi+2 is equal to 3.14.");
}

let marks = 75;

if (marks > 90) console.log("Above 90");
else if (marks > 80) console.log("Above 80");
else if (marks < 70) console.log("below 70");

console.log(x);

if (x + 10 == 30 && x + 30 != 40) {
  console.log(x);
  // x is 20 or 30
}
