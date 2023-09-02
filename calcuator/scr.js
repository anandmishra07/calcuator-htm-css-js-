let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Use 'e' as the event parameter
    console.log(e.target.textContent); // Use 'textContent' instead of 'textcontent'
    if (e.target.textContent === "c") {
      input.innerText = "  ";
    } else if (e.target.textContent === "C") {
      input.innerText = input.innerText.slice(0, -1);
    } else if (e.target.textContent === "=") {
      input.innerText = eval(input.innerText);
    } else {
      input.innerText += e.target.textContent;
    }
    input.scrollLeft = input.scrollWidth;
  });
});
