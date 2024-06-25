let product = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

// user["address"] -> {}
// user["address"]["geo"] -> {lat, lng}
// user.address.geo

console.log(user.address.geo);
console.log(user["address"]["geo"]);

// this way to add a new key-value;
user.job_address = "Delhi";

// changing the value of Key.
user.job_address = "Mumbai";

console.log(user);

console.log(user.address.street, user.address.city);
