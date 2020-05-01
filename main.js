let counter = document.getElementById("counter-id");
let message = document.getElementById("message");

counter.addEventListener("change", () => {
  message.textContent = counter.value;

  if (message.textContent <= -1) {
    message.setAttribute("class", "remove");
  } else {
    message.removeAttribute("class", "remove");
  }
});
