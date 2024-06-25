// function checking2 (num) {
//     console.log("printing");
//     return true;
// }

// whenever we have to create something, we have to use let, var and const

// let checking2 =  (num) => {
//     console.log("printing");
//     return true;
// }

// checking2(8);

// function countVowels (str) {
//     let count = 0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]=="a" || str[i]=='e' || str[i]=='i' || str[i]=='u' || str[i]=='o')
//             count++;
//     }
//     return count;
// }

let countVowels = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "u" ||
      str[i] == "o"
    )
      count++;
  }
  return count;
};

console.log("The vowels count here is", countVowels("aeoiu"));
