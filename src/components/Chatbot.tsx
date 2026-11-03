import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useState } from "react";

const whatsappNumber = "8801537662683";

const quickMessages = [
  "Hi Sanwar, I would like to discuss an AI/ML collaboration.",
  "Hi Sanwar, I saw your medical AI research and want to know more.",
  "Hi Sanwar, I am interested in your web development work.",
  "Hi Sanwar, I want to talk about a research or publication opportunity.",
  "Hi Sanwar, I would like to connect about a professional opportunity.",
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(quickMessages[0]);
  const [customMessage, setCustomMessage] = useState("");

  const outgoingMessage = customMessage.trim() || selectedMessage;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(outgoingMessage)}`;

  return (
    <aside className={`premium-chatbot${isOpen ? " open" : ""}`} aria-label="WhatsApp chatbot">
      <button className="chatbot-toggle" type="button" onClick={() => setIsOpen((current) => !current)} aria-expanded={isOpen} aria-label={isOpen ? "Close chatbot" : "Open chatbot"}>
        {isOpen ? <X /> : <MessageCircle />}
        <span>Chat</span>
      </button>

      <div className="chatbot-panel" aria-hidden={!isOpen}>
        <div className="chatbot-header">
          <span><Sparkles /></span>
          <div>
            <strong>Service Center bot</strong>
            <small>Premium WhatsApp connect</small>
          </div>
        </div>

        <div className="chatbot-body">
          <div className="chatbot-message bot">
            Hello, I can help you start a focused conversation with Sanwar about research, AI, development, or professional opportunities.
          </div>

          <div className="chatbot-suggestions" aria-label="Suggested messages">
            {quickMessages.map((message) => (
              <button className={selectedMessage === message && !customMessage.trim() ? "active" : ""} type="button" key={message} onClick={() => { setSelectedMessage(message); setCustomMessage(""); }}>
                {message}
              </button>
            ))}
          </div>

          <label className="chatbot-compose">
            <span>Write your message</span>
            <textarea value={customMessage} onChange={(event) => setCustomMessage(event.target.value)} placeholder="Type your message here..." rows={3} />
          </label>

          <div className="chatbot-message user">{outgoingMessage}</div>
        </div>

        <a className="chatbot-send" href={whatsappUrl} target="_blank" rel="noreferrer">
          Continue on WhatsApp <Send />
        </a>
      </div>
    </aside>
  );
}
