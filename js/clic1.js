const sectElement = document.createElement("section");
const spanCrete = document.createElement("span");
const TeslaButton = document.querySelector("[data-Teslabutton]");
const TeslaButtonUpdete = document.querySelector("[data-Teslabutton2]");
const Teslaimg = document.querySelector("[data-Teslaimg]");
const titleText = document.querySelector("[data-textTitle]");
let cliclBank = 0;
let numberClick = 1;
spanCrete.textContent = cliclBank;


let levl = 0;


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
    cliclBank += numberClick;
    spanCrete.textContent = cliclBank;
    

}

function toTeslaButtonUpdeteClick() {

  if (cliclBank >= 10 && levl < 3) {
    TeslaButtonUpdete.classList.remove("noSellUpd")
    TeslaButtonUpdete.classList.add("yesSellUpd")

    TeslaButtonUpdete.textContent = "Куплено"

    levl += 5;
    cliclBank -= 10;
  spanCrete.textContent = cliclBank;
  console.log(cliclBank);
  Teslaimg.src = "./img/TeslaUpdete1.jpg";

  } else if (cliclBank < 10 && levl < 3) {
    titleText.textContent = `Вам не вистачає ${10 - cliclBank} $`

  } else if (levl > 3) {
    titleText.textContent = `Ви вже купили цей абгрейт`


  } else {
    console.log("ERROR");
  }

  
  // &&  Teslaimg.src === "./img/TeslaUpdete1.jpg"

 

}













