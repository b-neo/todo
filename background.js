const body = document.querySelector("body");
const bgIdx = String(Math.floor(Math.random() * 6)+1);
console.log(bgIdx);
body.background = `./static/${bgIdx}.jpg`;
