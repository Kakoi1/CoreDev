import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './ChatBot.css';
import botAvatar from '../../../assets/coreDevlogo.png';

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const actionProviderRef = useRef(null);
  const navigate = useNavigate();

  // Enhanced rules with better pattern matching
  const rules = [
    {
      pattern: /^(hello|hi|hey|greetings|good\s(morning|afternoon|evening))\b/i,
      response: 'Hey there! Welcome to CoreDev. How can I help you today?',
      buttonLabel: 'Hello',
    },
    {
      pattern: /^(help|support|assistance)\b/i,
      response: "I can help with information about CoreDev, our products, careers, and more. Try asking about:",
      widget: 'suggestionButtons',
    },
    {
      pattern: /^(about|about\scoredev|coredev\s?info)\b/i,
      response: () => (
        <span>
          CoreDev is a leading technology company specializing in innovative solutions.
          <br /><br />
          <a
            onClick={() => navigate('/About_us')}
            className="chat-link"
            style={{ cursor: 'pointer' }}
          >
            Learn more about us →
          </a>
        </span>
      ),
      buttonLabel: 'About CoreDev',
    },
    {
      pattern: /^(products?|services?|offerings?|solutions?)\b/i,
      response: () => (
        <span>
          We offer cutting-edge hardware and software products:
          <ul className="product-list">
            <li>
              <div className='chat-div'>
              CoreDevice - Hardware 
              <br />
              <a
                onClick={() => navigate('/Products/Hardware')}
                className="chat-link"
                style={{ cursor: 'pointer'}}
              >
                Learn more →
              </a>
              </div>
            </li>
            <li>
               <div className='chat-div'>
              CoreSoft - Software 
              <br />
              <a
                onClick={() => navigate('/Products/Software')}
                className="chat-link"
                style={{ cursor: 'pointer'}}
              >
                Learn more →
              </a>
              </div>
            </li>
          </ul>
        </span>
      ),
      buttonLabel: 'Our Products',
    },
    {
      pattern: /^(careers?|jobs?|opportunities|hiring|employment)\b/i,
      response: () => (
        <span>
          We're always looking for talented individuals to join our team!
          <br /><br />
          Current openings:
          <ul className="job-list">
            <li>Software Implementor</li>
            <li>Software Programmer</li>
            <li>ACCOUNTING STAFF</li>
          </ul>
          <a
            onClick={() => navigate('/careers')}
            className="chat-link"
            style={{ cursor: 'pointer', marginLeft: '10px' }}
          >
            Apply now →
          </a>
          <br />
        </span>
      ),
      buttonLabel: 'Career opportunities',
    },
    {
      pattern: /^(location|office|address|where\sare\syou|find\sus|visit\sus)\b/i,
      response: () => (
        <span>
          You can visit our Contact page for location details.
          <br /><br />
          <a
            onClick={() => navigate('/Contact-us')}
            className="chat-link"
            style={{ cursor: 'pointer' }}
          >
            Contact Us →
          </a>
          <br />
        </span>
      ),
      buttonLabel: 'Location',
    },
    {
      pattern: /^(bye|goodbye|exit|quit|see\syou)\b/i,
      response: 'Goodbye! Feel free to come back if you have more questions.',
      buttonLabel: 'Bye',
    },
    {
      pattern: /.*/i,
      response: "I'm not sure I understand. Here are some options you can ask about:",
      widget: 'suggestionButtons',
    },
  ];

  // Suggestion buttons widget
  const SuggestionButtons = ({ actions }) => {
    const handleSuggestionClick = (buttonLabel, response) => {
      if (!actions) {
        console.error('Actions is undefined in SuggestionButtons');
        return;
      }
      actions.addUserMessage(buttonLabel);
      setTimeout(() => {
        if (isChatOpen) { // Only proceed if chat is still open
          if (typeof response === 'function') {
            if (actions.handleCustomResponse) {
              actions.handleCustomResponse(response());
            } else {
              console.error('handleCustomResponse is undefined');
            }
          } else {
            if (actions.handleSuggestion) {
              actions.handleSuggestion(response);
            } else {
              console.error('handleSuggestion is undefined');
            }
          }
        }
      }, 300);
    };

    return (
      <div className="suggestion-buttons-container">
        {rules
          .filter((rule) => rule.buttonLabel)
          .map((rule, index) => (
            <button
              key={index}
              className="suggestion-button"
              onClick={() => handleSuggestionClick(rule.buttonLabel, rule.response)}
            >
              {rule.buttonLabel}
            </button>
          ))}
      </div>
    );
  };

  const config = {
    initialMessages: [],
    botName: 'CoreDev Bot',
    customStyles: {
      botMessageBox: {
        backgroundColor: 'var(--orange)',
      },
      chatButton: {
        backgroundColor: '#2c3e50',
      },
    },
    customComponents: {
      botAvatar: () => (
        <div className="react-chatbot-kit-chat-bot-avatar-container">
          <img 
            src={botAvatar} 
            alt="CoreDev Bot" 
            className="react-chatbot-kit-chat-bot-avatar"
            width="40"
            height="40"
          />
        </div>
      ),
    },
    widgets: [
      {
        widgetName: 'suggestionButtons',
        widgetFunc: (props) => <SuggestionButtons {...props} />,
        mapStateToProps: ['messages']
      }
    ],
  };

  const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
      // console.log('Raw input:', JSON.stringify(message)); // Debug exact characters
      const trimmedMessage = message.replace(/\s+/g, ' ').trim();
      if (trimmedMessage) {
        actions.handleMessage(trimmedMessage);
      }
    };

    return (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            parse: parse,
            actions,
          });
        })}
      </div>
    );
  };

  const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    actionProviderRef.current = {
      createChatBotMessage,
      setState,
      handleMessage: (message) => {
        const trimmedMessage = message.trim().toLowerCase();
        // console.log('Processed input:', trimmedMessage);
        const matchedRule = rules.find((rule, index) => {
          if (rule.pattern instanceof RegExp) {
            const isMatch = rule.pattern.test(trimmedMessage);
            // console.log(`Rule ${index} (${rule.buttonLabel || 'Fallback'}): ${isMatch}`);
            return isMatch;
          }
          return false;
        });

        if (matchedRule) {
          if (typeof matchedRule.response === 'function') {
            actionProviderRef.current.handleCustomResponse(matchedRule.response());
          } else {
            const botMessage = createChatBotMessage(matchedRule.response, {
              widget: matchedRule?.widget,
            });
            setState((prev) => ({
              ...prev,
              messages: [...prev.messages, botMessage],
            }));
          }
        } else {
          console.warn('No rule matched, should not reach here due to fallback rule');
        }
      },
      handleCustomResponse: (response) => {
        const botMessage = createChatBotMessage(response);
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      },
      handleSuggestion: (response) => {
        const suggestionMessage = createChatBotMessage(response);
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, suggestionMessage],
        }));
      },
      addUserMessage: (message) => {
        const userMessage = {
          message: message,
          type: 'user',
          id: Date.now(),
        };
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, userMessage],
        }));
      },
      setInitialMessage: () => {
        const initialMessage = createChatBotMessage('How may I help you?', {
          widget: 'suggestionButtons'
        });
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, initialMessage],
        }));
      },
    };

    return (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            actions: {
              handleMessage: actionProviderRef.current.handleMessage,
              handleCustomResponse: actionProviderRef.current.handleCustomResponse,
              handleSuggestion: actionProviderRef.current.handleSuggestion,
              addUserMessage: actionProviderRef.current.addUserMessage,
              setInitialMessage: actionProviderRef.current.setInitialMessage,
            },
          });
        })}
      </div>
    );
  };

  const toggleChat = () => {
    if (!isChatOpen) {
      setIsChatOpen(true);
      setTimeout(() => {
        if (actionProviderRef.current?.setInitialMessage) {
          actionProviderRef.current.setInitialMessage();
        }
      }, 0);
    } else {
      setIsChatOpen(false);
    }
  };

  return (
    <div className="chatbot-wrapper">
      {!isChatOpen ? (
        <button onClick={toggleChat} className="chat-icon" aria-label="Open chat">
          <svg
            className="icon-svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      ) : (
        <div className="chat-container animate-slide-in">
          <div className="chat-header">
            <img 
              src={botAvatar} 
              alt="CoreDev Bot" 
              className="header-avatar"
              width="30"
              height="30"
            />
            <h2>CoreDev Assistant</h2>
            <button
              onClick={toggleChat}
              className="close-button"
              aria-label="Close chat"
            >
              <svg
                className="close-svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
};

export default ChatBot;