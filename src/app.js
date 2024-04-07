import "bootstrap";
import "./style.css";

window.onload = () => {
  document.getElementById('randomNumber').innerHTML = theNumbers();
  document.querySelector("#suitsHTML1").innerHTML = theSuits();
  document.querySelector("#suitsHTML2").innerHTML = theSuits();
};
    let theNumbers = () => {
    let numbers = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
    let randomNumbers = numbers[Math.floor(Math.random() * numbers.length)];
    return randomNumbers;
  };

    let theSuits =  () => {
    let suits = ["&#9829;", "&#9830;", "&#9824;", "&#9827;"];
    let randomSuits = suits[Math.floor(Math.random() * suits.length)];
    return randomSuits;
  };