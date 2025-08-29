// // console.log("baa baa black sheep");

const cardBtns = document.getElementsByClassName("cardbtn");
console.log(cardBtns);
for (let cardBtn of cardBtns) {
  cardBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const nationalNumber =
      cardBtn.parentNode.parentNode.childNodes[3].childNodes[5].innerText;
    // console.log(nationalNumber);
    alert(nationalNumber + "call is progresing");
  });
}

document
  .getElementById("love-icon")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("have you any wool");
    const loveNumber = document.getElementById("love-number").innerText;

    const loveIcon = document.getElementById("love-icon").innerText;
    const totalLoveIcon = Number(loveNumber) + Number(loveIcon);
    console.log("hy", totalLoveIcon);
    document.getElementById("love-number").innerText = totalLoveIcon + 1;
  });

document
  .getElementById("button-copy")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("twinkle twinkl");
    const copyValue = document.getElementById("copy-value").innerText;
    const copyBbutton = document.getElementById("button-copy").innerText;
    alert(copyBbutton + "text copied");
    document.getElementById("copy-value").innerText = parseInt(copyValue) + 1;
  });

const callHistory = [];
// call button click //

document.getElementById("call-button").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log("yes sir yes sir");

  const nationalNumber = document.getElementById("national-number").innerText;
  console.log("national", nationalNumber);
  alert(nationalNumber + "call is progresing");

  const loveCoins = document.getElementById("love-coin").innerText;
  console.log("inner text", loveCoins);
  document.getElementById("love-coin").innerText = parseInt(loveCoins) - 20;
  console.log("three bags full");
  if (loveCoins < 20) {
    alert("you have not enough coins to make call,");
    return;
  }

  const data = {
    name: "National Emergency number",
    date: new Date().toLocaleTimeString(),
  };
  callHistory.push(data);
  // console.log(callHistory);
  const callHistoryBoxes = document.getElementById("history-box");
  // clear history//

  console.log(clearHistory, "baby");

  // loading history//
  for (const data of callHistory) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="flex justify-between items-center">
       <div>
       <h3>${data.name}</h3>
        <p>999</p>
        </div>
        <p>${data.date}</p>
      </div>`;
    clearHistory.appendChild(div);
    console.log(callHistoryBoxes, "one for my dane");
  }
});
const clearHistory = document.getElementById("clear-history");
console.log(clearHistory, "baby");
document
  .getElementById("clear-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("one for my master");
    const clear = document.getElementById("clear-history");

    clear.innerText = "";
  });
