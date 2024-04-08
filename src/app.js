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
    if (randomSuits === "&#9829;"){
      return `<span style = "color: red;">${randomSuits}</span>`;
    } else if (randomSuits === "&#9830;") {
      return `<span style = "color: red;">${randomSuits}</span>`;
    }else {
    return randomSuits;
  }
  };

  // Quería hacerlo con un operador ternario (y literal template) pero no he encontrado la manera de ponerle 2 condiciones,
  // he intentado con 
  // return randomSuits === "&#9829;" || "&#9830;" ? '<span style = "color: red;">' + randomSuits + '</span>' : randomSuits;
  // pero salen todos los naipes rojos, también he probado con 
  // return randomSuits === "&#9829;"  ? '<span style = "color: red;">' + randomSuits + '</span>' : "&#9830;" ? '<span style = "color: red;">' + randomSuits + '</span>'randomSuits : randomSuits;
  // seguiré investigando..

    

  