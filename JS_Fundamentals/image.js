let arr = [
  "https://i.ibb.co/vQC3zcM/download.jpg",
  "https://i.ibb.co/qyp02Qb/download-1.jpg",
  "https://i.ibb.co/sWx95YJ/images.jpg",
];

let i = 0;
let img = document.getElementById("image");
img.src = arr[2];

let task = () => {
  let img = document.getElementById("image");
  img.src = arr[i];
  i++;

  if (i == 3) i = 0;
};

setInterval(task, 2500);
