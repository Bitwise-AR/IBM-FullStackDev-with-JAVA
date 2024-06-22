let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let brr = arr.filter(i => i%2==0);

// console.log(arr);
// console.log(brr);

// arr.filter(i => i%2==0).forEach(Element=> {
//     console.log(Element)
// })

arr = [1, 2, 3, 4, 5, 6, 5, 8, 4, 10];
let index1 = arr.indexOf(5); // first matching value
let index2 = arr.lastIndexOf(4); // last matching value

console.log(index1 + " " + index2);
1, 2, 3, 4, 5;
let sub_arr = arr.slice(1, 4);
sub_arr = arr.slice(4, 4);
console.log(sub_arr);
