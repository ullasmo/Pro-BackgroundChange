// const body = document.getElementById("body");
// body.style.backgroundColor = "gray";
function hexCode() {
  const normalNum = "0123456789ABCDEF";
  let hexNum = "";
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 16);
    hexNum += normalNum[randomNum];
  }
  return `#${hexNum}`;
}
console.log(hexCode());
const body = document.getElementById("body");
const start = document.getElementById("start");
const end = document.getElementById("end");

let changes;

start.addEventListener("click", () => {
  changes = setInterval(function () {
    body.style.backgroundColor = hexCode();
  }, 1000);
});
end.addEventListener("click", () => {
  clearInterval(changes);
});
