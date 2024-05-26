function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value;
    if (message.trim() === "") return;

    addMessage(message, "user-message");

    // Simple bot response logic
    const botResponse = getBotResponse(message);
    setTimeout(() => {
        addMessage(botResponse, "bot-message");
    }, 500);

    userInput.value = "";
}

function addMessage(message, className) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", className);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    // Simple responses for demonstration
    if (message.toLowerCase().includes("hello")) {
        return "Hi there!";
    } else if (message.toLowerCase().includes("how are you")) {
        return "I'm just a bot, but I'm doing great!";
    } else if (message.toLowerCase().includes("bye")) {
        return "Goodbye!";
    } else {
        return "I didn't understand that. Can you rephrase?";
    }
}
