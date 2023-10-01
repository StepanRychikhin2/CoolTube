const sectElement = document.createElement("section");
const spanCrete = document.createElement("span");
const TeslaButton = document.querySelector("[data-Teslabutton]");
const TeslaButtonUpdete = document.querySelector("[data-Teslabutton2]");
const Teslaimg = document.querySelector("[data-Teslaimg]");
let cliclBank = 0;
spanCrete.textContent = cliclBank;


sectElement.prepend(spanCrete);
document.body.append(sectElement);



spanCrete.classList = "Tesla-span";

console.log(TeslaButton)
console.log(Teslaimg)

TeslaButton.addEventListener("click", toTeslaButtonClick);
TeslaButtonUpdete.addEventListener("click", toTeslaButtonUpdeteClick);


function reset() {
    cliclBank = 1;
  Teslaimg.innerHTML = "";
}

function toTeslaButtonClick() {
    cliclBank += 1;
    spanCrete.textContent = cliclBank;
}

function toTeslaButtonUpdeteClick() {

  if (cliclBank >= 10) {
    cliclBank -= 10;
  console.log("eee");
  spanCrete.textContent = cliclBank;
  console.log(cliclBank);
  Teslaimg.src = "./img/TeslaUpdete1.jpg";
  } else {
    alert(`Вам не вичтачає ${10 - cliclBank} $`);
  }


}













