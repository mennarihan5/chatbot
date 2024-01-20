let container = document.querySelector(".main-container");
let userInput = document.getElementById("user-input");
let iconUp = document.querySelector(".up-down-icon-up");
let iconDown = document.querySelector(".up-down-icon-down");
let messagesBody = document.querySelector(".chatbox-msgs");
let chatHeader = document.querySelector(".chatbox-header");
let showIcon = document.querySelector(".icon");

// BOT WELCOME MESSAGE
function displayBotMsg(message) {
    messagesBody.innerHTML += `<div class="chatbox-bot-msg-wrapper">
    <div class="chatbox-bot-img">
    <img src="./images/Frame 31291 (1).png" alt="">
    </div>
    <div class="chatbox-bot-msg">
    <p class="chatbox-bot-msg-txt">${message}</p>
    </div>
    </div>`   
}

setTimeout(() => {
    displayBotMsg("👋 Hi there! How can I help?");
}, 950);

// GET USER INPUT ON PRESSING ENTER & CLEARING IT
userInput.addEventListener("keypress", handleUserInput);

// HANDLE USER INPUT FUNCTION
function handleUserInput(event) {
    if (event.key === "Enter") {
         // DISPLAY USER INPUT VALUE
         let inputValue = userInput.value.toLowerCase();
         let userMsg = document.createElement("div");
         userMsg.classList.add("user-msg");
         messagesBody.appendChild(userMsg);
         userMsg.innerText = inputValue;

        // DISPLAY BOT REPLY
        if (connectHuman.some(el => inputValue.includes(el))) {
            displayBotMsg("Let me connect you to a customer support agent shortly...");

            // CONNECT USER WITH HANNAH
            setTimeout(() => {
            messagesBody.innerHTML +=` <div class="chatbox-hannah-msg-wrapper">
            <div class="chatbox-hannah-img">
                <img src="./images/hannah.png" alt="">
            </div>
            <div class="chatbox-hannah-msg-txt-wrapper">
                <p class="chatbox-hannah-msg-txt">Hi there! I’m Hannah. <br>
                How can I help you?</p>
            </div>
            </div>`
            },2000)

        } else if (inputValue in botMessages) {
            let botMsg = botMessages[inputValue];
            displayBotMsg(botMsg);
        } else {
            displayBotMsg("Please enter something else...");
        }
        
        // CHANGE HEADER IMAGE AND NAME
        function changeAgent() {
            if (connectHuman.some((el) => inputValue.includes(el))) {
                chatHeader.innerHTML = `<div class="header-left-icon">
                <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div class="header-agent-img hannah">
                    <img src="./images/hannah.png" alt="">
                </div>
                <div class="header-agent-name-wrapper-hannah">
                <p class="header-agent-name">Hannah</p>
                <p class="header-agent-status">Active</p>
                </div>`
                console.log(userInput.value)
            } else {
                chatHeader.innerHTML = `<div class="header-left-icon">
                <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div class="header-agent-img bot">
                    <img src="./images/Frame 31291 (1).png" alt="">
                </div>
                <div class="header-agent-name-wrapper-bot">
                    <p class="header-agent-name">Bot</p>
                    <p class="header-agent-status">Active</p>
                </div>`
            }
        }

    // CLEAR INPUT VALUE 
    userInput.value = "";

    // CHANGE AGENT AFTER 2S
    setTimeout(() => {
        changeAgent();
    }, 2000);

    }
}

// CLEARING USER INPUT ON RELOAD
window.onload = clearInput;

function clearInput() {
    userInput.value = "";
}

// SHOW CHATBOX
iconUp.addEventListener("click", () => {
    container.style.display = container.style.display === "none" ? "block" : "none";
    iconUp.style.display = iconUp.style.display === "block" ? "none" : "block";
    iconDown.style.display = iconDown.style.display === "none" ? "block" : "none";
}
);

// HIDE CHATBOX
iconDown.addEventListener("click", () => {
    container.style.display = container.style.display === "block" ? "none" : "block";
    iconDown.style.display = iconDown.style.display === "none" ? "block" : "none";
    iconUp.style.display = iconUp.style.display === "none" ? "block" : "none";  
}
);











