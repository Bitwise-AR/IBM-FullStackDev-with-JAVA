// Nested if-else

let person = "admin";
let loggedIn = false;
let payment = "yes";

if (person == "admin") {
  console.log("inside admin block");
  if (loggedIn == true) {
    console.log("proceed to product, cart and other pages");
  } else {
    console.log("Please log in first.");
  }
} else {
  console.log("inside user block");
  if (loggedIn == true) {
    console.log("proceed to product, cart and other pages");
  } else {
    console.log("Please log in first.");
  }
}

// let payment = "yes";

if (payment == "yes") {
  if (mode == "cash") {
    console.log("paying using cash");
  } else {
    console.log("using cod");
  }
} else {
  console.log("payment is not doing");
}
