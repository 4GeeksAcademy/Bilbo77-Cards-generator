import "bootstrap";
import "./style.css";

window.onload = () => {
  let generateRandomNumber = () => {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    let suits = ["&heart", "&diamond", "&spade", "&club"];

    let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
    let singleSuit = suits[Math.floor(Math.random() * suits.length)];
  };
  document.querySelector("#randomNumber").innerHTML = singleNumber;
};
