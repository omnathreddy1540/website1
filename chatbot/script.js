const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const chatBody = document.getElementById('chat-body');

// Predefined responses for the chatbot
const responses = {
    "hello": "Hi there! How can I assist you today?",
    "how are you": "I'm just a bot, but I'm here to help!",
    "bye": "Goodbye! Have a great day!",
    "default": "I'm sorry, I didn't understand that. Can you rephrase?"
};

// Function to add messages to the chat body
function addMessage(text, sender) {
    const messageElement = document.createElement('div');
    messageElement.textContent = text;
    messageElement.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
}
function goBack() {
    window.history.back();
  }
  
// Event listener for the send button
sendButton.addEventListener('click', () => {
    const userMessage = messageInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, 'user');
        generateReply(userMessage.toLowerCase());
        messageInput.value = '';
    }
});

// Function to generate a reply from the bot
function generateReply(userMessage) {
    const reply = responses[userMessage] || responses["default"];
    setTimeout(() => addMessage(reply, 'bot'), 1000); // Simulate typing delay
}
