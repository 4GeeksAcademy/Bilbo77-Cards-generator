import "bootstrap";
import "./style.css";

window.onload = () => {
  document.getElementById('randomNumber').innerHTML = theNumbers();
  document.querySelector("#suitsHTML1").innerHTML = theSuits();
  document.querySelector("#suitsHTML2").innerHTML = document.querySelector("#suitsHTML1").innerHTML;
};
    let theNumbers = () => {
    let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
    return randomNumbers;
   };
    let theSuits =  () => {
    let suits = ["&#9829;", "&#9830;", "&#9824;", "&#9827;"];
    let randomSuits = suits[Math.floor(Math.random() * suits.length)];
    return randomSuits === "&#9829;" || randomSuits ==="&#9830;" ? `<span style="color: red;">${randomSuits}</span>`: randomSuits;
  };
    setInterval(() => {
    document.getElementById('randomNumber').innerHTML = theNumbers();
    document.querySelector("#suitsHTML1").innerHTML = theSuits();
    document.querySelector("#suitsHTML2").innerHTML = document.querySelector("#suitsHTML1").innerHTML;
  }, 1200);  
  document.querySelector("#btn-newCard").addEventListener("click", () => window.onload());

  /* Para lo de los colores había hecho esto, pero se puede resumir en una línea así que mucho mejor (return randomSuits)
  
    if (randomSuits === "&#9829;"){
      return `<span style = "color: red;">${randomSuits}</span>`;
    } else if (randomSuits === "&#9830;") {
      return `<span style = "color: red;">${randomSuits}</span>`;
    }else {
    return randomSuits; */