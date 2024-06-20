// let exit = false;
// let i = 0;

// do{
//     console.log("Inside do loop "+i );
//     i = i+1;
//     // i becomes 1

//     if(i>=0){
//         exit = true;
//     }
// }while(exit == false);

// console.log(i);
// console.log(exit);

let count = 3;
let password = "acd";

do {
  console.log("Enter your password");
  count = count - 1;
  console.log("Wrong password, you have left with " + count + " attempts");
  if (count == 0) {
    console.log("Your account has been blocked for one day");
    break;
  }
  if (password == "abcd") {
    console.log("login successful");
    break;
  }
} while (count >= 0);
