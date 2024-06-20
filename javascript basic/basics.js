function CheckingScope() {
  if (true) {
    let a = 10;
    var b = 20;

    console.log("a is " + a);
    console.log("b is " + b);

    if (true) {
      console.log("a1 is " + a);
      console.log("b1 is " + b);
    }
  }

  console.log("b2 is " + b);
  console.log("a2 is " + a);
}

CheckingScope();

// they will use let, var and const to make function also

// const x = 10;
// let a = 10;

// console.log(a)
// console.log(x)

// a = 100;
// // x = 100; I am trying the value
// console.log(a);
// console.log(x);

const PI = 3.14;

console.log(2 * PI * 4);
