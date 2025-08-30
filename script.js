// document.getElementById("btn-call").addEventListener("click", function () {

// });
const cartbtns = document.getElementsByClassName("heart");

for (let cartbtn of cartbtns) {
  cartbtn.addEventListener("click", function () {
    const heartCount = document.getElementById("heart-count").innerText;
    const currentCount = Number(heartCount) + 1;
    document.getElementById("heart-count").innerText = currentCount;
  });
}
const copybtns = document.getElementsByClassName("btn-copy");

for (let copybtn of copybtns) {
  copybtn.addEventListener("click", function () {
    const number = copybtn.parentNode.parentNode.children[3].innerText;
    const serviceNumber = copybtn.parentNode.parentNode.children[3];
    navigator.clipboard
      .writeText(serviceNumber.textContent)
      .then(() => {
        // Step 4: Optional: show a confirmation message
        alert(`Copy number ${number}`);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });

    const copyCount = document.getElementById("copy-count").innerText;
    const currentCount = Number(copyCount) + 1;
    document.getElementById("copy-count").innerText = currentCount;
  });
}

// for (let copybtn of copybtns) {
//   copybtn.addEventListener("click", () => {
//     const number =
//     // Step 3: Copy the text to the clipboard
//     navigator.clipboard
//       .writeText(number.textContent)
//       .then(() => {
//         // Step 4: Optional: show a confirmation message
//         alert("Text copied to clipboard!");
//       })
//       .catch((err) => {
//         console.error("Failed to copy text: ", err);
//       });
//   });
// }

const callbtns = document.getElementsByClassName("btn-call");

for (let callbtn of callbtns) {
  callbtn.addEventListener("click", function () {
    const title = callbtn.parentNode.parentNode.children[2].innerText;
    const number = callbtn.parentNode.parentNode.children[3].innerText;
    const callCoin = document.getElementById("coin-count").innerText;

    const currentCoin = Number(callCoin) - 20;
    if (currentCoin < 0) {
      alert("❌Insufficient Coin");
      return;
    }

    document.getElementById("coin-count").innerText = currentCoin;
    alert(`📞calling ${title}${number}`);
    const date = new Date().toLocaleTimeString();
    const heading = callbtn.parentNode.parentNode.children[1].innerText;
    const cartHistory = document.getElementById("cart-history");
    const addHistory = document.createElement("div");

    addHistory.innerHTML = `<div class="bg-[#fafafa] m-5 p-1 flex justify-between items-center">
        <div><h2 class="font-semibold text-sm hind-font mt-1">
          ${heading}
        </h2>
        <p class="text-gray-500">${number}</p></div>
        <div>  <span>${date}</span></div>
      </div>`;
    cartHistory.append(addHistory);
  });
}

document.getElementById("clear").addEventListener("click", function () {
  const cartHistory = document.getElementById("cart-history");
  cartHistory = "";
});
