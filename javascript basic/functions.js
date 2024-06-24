// function name (inouts) {
//     // return or do not return
// }
// parameter -> dummy data / formal data
// arguments -> actual data

function checking(num) {
  return num;
}

function checking2(num) {
  console.log("printing");
  return true;
}

// let captureNum = checking("kashish");
// console.log(captureNum);
// checking2();

let captureNum = checking2(6);
console.log(captureNum);
checking2(5);
