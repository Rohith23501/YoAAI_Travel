import React, { useState, useEffect, useRef } from 'react';

// Define your conversation flow here.
// Each step specifies:
// - id: Unique identifier for the step.
// - type: 'bot' (bot speaks), 'user_options' (user selects from buttons), 'user_text_input' (user types)
// - message: The text displayed by the bot for this step.
// - options: (For 'user_options' type) An array of objects with { text, value, nextStepId }.
// - nextStepId: (For 'bot' type) The ID of the next step to transition to automatically.
// - placeholder: (For 'user_text_input' type) Placeholder text for the input field.
// Special nextStepId 'END' will close the assistant.

const conversationSteps = [
  {
    id: 0,
    type: 'bot',
    message: 'Hello! I am your AI Travel Assistant. How can I assist you today?',
    nextStepId: 1, // Automatically proceeds to step 1 (user options)
  },
  {
    id: 1,
    type: 'user_options',
    message: 'Please choose an option:',
    options: [
      { text: 'Destination Recommendation', value: 'recommendation', nextStepId: 2 },
      { text: 'Compare Destinations', value: 'compare', nextStepId: 3 },
      { text: 'Tell me a Travel Fact', value: 'fact', nextStepId: 4 },
      { text: 'End Conversation', value: 'end', nextStepId: 'END' },
    ],
  },
  {
    id: 2,
    type: 'bot',
    message: 'Great! To recommend a destination, what kind of experience are you looking for? (e.g., "Relaxing beach", "Adventure sports", "Cultural immersion")',
    nextStepId: 5, // Leads to a generic text input step
  },
  {
    id: 3,
    type: 'bot',
    message: 'Comparing destinations is insightful! Please tell me which two destinations you want to compare. (e.g., "Paris vs. Rome")',
    nextStepId: 5, // Leads to a generic text input step
  },
  {
    id: 4,
    type: 'bot',
    message: 'Here\'s a fun fact: The Great Wall of China is not visible from space with the naked eye! Is there anything else?',
    nextStepId: 1, // Loops back to main options
  },
  {
    id: 5,
    type: 'user_text_input',
    message: 'Please type your response below:',
    placeholder: 'Your input...',
    nextStepId: 6, // Leads to a generic thank you
  },
  {
    id: 6,
    type: 'bot',
    message: 'Thank you for your input! I\'ve noted your request. Would you like to do anything else?',
    nextStepId: 1, // Loops back to main options
  },
];

// Helper to find a step by its ID
const getStepById = (id) => conversationSteps.find(step => step.id === id);

/**
 * ChatAssistant Component
 * This component renders a conversational chat interface.
 * It opens on click, allows for predefined conversational flow,
 * and closes when ended or clicked outside.
 */
