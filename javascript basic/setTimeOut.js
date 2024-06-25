// function task (){
//     let i=0;
//     console.log("After waiting")
//     document.write("After waited for 5 seconds");
//     console.log("i is now :",i)
// }

// industry standard
let task = () => {
  let i = 0;
  console.log("After waiting");
  document.write("After waited for 5 seconds");
  console.log("i is now :", i);
};

setTimeout(task, 10000);
