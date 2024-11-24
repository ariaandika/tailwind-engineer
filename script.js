

document.addEventListener("click", e => {
  let target = /** @type {HTMLButtonElement} */(e.target);

  if (target.hasAttribute("activation")) {
    target.disabled = true;
    setTimeout(() => {
      target.disabled = false;
    },2000)
  }


})




