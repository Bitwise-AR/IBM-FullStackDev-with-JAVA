// let arr = [1,2,3,4,5, true, 4.78, "Kashish"];

// // working on last side push and pop  : stack function/ methods : LIFO
// // push method returns the updated length of Array.
// // pop returns the last removed element from array
// // if we remove element from empty arrays then the value is undefined
// console.log(arr.push(["a", "b", "c"]))
// console.log(arr.pop())
// console.log(arr)

let student = ["Kashish", 24, [], {}];
// console.log(student[2].pop(), "just checking")
// // removing from empty Array.
// console.log("removing ", student)

// student[2].push(18);
// student[2].push(19);
// student[2].push(20);

// console.log(student)

// working on initial side unshift and shift
// unshift method returns the updated length of Array.
// shift returns the first removed element from array
// if we remove element from empty arrays then the value is undefined

// let arr = [1,2,3,4,5, true, 4.78, "Kashish"];

// console.log(arr.unshift("MAIT"))
// console.log(arr);

// console.log(arr.shift())
// console.log(arr);

// console.log(arr.at(4), arr.at(3) );
// console.log(arr.at(5));

let str = "Kashish bansal";

let str_arr = str.split(" ");
console.log(str_arr);

let input = "kas,hish,34,coll,ege,ma,rks";

input = input.split(",");

console.log(input);

// input = input.join("-");

// console.log(input)
input.forEach((element) => {
  // anything we can do here
  console.log(element);
});
