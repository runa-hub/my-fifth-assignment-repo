const cardBtns = document.getElementsByClassName("cardbtn");
// console.log(cardBtns);
const callHistory = [];
for (let cardBtn of cardBtns) {
  cardBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const nationalTitle =
      cardBtn.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    console.log(nationalTitle);
    const nationalNumber =
      cardBtn.parentNode.parentNode.childNodes[3].childNodes[5].innerText;
    // console.log(nationalNumber);
    alert(nationalNumber + "call is progresing");
    const dateTime = new Date().toLocaleTimeString();
    const loveCoins = document.getElementById("love-coin").innerText;
    document.getElementById("love-coin").innerText = parseInt(loveCoins) - 20;
    // console.log(loveCoins, "three bags full");
    if (loveCoins < 20) {
      alert("you have not enough coins to make call,");
      return;
    }
    const callHistoryBoxes = document.getElementById("history-box");
    console.log(callHistoryBoxes, "wow");
    const data = {
      title: nationalTitle,
      number: nationalNumber,
      date: dateTime,
    };
    callHistory.push(data);
    console.log(callHistory, "pushed");

    const clearHistory = document.getElementById("clear-history");
    // clearHistory.innerText = "";
    // console.log(clearHistory, "hlw");

    for (const data of callHistory) {
      const div = document.createElement("div");
      div.innerHTML = `
          <div class="flex justify-between items-center">
           <div>
           <h3>${data.title}</h3>
            <p>${data.number}</p>
            </div>
            <p>${data.date}</p>
          </div>`;
      clearHistory.appendChild(div);
    }
  });
}
const clearHistory = document.getElementById("clear-history");
console.log(clearHistory, "hlw");
// clear button //
document
  .getElementById("clear-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("one for my master");
    // const clear = document.getElementById("clear-history");

    callHistory.length = 0;
    document.getElementById("clear-history").innerText = "";
  });
// const clearHistory = document.getElementById("clear-history");
// console.log(clearHistory, "baby");

//copy btn//

const copyBtns = document.getElementsByClassName("copybtn");
console.log("hlw world", copyBtns);
for (let copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const copyValue = document.getElementById("copy-value").innerText;
    const copyBbutton = copyBtn.parentNode.parentNode.childNodes[0].innerText;
    alert(copyBbutton + "text copied");
    document.getElementById("copy-value").innerText = parseInt(copyValue) + 1;

    console.log(copyValue);
  });
}
// love icon //
const whiteLoves = document.getElementsByClassName("white-love");
console.log(whiteLoves);
for (let whiteLove of whiteLoves) {
  whiteLove.addEventListener("click", function (love) {
    love.preventDefault();
    const loveIcon = whiteLove.parentNode.innerText;
    // console.log(loveIcon);
    const loveNumber = document.getElementById("love-number").innerText;
    document.getElementById("love-number").innerText = parseInt(loveNumber) + 1;
    console.log(loveNumber);
  });
}
