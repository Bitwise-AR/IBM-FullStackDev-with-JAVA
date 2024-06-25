let i = 0;

let task = () => {
  i++;

  document.getElementById("show").innerHTML = i;

  let inp_reset = document.getElementById("reset").value;

  // the deafult value in input with type as number is 0
  if (inp_reset == -1) i = 0;
  if (inp_reset == 1) clearInterval(interval);

  // // if my user press rest Button, then make i=0 again.
  // if my user press submit button then time will stop.
};

let interval = setInterval(task, 500);
