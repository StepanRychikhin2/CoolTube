const sectElement = document.createElement("section");
const spanCrete = document.createElement("span");
const TeslaButton = document.querySelector("[data-Teslabutton]");
const Teslaimg = document.querySelector("[data-Teslaimg]");
let cliclBank = 1;
spanCrete.textContent = cliclBank;


sectElement.prepend(spanCrete);
document.body.append(sectElement);



spanCrete.classList = "Tesla-span";

console.log(TeslaButton)
console.log(Teslaimg)

TeslaButton.addEventListener("click", incrementKeypressCounter);



function reset() {
    cliclBank = 1;
  Teslaimg.innerHTML = "";
}

function incrementKeypressCounter() {
    cliclBank += 1;
    console.log("aaa");
    console.log(cliclBank);
}


TeslaButton.addEventListener("click", () => {
    cliclBank =+  1;
    console.log("rrr");
    console.log(cliclBank);
});
console.log(cliclBank);