const body = document.querySelector("body");
const bgIdx = String(Math.floor(Math.random() * 6)+1);
body.background = `./static/${bgIdx}.jpg`;
