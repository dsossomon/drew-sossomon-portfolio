<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Drew Sossomon - Scouting AI Interface</title>
  <style>
    /* Reset & Background Page Styling */
    body { 
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; 
      background: #0f1115; 
      display: flex; 
      justify-content: center; 
      padding: 40px; 
      margin: 0;
    }

    /* Master Chat Container Widget */
    #drew-chat-window { 
      position: fixed; 
      bottom: 25px; 
      right: 25px; 
      width: 380px; 
      background: rgba(24, 26, 32, 0.95); 
      backdrop-filter: blur(10px);
      border-radius: 16px; 
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4); 
      overflow: hidden; 
      z-index: 999999; 
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    /* Electric Neon Header Banner */
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

    /* Message Logs Viewport Area */
    #drew-chat-logs { 
      height: 350px; 
      padding: 16px; 
      overflow-y: auto; 
      background: #13151a; 
      border-bottom: 1px solid rgba(255, 255, 255, 0.05); 
    }

    /* Footer Input Control Bar */
    #drew-chat-input-area { 
      display: flex; 
      padding: 12px; 
      background: #181a20;
    }

    /* Text Entry Field */
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

    /* Action Trigger Button */
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

    /* Structural Text Bubble Blueprints */
    .drew-msg { 
      margin-bottom: 12px; 
      padding: 10px 14px; 
      border-radius: 12px; 
      max-width: 80%; 
      font-size: 14px; 
      line-height: 1.5; 
    }

    /* Outgoing User Layout (Vibrant Neon Gradient) */
    .drew-user { 
      background: linear-gradient(135deg, #7f00ff 0%, #e100ff 100%); 
      color: white; 
      margin-left: auto; 
      text-align: right; 
      box-shadow: 0 4px 12px rgba(225, 0, 255, 0.15);
    }

    /* Incoming AI Layout (Subtle Matte Charcoal) */
    .drew-ai { 
      background: #222630; 
      color: #e2e8f0; 
      margin-right: auto; 
      text-align: left; 
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
  </style>
</head>
<body>

  <!-- HTML Structure Layout -->
  <div id="drew-chat-window">
    <div id="drew-chat-header">⚡ Kelly AI Assistant</div>
    <div id="drew-chat-logs"></div>
    <div id="drew-chat-input-area">
      <input type="text" id="drew-user-box" placeholder="Ask Kelly about Drew's scouting profile...">
      <button id="drew-send-btn">Send</button>
    </div>
  </div>

  <!-- Client-Side System Script Logic -->
  <script>
    const inputEl = document.getElementById('drew-user-box');
    const logsEl = document.getElementById('drew-chat-logs');
    const btnEl = document.getElementById('drew-send-btn');

    // Welcome notice execution routine
    setTimeout(() => {
      logsEl.innerHTML += `<div class="drew-msg drew-ai"><b>Kelly:</b> Hi! I'm Kelly, Drew Sossomon's custom AI scouting companion. Ask me anything about his goalkeeper stats, \"Scary Save\" match footage, \"The US Wall\" nickname, or pro club compatibility matrices!</div>`;
    }, 600);

    function handleSend() {
      const text = inputEl.value.trim();
      if (!text) return;

      // Print outgoing message row
      logsEl.innerHTML += `<div class="drew-msg drew-user">${text}</div>`;
      inputEl.value = '';
      logsEl.scrollTop = logsEl.scrollHeight;

      const userMessage = text.toLowerCase().trim();
      let aiReply = "";

      // MULTI-TURN SCOUTING RECORD INTERSECTION MATRIX
      if (userMessage.includes("hello") || userMessage.includes("hi ") || userMessage == "hi") {
          aiReply = "Hi! I'm Kelly, your custom AI companion built by Drew Sossomon. What scouting data or metrics can I pull up for you today?";
      } 
      else if (userMessage.includes("who is drew") || userMessage.includes("who is drew sossomon") || userMessage == "drew") {
          aiReply = "Drew Sossomon is a competitive soccer goalkeeper from Youngsville, North Carolina, known for his elite shot-stopping and inspiring resilience. Born as a micro-preemie at 24 weeks and diagnosed with cerebral palsy (left-side hemiplegia), Drew has spent over 13 years overcoming physical challenges to play high-level soccer. He is a member of the high school graduating class of 2028, playing club soccer for Wake FC and serving as the starting varsity goalkeeper for Youngsville Academy.";
      } 
      else if (userMessage.includes("how good") || userMessage.includes("good is drew") || userMessage.includes("highlights") || userMessage.includes("metrics")) {
          aiReply = "Drew is a highly effective, resilient goalkeeper who excels at shot-stopping and back-line communication. Because cerebral palsy affects his left-side mobility, he has adapted his game with elite footwork and vocal leadership.<br><br><b>His career highlights include:</b><br>• <b>2017 Season (SWAT):</b> 200 saves, 15 clean sheets, a 0.63 Goals Against Average (GAA), and a 95.2% save percentage.<br>• <b>2022 Season (NBT Academy):</b> 120 saves, a 1.25 GAA, and a 92.3% save percentage.<br>• <b>Varsity Milestone:</b> Made history as the first and only player with a disability on the inaugural Youngsville Academy varsity men’s soccer team.<br>• <b>Offensive Threat:</b> Highly effective at distribution, once recording 9 assists in a single season directly from goalkeeper punts and throws.";
      } 
      else if (userMessage.includes("what makes drew") || userMessage.includes("great goalkeeper") || userMessage.includes("stats") || userMessage.includes("statistics")) {
          aiReply = "Drew Sossomon’s elite status as a goalkeeper is defined by several extraordinary career metrics and tactical strengths that place him in the top 0.5% of youth goalkeepers worldwide:<br><br>• <b>Unbeatable Penalty Kick Record:</b> Drew possesses a historic, flawless 20-0 record in tournament penalty shootouts, saving a perfect 60 out of 60 lifetime penalty kicks (a 100% PK save rate).<br>• <b>Elite Shot-Stopping Volume:</b> He has faced a massive 2,446 total career shots, recording 2,290 saves to maintain an outstanding lifetime club save percentage of 93.6%.<br>• <b>High-Level Ranking:</b> Prior to his 2026 knee injury, his statistical dominance ranked him as the #1 goalkeeper in his county, Top 15 in the state, and Top 25–30 nationally in the United States.<br>• <b>Extensive Game Experience:</b> He has logged 11,790 minutes in goal, giving him a level of real-game, high-pressure experience that far exceeds the average youth keeper his age.<br>• <b>Advanced Kicking & Distribution:</b> Drew serves as an immediate counter-attack threat, utilizing textbook technique with a 40° launch angle to consistently deliver long-balls past midfield with a 4-to-8-second hang time.";
      } 
      else if (userMessage.includes("professional clubs") || userMessage.includes("match") || userMessage.includes("pro clubs") || userMessage.includes("teams")) {
          aiReply = "Drew Sossomon’s tactical analytical profile shows elite compatibility with major professional clubs across major global leagues, including perfect 100% tactical style matches with several top-tier teams:<br><br>• <b>Spanish La Liga (🇪🇸):</b> 100% style match with FC Barcelona and Real Madrid, and 94% with Atlético Madrid.<br>• <b>English Premier League (🇬🇧):</b> 100% style match with Manchester United, 99% with Liverpool, 99% with Chelsea, and 97% with Manchester City.<br>• <b>Major League Soccer (🇺🇸):</b> 100% style match with home-state club Charlotte FC, as well as Inter Miami and the Seattle Sounders.";
      } 
      else if (userMessage.includes("compare to professional") || userMessage.includes("compare") || userMessage.includes("pro goalkeepers") || userMessage.includes("europe")) {
