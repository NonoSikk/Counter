const counterElement = document.querySelector(".counter");
const button = document.querySelector("button");
const main = document.querySelector("main");
const body = document.querySelector("body");

let count = 0;

main.addEventListener("click", function () {
  count++;
  if (count > 100) {
    button.click();
  } else {
    main.style.backgroundImage = `linear-gradient(to right, dodgerblue ${count}%, transparent 0)`;
    counterElement.innerText = count;
    if (count === 100) {
      counterElement.innerText = "You got no hobbies";
    }
  }
});
button.addEventListener("click", function () {
  counterElement.innerText = 0;
  count = 0;
  main.style.backgroundImage = `linear-gradient(to right, dodgerblue ${count}%, transparent 0)`;
});

body.addEventListener("keyup", function (event) {
  if (event.key === " " || event.key === "Enter") main.click();

  console.log(event.key);
});
