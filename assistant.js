(function() {
  // 1. Inject the cool modern dark-mode styles into the webpage automatically
  const style = document.createElement('style');
  style.textContent = `
    #drew-chat-window { 
      position: fixed; 
      bottom: 25px; 
      right: 25px; 
      width: 360px; 
      background: rgba(24, 26, 32, 0.95); 
      backdrop-filter: blur(10px);
      border-radius: 16px; 
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4); 
      overflow: hidden; 
      font-family: 'Segoe UI', Roboto, sans-serif; 
      z-index: 999999; 
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: all 0.3s ease;
    }
    #drew-chat-header { 
      background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%); 
      color: #0f1115; 
      padding: 16px; 
      font-weight: 700; 
      text-align: center;
      letter-spacing: 0.5px;
      font-size: 16px;
      text-transform: uppercase;
      box-shadow: 0 4px 15px rgba(0, 242, 254, 0.2);
    }
    #drew-chat-logs { 
      height: 300px; 
      padding: 16px; 
      overflow-y: auto; 
      background: #13151a; 
      border-bottom: 1px solid rgba(255, 255, 255, 0.05); 
    }
    #drew-chat-input-area { 
      display: flex; 
      padding: 12px; 
      background: #181a20;
    }
    #drew-user-box { 
      flex: 1; 
      padding: 12px; 
      background: #222630;
      border: 1px solid rgba(255, 255, 255, 0.1); 
      border-radius: 8px; 
      outline: none; 
      color: #ffffff;
      font-size: 14px;
      transition: border 0.2s;
    }
    #drew-user-box:focus {
      border: 1px solid #00f2fe;
    }
    #drew-chat-window button { 
      background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%); 
      color: #0f1115; 
      border: none; 
      padding: 0 18px; 
      margin-left: 8px; 
      border-radius: 8px; 
      cursor: pointer; 
      font-weight: 700;
      font-size: 14px;
      transition: transform 0.1s, opacity 0.2s;
    }
    #drew-chat-window button:hover {
      opacity: 0.9;
    }
    #drew-chat-window button:active {
      transform: scale(0.95);
    }
    .drew-msg { 
      margin-bottom: 12px; 
      padding: 10px 14px; 
      border-radius: 12px; 
      max-width: 75%; 
      font-size: 14px; 
      line-height: 1.5; 
    }
    .drew-user { 
      background: linear-gradient(135deg, #7f00ff 0%, #e100ff 100%); 
      color: white; 
      margin-left: auto; 
      text-align: right; 
      box-shadow: 0 4px 12px rgba(225, 0, 255, 0.15);
    }
    .drew-ai { 
      background: #222630; 
      color: #e2e8f0; 
      margin-right: auto; 
      text-align: left; 
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
  `;
  document.head.appendChild(style);

  // 2. Create the visual chat window layout on the screen
  const chatWin = document.createElement('div');
  chatWin.id = 'drew-chat-window';
  chatWin.innerHTML = `
    <div id="drew-chat-header">⚡ Kelly AI Assistant</div>
    <div id="drew-chat-logs"></div>
    <div id="drew-chat-input-area">
      <input type="text" id="drew-user-box" placeholder="Ask Kelly a question...">
      <button id="drew-send-btn">Send</button>
    </div>
  `;
  document.body.appendChild(chatWin);

  // 3. Setup the custom local brain logic
  const inputEl = document.getElementById('drew-user-box');
  const logsEl = document.getElementById('drew-chat-logs');
  const btnEl = document.getElementById('drew-send-btn');

  function handleSend() {
    const text = inputEl.value.trim();
    if (!text) return;

    // Show your user text bubble
    logsEl.innerHTML += `<div class="drew-msg drew-user">${text}</div>`;
    inputEl.value = '';
    logsEl.scrollTop = logsEl.scrollHeight;

    const userMessage = text.toLowerCase();
    let aiReply = "";

    // Kelly's Brain Keyword Rules
    if (userMessage.includes("hello") || userMessage.includes("hi")) {
        aiReply = "Hi there! I'm Kelly, your custom AI assistant built by Drew Sossomon. How can I help you today?";
    } else if (userMessage.includes("who built you") || userMessage.includes("creator")) {
        aiReply = "I was built entirely by the brilliant developer Drew Sossomon using custom coding architecture!";
    } else if (userMessage.includes("website") || userMessage.includes("help")) {
        aiReply = "I can absolutely help you manage your website! Just let me know what features you want to add next.";
    } 
    
   // include questions
    
    else if (userMessage.includes("your key phrase here")) {
        aiReply = "Type Kelly's custom answer here.";
    }
    
   stop questions and answers
     
    else {
        aiReply = `I received your message: "${text}". I don't know the exact answer yet, but Drew is teaching me new rules every day!`;
    }

    // Tiny simulated delay so it feels like a real chat system
    setTimeout(() => {
      logsEl.innerHTML += `<div class="drew-msg drew-ai"><b>Kelly:</b> ${aiReply}</div>`;
      logsEl.scrollTop = logsEl.scrollHeight;
    }, 400);
  }

  // Connect the buttons and keyboard enter keys to the send logic
  btnEl.onclick = handleSend;
  inputEl.onkeypress = function(e) { if (e.key === 'Enter') handleSend(); };
})();
