// we don't have anything to print in the same line in js.
// System.out.print() - same line printing
// System.out.println() - different line printing

let name = "Kashish Bansal";
// indexing is something in arrays . 0
// i - 0 to 9

// string concatenation  means adding into same string

let str = "";

for (let i = 0; i < name.length; i = i + 1) {
  if (i > 5 && i < 8) break;
  str = str + name[i];
  console.log(str);
}

// str = ""
// "K"  - str = "" + "K" = "K"
// "K" + "a" = "Ka"
