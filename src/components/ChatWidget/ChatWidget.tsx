'use client';
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';


export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  //const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-[400px] h-[600px] shadow-lg rounded-lg overflow-hidden relative bg-white">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-full"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/FFIMDSezBKYNABev5_S9v"
            width="100%"
            height="100%"
            className="min-h-[600px]"
            frameBorder="0"
          />
        </div>
      ) : (
        <div className="relative">
          
          <button
            onClick={() => setIsOpen(true)}
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
            className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-full shadow-lg flex items-center justify-center transition-colors"
            aria-label="Open chat"
          >
            <img 
            src="/images/mans.jpg"
            alt="Chat avatar" 
            className="w-10 h-10 object-cover rounded-full"
          />
          </button>
        </div>
      )}
    </div>
  );
      {/* {isOpen ? (
        <div className="w-[400px] h-[600px] shadow-lg rounded-lg overflow-hidden relative bg-white">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-1 right-1 p-1 hover:bg-gray-100 rounded-full"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />

          </button>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/FFIMDSezBKYNABev5_S9v"
            width="100%"
            height="100%"
            className="min-h-[600px]"
            frameBorder="0"
          />
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white p-0 rounded-full shadow-lg flex items-center justify-center transition-colors overflow-hidden"
          aria-label="Open chat"
        >
          <img 
            src="/images/mans.jpg"
            alt="Chat avatar" 
            className="w-10 h-10 object-cover rounded-full"
          />
        </button>
      )} 
    </div>
  );*/}
}

export default ChatWidget;