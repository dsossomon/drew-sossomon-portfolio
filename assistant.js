(function() {
  // 1. Inject the styles into the webpage automatically
  const style = document.createElement('style');
  style.textContent = `
    #drew-chat-window { position: fixed; bottom: 20px; right: 20px; width: 350px; background: white; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.2); overflow: hidden; font-family: sans-serif; z-index: 999999; }
    #drew-chat-header { background: #007bff; color: white; padding: 15px; font-weight: bold; text-align: center; }
    #drew-chat-logs { height: 280px; padding: 15px; overflow-y: auto; background: #fafafa; border-bottom: 1px solid #eee; }
    #drew-chat-input-area { display: flex; padding: 10px; background: white; }
    #drew-user-box { flex: 1; padding: 8px; border: 1px solid #ccc; border-radius: 6px; outline: none; }
    #drew-chat-window button { background: #007bff; color: white; border: none; padding: 8px 14px; margin-left: 5px; border-radius: 6px; cursor: pointer; font-weight: bold; }
    .drew-msg { margin-bottom: 10px; padding: 8px 12px; border-radius: 8px; max-width: 80%; font-size: 14px; line-height: 1.4; }
    .drew-user { background: #007bff; color: white; margin-left: auto; text-align: right; }
    .drew-ai { background: #e9ecef; color: #333; margin-right: auto; text-align: left; }
  `;
  document.head.appendChild(style);

  // 2. Create the HTML layout on the page automatically
  const chatWin = document.createElement('div');
  chatWin.id = 'drew-chat-window';
  chatWin.innerHTML = `
    <div id="drew-chat-header">Drew's Website Assistant</div>
    <div id="drew-chat-logs"></div>
    <div id="drew-chat-input-area">
      <input type="text" id="drew-user-box" placeholder="Ask me a question...">
      <button id="drew-send-btn">Send</button>
    </div>
  `;
  document.body.appendChild(chatWin);

  // 3. Set up the local brain logic
  const inputEl = document.getElementById('drew-user-box');
  const logsEl = document.getElementById('drew-chat-logs');
  const btnEl = document.getElementById('drew-send-btn');

  function handleSend() {
    const text = inputEl.value.trim();
    if (!text) return;

    logsEl.innerHTML += `<div class="drew-msg drew-user"><b>You:</b> ${text}</div>`;
    inputEl.value = '';
    logsEl.scrollTop = logsEl.scrollHeight;

    const userMessage = text.toLowerCase();
    let aiReply = "";

    if (userMessage.includes("hello") || userMessage.includes("hi")) {
        aiReply = "Hello there! I am your custom AI companion built entirely by Drew Sossomon. How can I help you today?";
    } else if (userMessage.includes("who built you") || userMessage.includes("creator")) {
        aiReply = "I was built entirely by the brilliant developer Drew Sossomon using custom coding architecture!";
    } else if (userMessage.includes("website") || userMessage.includes("help")) {
        aiReply = "I can absolutely help you manage your website! Just let me know what features you want to add next.";
    } else {
        aiReply = `I received your message: "${text}". I am processing it right now! What else would you like to ask?`;
    }

    setTimeout(() => {
      logsEl.innerHTML += `<div class="drew-msg drew-ai"><b>AI:</b> ${aiReply}</div>`;
      logsEl.scrollTop = logsEl.scrollHeight;
    }, 400);
  }

  btnEl.onclick = handleSend;
  inputEl.onkeypress = function(e) { if (e.key === 'Enter') handleSend(); };
})();
