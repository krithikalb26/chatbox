// Get elements
const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const usernameInput = document.getElementById("username");
const messageInput = document.getElementById("message");

// Load saved messages from localStorage
const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];

// Display existing messages
messages.forEach(displayMessage);

// Handle new message submission
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const message = messageInput.value.trim();
  if (!username || !message) return;

  const newMessage = { username, message, time: new Date().toLocaleTimeString() };
  messages.push(newMessage);

  // Save to localStorage
  localStorage.setItem("chatMessages", JSON.stringify(messages));

  displayMessage(newMessage);
  messageInput.value = "";
});

// Display message in chat box
function displayMessage({ username, message, time }) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message");
  msgDiv.innerHTML = `<strong>${username}</strong> <small>${time}</small><br>${message}`;
  chatBox.appendChild(msgDiv);

  // Scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;
}
