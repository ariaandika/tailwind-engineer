let three_quarter = window.innerHeight - (window.innerHeight / 4);
let half_screen = window.innerHeight / 2;
let a_quarter = (window.innerHeight / 4);

document.addEventListener("click", e => {
  let target = /** @type {HTMLButtonElement} */(e.target);

  if (target.hasAttribute("activation")) {
    target.disabled = true;
    setTimeout(() => {
      target.disabled = false;
    },2000)
  }

  if (target.hasAttribute("vault")) {
    let vault = document.querySelector("#" + target.getAttribute("vault"));
    vault.classList.toggle("vault-open");
    vault.scrollTo({ top: three_quarter, behavior: "instant" })
  }

})

document.addEventListener("keydown", e => {
  let key = e.key;

  if (key == "Escape") {
    closeAllVault();
  }

})

function closeAllVault() {
  document.querySelectorAll(".vault-open").forEach(e => {
    e.classList.toggle("vault-open")
  })
}

document.addEventListener("DOMContentLoaded", () => {
  let vault = document.querySelector(".vault");
  onVault(vault);
})

function onVault(vault) {
  vault.addEventListener("scrollend", () => {
    let scroll = vault.scrollTop;

    if (scroll < a_quarter) {
      closeAllVault()
    } else if (scroll < three_quarter) {
      vault.scrollTo({ top: three_quarter })
    }
  })
}


