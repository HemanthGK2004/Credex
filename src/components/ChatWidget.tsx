import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const sampleQuestions = [
  "How do I sell my software licenses?",
  "What types of licenses do you accept?",
  "How long does the process take?",
  "Is my data secure during the transfer?"
];

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "👋 Hi there! I'm SoftSell's virtual assistant. How can I help you with selling your software licenses today?", 
      isUser: false, 
      timestamp: new Date() 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const mockResponses: Record<string, string> = {
    "how do i sell my software licenses?": 
      "Selling your software licenses with SoftSell is easy! First, fill out our contact form with details about your licenses. Our team will evaluate them and provide a valuation within 24 hours. Once you accept our offer, we'll guide you through the secure transfer process and issue payment through your preferred method.",
    
    "what types of licenses do you accept?": 
      "We accept a wide range of software licenses including Microsoft (Office, Windows, Server), Adobe (Creative Cloud, Acrobat), Oracle (Database, Middleware), SAP, Autodesk, VMware, and many more. Both perpetual and subscription licenses can be evaluated, though the value and transferability depend on the specific license terms.",
    
    "how long does the process take?": 
      "The entire process typically takes 3-7 business days. We provide valuations within 24 hours of submission, and once you accept our offer, the payment is typically processed within 3-5 business days after successful license transfer.",
    
    "is my data secure during the transfer?": 
      "Absolutely! We take security very seriously. All communications and transfers are conducted through encrypted channels. We have strict data handling protocols in place and comply with all relevant data protection regulations. Your information is only used for the purpose of facilitating the license transfer process."
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMessage = {
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate API response
    setTimeout(() => {
      const userQuestion = inputValue.toLowerCase();
      let responseText = "I don't have specific information about that, but our team can help! Please fill out our contact form, and a license specialist will get back to you within 24 hours.";
      
      // Check for matches in our mock responses
      for (const [question, answer] of Object.entries(mockResponses)) {
        if (userQuestion.includes(question) || question.includes(userQuestion)) {
          responseText = answer;
          break;
        }
      }

      const botMessage = {
        text: responseText,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const selectSampleQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg z-50 ${isOpen ? 'hidden' : 'block'}`}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </motion.button>

      {/* Chat widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden z-50 border border-gray-200 dark:border-gray-800"
          >
            {/* Chat header */}
            <div className="bg-blue-600 dark:bg-blue-700 text-white p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                  <MessageCircle size={18} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">SoftSell Assistant</h3>
                  <p className="text-xs text-blue-100">Online | Ask me anything</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat messages */}
            <div className="h-80 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-800">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isUser
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm rounded-tl-none'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className={`text-xs mt-1 ${message.isUser ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="mb-4 flex justify-start">
                  <div className="bg-white dark:bg-gray-700 rounded-lg p-3 text-gray-800 dark:text-gray-200 shadow-sm rounded-tl-none">
                    <div className="flex items-center space-x-2">
                      <Loader2 size={16} className="animate-spin" />
                      <span>Typing...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Sample questions */}
            <div className="p-3 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {sampleQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => selectSampleQuestion(question)}
                    className="text-xs bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-full px-3 py-1 text-gray-700 dark:text-gray-300 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Chat input */}
            <div className="p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSendMessage}
                disabled={inputValue.trim() === ''}
                className={`ml-2 w-10 h-10 rounded-full flex items-center justify-center ${
                  inputValue.trim() === '' 
                  ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500' 
                  : 'bg-blue-600 text-white'
                }`}
                aria-label="Send message"
              >
                <Send size={18} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;