function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false); // State to control assistant visibility
  // `messages` store the chat history (bot and user turns)
  const [messages, setMessages] = useState([]);
  // `currentStepId` tracks where we are in the conversation flow
  const [currentStepId, setCurrentStepId] = useState(0); // Start with the first bot message
  const [userInput, setUserInput] = useState(''); // State for the text input field

  const chatRef = useRef(null); // Ref for detecting clicks outside the chat window
  const messagesEndRef = useRef(null); // Ref for auto-scrolling to the latest message

  // --- Effect to handle initial bot message and auto-advance ---
  useEffect(() => {
    if (isOpen) {
      const currentStep = getStepById(currentStepId);
      if (currentStep && currentStep.type === 'bot') {
        // Add bot message to history
        setMessages(prev => [...prev, { sender: 'bot', text: currentStep.message }]);
        // If it's a bot message, auto-advance to the next step
        if (currentStep.nextStepId !== undefined) {
          setCurrentStepId(currentStep.nextStepId);
        }
      }
    } else {
      // Reset state when closed
      setMessages([]);
      setCurrentStepId(0);
      setUserInput('');
    }
  }, [isOpen, currentStepId]); // Reruns when isOpen or currentStepId changes

  // --- Effect to scroll to the latest message ---
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]); // Reruns when messages array changes

  // --- Effect to handle click outside to close ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the chat is open and the click is outside the chat window
      if (chatRef.current && !chatRef.current.contains(event.target) && isOpen) {
        // Ensure the click wasn't on the open/close button itself
        const toggleButton = document.getElementById('chat-toggle-button');
        if (toggleButton && !toggleButton.contains(event.target)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]); // Only attach/remove listener when isOpen changes

  // --- Handlers for user interaction ---

  // Toggles the chat assistant's visibility
  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  // Handles selection from predefined user options (buttons)
  const handleUserOptionClick = (option) => {
    // Add user's selected option to history
    setMessages(prev => [...prev, { sender: 'user', text: option.text }]);

    if (option.nextStepId === 'END') {
      setIsOpen(false); // Close the chat
      setMessages([]); // Clear messages on end
      setCurrentStepId(0); // Reset for next open
    } else {
      setCurrentStepId(option.nextStepId); // Move to the next step
    }
  };

  // Handles text input from the user
  const handleTextInputSubmit = (e) => {
    e.preventDefault(); // Prevent form submission default behavior
    if (userInput.trim() === '') return; // Don't send empty messages

    // Add user's typed message to history
    setMessages(prev => [...prev, { sender: 'user', text: userInput }]);
    setUserInput(''); // Clear input field

    // Get the current step definition to know where to go next
    const currentStep = getStepById(currentStepId);
    if (currentStep && currentStep.nextStepId !== undefined) {
      setCurrentStepId(currentStep.nextStepId); // Advance conversation
    }
  };

  const currentChatStep = getStepById(currentStepId);

  return (
    <>
      {/* Embedded Styles */}
      <style>
        {`
          /* chat_assistant.styles.scss */

          /* Base styles for the toggle button */
          .chat-toggle-button {
            position: fixed;
            bottom: 1.5rem; /* 24px */
            right: 1.5rem; /* 24px */
            background-color: #2563eb; /* blue-600 */
            color: white;
            padding: 1rem; /* 16px */
            border-radius: 9999px; /* full rounded */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
            z-index: 50;
            transition: all 0.3s ease-in-out;
            transform: scale(1);
            border: none; /* Remove default button border */
            cursor: pointer; /* Indicate clickable */
            font-family: 'Inter', sans-serif; // Ensure font applies

            &:hover {
              background-color: #1d4ed8; /* blue-700 */
              transform: scale(1.05);
            }

            &:focus {
              outline: none;
              box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.5); /* ring-2, ring-blue-500, ring-opacity-75 */
            }

            svg {
              width: 1.5rem; /* 24px */
              height: 1.5rem; /* 24px */
            }
          }

          /* Base styles for the chat window container */
          .chat-window-container {
            position: fixed;
            bottom: 5rem; /* 80px */
            right: 1.5rem; /* 24px */
            background-color: white;
            border-radius: 0.5rem; /* 8px */
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); /* shadow-xl */
            display: flex;
            flex-direction: column;
            max-height: 80vh;
            z-index: 40;
            border: 1px solid #e5e7eb; /* gray-200 */
            overflow: hidden;
            font-family: 'Inter', sans-serif; /* Applied font-inter here */
            width: min(90vw, 320px); /* Responsive width for mobile and desktop */
          }

          /* Chat Header */
          .chat-header {
            background-image: linear-gradient(to right, #2563eb, #3b82f6); /* from-blue-600 to-blue-400 */
            color: white;
            padding: 1rem; /* 16px */
            border-top-left-radius: 0.5rem; /* rounded-t-lg */
            border-top-right-radius: 0.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06); /* shadow-md */

            h3 {
              font-size: 1.125rem; /* text-lg */
              font-weight: 600; /* font-semibold */
            }

            button {
              color: white;
              border: none;
              background: none;
              cursor: pointer;
              
              &:hover {
                color: #f3f4f6; /* gray-100 */
              }
              &:focus {
                outline: none;
              }
              svg {
                width: 1.25rem; /* 20px */
                height: 1.25rem; /* 20px */
              }
            }
          }

          /* Messages Display Area */
          .messages-display-area {
            flex: 1; /* flex-1 */
            padding: 1rem; /* 16px */
            overflow-y: auto;
            /* Custom Scrollbar Styles */
            &::-webkit-scrollbar {
              width: 8px;
            }
            &::-webkit-scrollbar-track {
              background: #f1f1f1;
              border-radius: 10px;
            }
            &::-webkit-scrollbar-thumb {
              background: #888;
              border-radius: 10px;
            }
            &::-webkit-scrollbar-thumb:hover {
              background: #555;
            }
            max-height: calc(80vh - 120px); /* Adjusted height for header + input area */

            .message-item {
              display: flex;
              margin-bottom: 0.5rem; /* 8px */

              &.bot-message {
                justify-content: flex-start;
                .message-bubble {
                  background-color: #dbeafe; /* blue-100 */
                  color: #1f2937; /* gray-800 */
                  border-bottom-left-radius: 0; /* rounded-bl-none */
                }
              }

              &.user-message {
                justify-content: flex-end;
                .message-bubble {
                  background-color: #2563eb; /* blue-600 */
                  color: white;
                  border-bottom-right-radius: 0; /* rounded-br-none */
                }
              }

              .message-bubble {
                max-width: 75%;
                padding: 0.5rem; /* 8px */
                border-radius: 0.5rem; /* 8px */
                box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
                font-size: 0.875rem; /* text-sm */
              }
            }
          }

          /* User Input / Options Area */
          .user-input-area {
            padding: 1rem; /* 16px */
            border-top: 1px solid #e5e7eb; /* gray-200 */
            background-color: #f9fafb; /* gray-50 */

            .options-container {
              display: flex;
              flex-direction: column;
              gap: 0.5rem; /* 8px */

              p {
                font-size: 0.875rem; /* text-sm */
                color: #374151; /* gray-700 */
                margin-bottom: 0.5rem; /* 8px */
              }

              button {
                width: 100%;
                background-color: white;
                border: 1px solid #60a5fa; /* blue-400 */
                color: #2563eb; /* blue-600 */
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                border-radius: 0.375rem; /* 6px */
                font-size: 0.875rem; /* text-sm */
                transition: background-color 0.2s ease, border-color 0.2s ease;
                cursor: pointer;
                
                &:hover {
                  background-color: #eff6ff; /* blue-50 */
                  border-color: #3b82f6; /* blue-500 */
                }
                &:focus {
                  outline: none;
                  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5), 0 0 0 4px rgba(59, 130, 246, 0.25); /* ring-2, ring-blue-500, ring-opacity-50 */
                }
              }
            }

            .text-input-form {
              display: flex;
              gap: 0.5rem; /* 8px */

              input[type="text"] {
                flex: 1; /* flex-1 */
                border: 1px solid #d1d5db; /* gray-300 */
                border-radius: 0.375rem; /* 6px */
                padding: 0.5rem; /* 8px */
                font-size: 0.875rem; /* text-sm */
                &:focus {
                  outline: none;
                  border-color: #3b82f6; /* focus:border-blue-500 */
                  box-shadow: 0 0 0 1px #3b82f6; /* focus:ring-blue-500 */
                }
              }

              button[type="submit"] {
                background-color: #2563eb; /* blue-600 */
                color: white;
                padding-left: 1rem; /* 16px */
                padding-right: 1rem;
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
                border-radius: 0.375rem; /* 6px */
                font-size: 0.875rem; /* text-sm */
                transition: background-color 0.2s ease;
                cursor: pointer;
                border: none;
                
                &:hover {
                  background-color: #1d4ed8; /* blue-700 */
                }
                &:focus {
                  outline: none;
                  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5), 0 0 0 4px rgba(59, 130, 246, 0.25); /* ring-2, ring-blue-500, ring-opacity-75 */
                }
              }
            }
          }
        `}
      </style>

      {/* Floating Toggle Button */}
      <button
        id="chat-toggle-button" // ID for use in click-outside logic
        onClick={toggleChat}
        className="chat-toggle-button" // <-- Using SCSS class
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2h-7.586l-2.707 2.707A1 1 0 018 20.586V16z"></path></svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatRef} // Attach ref for click-outside detection
          className="chat-window-container" // <-- Using SCSS class
        >
          {/* Chat Header */}
          <div className="chat-header"> {/* <-- Using SCSS class */}
            <h3 className="chat-header-title">Travel Assistant</h3> {/* Specific class for title */}
            <button onClick={() => setIsOpen(false)} className="chat-close-button"> {/* Specific class for close button */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          {/* Messages Display Area */}
          <div className="messages-display-area"> {/* <-- Using SCSS class */}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message-item ${msg.sender === 'bot' ? 'bot-message' : 'user-message'}`} // <-- Using SCSS classes
              >
                <div className="message-bubble"> {/* <-- Using SCSS class */}
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* Element to scroll into view */}
          </div>

          {/* User Input / Options Area */}
          <div className="user-input-area"> {/* <-- Using SCSS class */}
            {currentChatStep && currentChatStep.type === 'user_options' && (
              <div className="options-container"> {/* <-- Using SCSS class */}
                <p className="options-message">{currentChatStep.message}</p> {/* Specific class for message */}
                {currentChatStep.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleUserOptionClick(option)}
                    className="option-button" // <-- Using SCSS class
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            )}

            {currentChatStep && currentChatStep.type === 'user_text_input' && (
              <form onSubmit={handleTextInputSubmit} className="text-input-form"> {/* <-- Using SCSS class */}
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder={currentChatStep.placeholder}
                  className="text-input-field" // <-- Using SCSS class
                />
                <button
                  type="submit"
                  className="send-button" // <-- Using SCSS class
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default ChatAssistant;
