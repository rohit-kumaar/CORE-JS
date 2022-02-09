let counter = 1;

setInterval(() => {
  counter++;
  if (counter === 6) {
    counter = 0;
  } else {
    document.getElementById("image").src = `images/pexels-irina-iriser-${counter}.jpg`;
  }
}, 1000);


