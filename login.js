const loginForm = document.querySelector("#loginForm");
const userInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
function checkData(){
    if (localStorage.getItem("name") !== null){
        loginForm.classList.add("hidden");
        greeting.classList.remove("hidden");
        greeting.innerText = `Hi ${localStorage.getItem("name")}`;
    }
    else{
        loginForm.classList.remove("hidden");
        greeting.classList.add("hidden");
    }
}

function addData(e){
    e.preventDefault();
    localStorage.setItem("name", userInput.value);
    checkData();
}

checkData();
loginForm.addEventListener("submit", addData);

