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
    const copyCount = document.getElementById("copy-count").innerText;
    const currentCount = Number(copyCount) + 1;
    document.getElementById("copy-count").innerText = currentCount;
  });
}
const callbtns = document.getElementsByClassName("btn-call");

for (let callbtn of callbtns) {
  callbtn.addEventListener("click", function () {
    const title = callbtn.parentNode.parentNode.children[2].innerText;
    const number = callbtn.parentNode.parentNode.children[3].innerText;

    alert(`📞calling ${title}${number}`);
  });
}
