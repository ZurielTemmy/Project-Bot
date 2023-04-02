// Define possible chatbot responses
const responses = {
    "hi": "Hello!",
    "how are you": "I'm doing well, thanks for asking!",
    "what's your name": "Hello, I'm Boltes Chatbot, what are you getting from us today ?",
    "sales and discounts": "We currently have a sale going on for Easter. Would you like to check them out ?",
    "store location": "We have 2 physical store locations. Let me provide you with the address and store hours for the location nearest to you",
    "i need your address": "Sure ! We have 2 physical store locations. Let me provide you with the address and store hours for the location nearest to you",
    "style recommendations": "Do you have an occasion ? we can use this reply in recommending a style for you !",
    "arrivals?": "We have a variety of new arrivals for women's clothing, including dresses, tops, pants, and skirts. Would you like me to show you some of the latest styles?",
    "how long will it take for an order to arrive?": "Our standard shipping usually takes 5-7 business days, depending on oyur location too",
    "can I return an item": "It depends. but, yes, we have a flexible return policy.",
    "do you make ammendments ?": "No, we dont.",
    "i haven't received my order yet": "Oh, apologies. Please send in your track number so we can work on this for",
    "i need a dress": "Alright ! what kind of dress are you looking for ? casual, formal, native ?",
    "native": "Alright, Great ! I can send you a link to our best collections",
    "formal": "Alright, Great ! I can send you a link to our best collections",
    "casual": "Alright, Great ! I can send you a link to our best collections",
    "default": "I'm sorry, I don't understand. Can you please rephrase your question?"
    
  };
  
  // Get DOM elements
  const chatbotContainer = document.getElementById("chatbot-container");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const chatbotInput = document.getElementById("chatbot-input");
  
  // Function to generate chatbot message
  function generateChatbotMessage(userMessage) {
    // Convert user message to lowercase
    const message = userMessage.toLowerCase();
  
    // Check if message matches any responses
    if (responses[message]) {
      return responses[message];
    } else {
      return responses["default"];
    }
  }
  
  // // Function to add message to chatbot
  // function addChatbotMessage(message) {
  //   const chatbotMessage = document.createElement("div");
  //   chatbotMessage.classList.add("chatbot-message");
  //   chatbotMessage.innerHTML = message;
  //   chatbotMessages.appendChild(chatbotMessage);
  // }
  
  // // Event listener for user input
  // chatbotInput.addEventListener("keyup", function(event) {
  //   if (event.keyCode === 13) { // Enter key
  //     const userMessage = event.target.value;
  //     event.target.value = "";
  //     addChatbotMessage(userMessage);
  //     const chatbotMessage = generateChatbotMessage(userMessage);
  //     addChatbotMessage(chatbotMessage);
  //   }
  // });
  
  // // Add welcome message
  // addChatbotMessage("Hi there ! I'm Boltes Chatbot, How can I assist you ?");
  
  // Function to add message to chatbot
  function addChatbotMessage(message, sender) {
    const chatbotMessage = document.createElement("div");
    chatbotMessage.classList.add("chatbot-message");
  
    if (sender === "user") {
      chatbotMessage.classList.add("user-message");
    }
  
    chatbotMessage.innerHTML = message;
    chatbotMessages.appendChild(chatbotMessage);
  }
  
  // Event listener for user input
  chatbotInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Enter key
      const userMessage = event.target.value;
      event.target.value = "";
      addChatbotMessage(userMessage, "user");
      const chatbotMessage = generateChatbotMessage(userMessage);
      addChatbotMessage(chatbotMessage, "chatbot");
    }
  });
  
  // Add welcome message
  addChatbotMessage("Hi there ! I'm Boltes Chatbot, How can I assist you ?");
