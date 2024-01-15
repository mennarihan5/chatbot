let userInput = document.getElementById("user-input");
let iconUp = document.querySelector(".up-down-icon-up");
let iconDown = document.querySelector(".up-down-icon-down");
let messagesBody = document.querySelector(".chatbox-msgs");
let chatHeader = document.querySelector(".chatbox-header");
let showIcon = document.querySelector(".icon");




// BOT MESSAGES
const botMessages = {
    "hi": "Hi, How can I help you?",
    "hello": "Hello, How can I help you?",
    "hey": "Hey, How can I help you?",
    "good morning": "Good morning, How can I help you?",
    "good evening": "Good evening, How can I help you?",
    "good afternoon": "Good afternoon, How can I help you?",
    "how are you?": "All's good, and you?",
    "help me": "Sure, How can I help you?",
    "explain": "Sure, What would you like me to explain?",
    "i don't get it": "Sure, Let me explain again",
    "bye": "Bye, See you soon..."
}
const connectHuman = ["connect with customer support agent", "human", "i need a someone to talk to", "conect me with a human"];


// BOT WELCOME MESSAGE
setTimeout(() => {
    messagesBody.innerHTML += `<div class="chatbox-bot-msg">
    <div class="chatbox-bot-img">
        <img src="./images/Frame 31291 (1).png" alt="">
    </div>
    <p class="chatbox-bot-msg-txt">👋 Hi there! How can I help?</p>
    </div>`   
}, 950);


// GET USER INPUT ON PRESSING ENTER & CLEARING IT
userInput.addEventListener("keypress", (event) => {
    
    let inputValue = userInput.value.toLowerCase();
    if (event.key === "Enter") {
        // DISPLAY USER INPUT VALUE
        messagesBody.innerHTML += inputValue;
        // DISPLAY BOT REPLY
        if (connectHuman.some(el => inputValue.includes(el))) {
            
            messagesBody.innerHTML += `<div class="chatbox-bot-msg">
            <div class="chatbox-bot-img">
                <img src="./images/Frame 31291 (1).png" alt="">
            </div>
            <p class="chatbox-bot-msg-txt">Will connect you to a customer support agent shortly...</p>
            </div>`   

            setTimeout(() => {
            messagesBody.innerHTML +=`<div class="chatbox-hannah-msg">
            <div class="chatbox-hannah-img">
                <img src="./images/hannah.png" alt="">
            </div>
            <p class="chatbox-hannah-msg-txt">
                Hi there! I’m Hannah. <br>
                How can I help you?
            </p>
            </div>`
            },2000)

        } else if (inputValue in botMessages) {
            let botMsg = botMessages[inputValue];
     
            messagesBody.innerHTML += `<div class="chatbox-bot-msg">
            <div class="chatbox-bot-img">
                <img src="./images/Frame 31291 (1).png" alt="">
            </div>
            <p class="chatbox-bot-msg-txt">${botMsg}</p>
            </div>`

        } else {
            messagesBody.innerHTML += `<div class="chatbox-bot-msg">
            <div class="chatbox-bot-img">
                <img src="./images/Frame 31291 (1).png" alt="">
            </div>
            <p class="chatbox-bot-msg-txt">Please enter something else...</p>
            </div>`   
        }
        
        // CLEAR INPUT VALUE 
        userInput.value = "";

        // CHANGE HEADER IMAGE AND NAME
        function changeAgent() {
            if (connectHuman.some((el) => inputValue.includes(el))) {
                chatHeader.innerHTML = `<div class="header-left-icon">
                <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div class="header-agent-img">
                    <img src="./images/hannah.png" alt="">
                </div>
                <div class="header-agent-name-wrapper">
                <p class="header-agent-name">Hannah</p>
                <p class="header-agent-status">Active</p>
                </div>`
                console.log(userInput.value)
            } else {
                chatHeader.innerHTML = `<div class="header-left-icon">
                <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div class="header-agent-img">
                    <img src="./images/Frame 31291 (1).png" alt="">
                </div>
                <div class="header-agent-name-wrapper">
                    <p class="header-agent-name">Bot</p>
                    <p class="header-agent-status">Active</p>
                </div>`
            }
        }

        setTimeout(() => {
            changeAgent();
        }, 2000);

            } 
        })

// CLEARING USER INPUT ON REFRESH
window.onload = clearInput;

function clearInput() {
    userInput.value = "";
}

// SCROLL WINDOW TO UP
iconUp.addEventListener("click", () => {
    let windowHeight = window.innerHeight;

    window.scrollBy(0, windowHeight);
})

// SCROLL WINDOW DOWN
iconDown.addEventListener("click", () => {
    
    window.scrollTo(0, 0);
})

// SHOW & HIDE ICON
showIcon.addEventListener("click", () => {
    showIcon.classList.toggle("hide");
})