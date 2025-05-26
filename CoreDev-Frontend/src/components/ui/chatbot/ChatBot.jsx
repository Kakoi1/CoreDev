"use client"

import React, { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Chatbot from "react-chatbot-kit"
import "react-chatbot-kit/build/main.css"
import "./ChatBot.css"
import botAvatar from "../../../assets/coreDevlogo.png"

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const actionProviderRef = useRef(null)
  const navigate = useNavigate()
  const [isLabelVisible, setIsLabelVisible] = useState(true);
  const rules = [
    {
      pattern: /^(hello|hi|hey|greetings|good\s(morning|afternoon|evening))\b/i,
      response: "Hey there! Welcome to CoreDev. How can I help you today?",
      buttonLabel: "Hello",
    },
    {
      pattern: /^(help|support|assistance)\b/i,
      response: "I can help with information about CoreDev, our products, careers, and more. Try asking about:",
      widget: "suggestionButtons",
    },
    {
      pattern: /^(about|about\scoredev|coredev\s?info)\b/i,
      response: () => (
        <span>
         We're a team of passionate individuals dedicated to creating solutions that make a difference. Our diverse backgrounds and perspectives fuel our innovation and drive our success.
          <br />
          <br />
          <a onClick={() => navigate("/About_us")} className="chat-link" style={{ cursor: "pointer" }}>
            Learn more about us →
          </a>
        </span>
      ),
      buttonLabel: "About CoreDev",
    },
    {
      pattern: /^(products?|services?|offerings?|solutions?)\b/i,
      response: () => (
<span>
      Overview of CoreDev's products:
      <ul className="product-list">
        <li>
          <div className="chat-div">
            CoreDevice - High-performance hardware for easy integration.
            <br />
            <a onClick={() => navigate("/Products/Hardware")} className="chat-link" style={{ cursor: "pointer" }}>
              Learn more →
            </a>
          </div>
        </li>
        <li>
          <div className="chat-div">
            CoreApp - User-friendly software with strong features.
            <br />
            <a onClick={() => navigate("/Products/Software")} className="chat-link" style={{ cursor: "pointer" }}>
              Learn more →
            </a>
          </div>
        </li>
      </ul>
    </span>
      ),
      buttonLabel: "Our Products",
    },
    {
      pattern: /^(careers?|jobs?|opportunities|hiring|employment)\b/i,
      response: () => (
        <span>
          We're always looking for talented individuals to join our team!
          <br />
          <br />
          Current openings:
          <ul className="job-list">
            <li>Software Implementor</li>
            <li>Software Programmer</li>
            <li>ACCOUNTING STAFF</li>
          </ul>
          <a
            onClick={() => navigate("/careers")}
            className="chat-link"
            style={{ cursor: "pointer", marginLeft: "10px" }}
          >
            Apply now →
          </a>
          <br />
        </span>
      ),
      buttonLabel: "Career opportunities",
    },
    {
      pattern: /^(location|office|address|where\sare\syou|find\sus|visit\sus)\b/i,
      response: () => (
        <span>
          You can visit our Contact page for location details.
          <br />
          <br />
          <a onClick={() => navigate("/Contact-us")} className="chat-link" style={{ cursor: "pointer" }}>
            Click here →
          </a>
          <br />
        </span>
      ),
      buttonLabel: "Location",
    },
    // {
    //   pattern: /^(bye|goodbye|exit|quit|see\syou)\b/i,
    //   response: "Goodbye! Feel free to come back if you have more questions.",
    //   buttonLabel: "Bye",
    // },
    {
      pattern: /.*/i,
      response: () => (
        <span>
          I'm not sure I understand. Please choose an option below or contact us for further assistance:
          <br />
          <br />
          <a href="mailto:info@coredev.ph" className="chat-link" style={{ cursor: "pointer" }}>
            Send us an email →
          </a>
        </span>
      ),
      widget: "suggestionButtons",
    },
  ]

  const SuggestionButtons = ({ actions }) => {
    const handleSuggestionClick = (buttonLabel, response) => {
      if (!actions) {
        console.error("Actions is undefined in SuggestionButtons")
        return
      }
      actions.addUserMessage(buttonLabel)
      setTimeout(() => {
        if (typeof response === "function") {
          actions.handleCustomResponse(response())
        } else {
          actions.handleSuggestion(response)
        }
      }, 300)
    }

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
    )
  }

  const config = {
    initialMessages: [],
    botName: "CoreDev Bot",
    customStyles: {
      botMessageBox: {
        backgroundColor: "var(--orange)",
      },
      chatButton: {
        backgroundColor: "#2c3e50",
      },
    },
    customComponents: {
      botAvatar: () => (
        <div className="react-chatbot-kit-chat-bot-avatar-container">
          <img
            src={botAvatar || "/placeholder.svg"}
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
        widgetName: "suggestionButtons",
        widgetFunc: (props) => <SuggestionButtons {...props} />,
        mapStateToProps: ["messages"],
      },
    ],
  }

  const MessageParser = ({ children, actions }) => {
    const parse = (message) => {
      const trimmedMessage = message.replace(/\s+/g, " ").trim()
      if (trimmedMessage) {
        actions.handleMessage(trimmedMessage)
      }
    }

    return (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            parse: parse,
            actions,
          })
        })}
      </div>
    )
  }

  const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleMessage = (message) => {
      const trimmedMessage = message.trim().toLowerCase()

      // Find the matching rule
      const matchedRule = rules.find((rule) => {
        if (rule.pattern instanceof RegExp) {
          return rule.pattern.test(trimmedMessage)
        }
        return false
      })

      if (matchedRule) {
        if (typeof matchedRule.response === "function") {
          handleCustomResponse(matchedRule.response())
        } else {
          const botMessage = createChatBotMessage(matchedRule.response, {
            widget: matchedRule.widget,
          })
          setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
          }))
        }
      } else {
        // This should never happen due to the catch-all rule, but just in case
        const fallbackMessage = createChatBotMessage("I didn't understand that. Can you try again?", {
          widget: "suggestionButtons",
        })
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, fallbackMessage],
        }))
      }
    }

    const handleCustomResponse = (response) => {
      const botMessage = createChatBotMessage(response, {
        widget: "suggestionButtons",
      })
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }))
    }

    const handleSuggestion = (response) => {
      const suggestionMessage = createChatBotMessage(response, {
        widget: "suggestionButtons",
      })
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, suggestionMessage],
      }))
    }

    const addUserMessage = (message) => {
      const userMessage = {
        message: message,
        type: "user",
        id: Date.now(),
      }
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, userMessage],
      }))
    }

    const setInitialMessage = () => {
      const initialMessage = createChatBotMessage("How may I help you?", {
        widget: "suggestionButtons",
      })
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, initialMessage],
      }))
    }

    // Store all actions in the ref for external access
    actionProviderRef.current = {
      handleMessage,
      handleCustomResponse,
      handleSuggestion,
      addUserMessage,
      setInitialMessage,
    }

    return (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            actions: {
              handleMessage,
              handleCustomResponse,
              handleSuggestion,
              addUserMessage,
              setInitialMessage,
            },
          })
        })}
      </div>
    )
  }
  // Set initial message when chat opens
  useEffect(() => {
    if (isChatOpen && actionProviderRef.current?.setInitialMessage) {
      actionProviderRef.current.setInitialMessage()
    }
  }, [isChatOpen])

const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      setIsLabelVisible(false);
    }
  };

  const closeLabel = () => {
    setIsLabelVisible(false);
  };

 return (
  <div className="chatbot-wrapper">
      {!isChatOpen && isLabelVisible ? (
        <div className="chat-icon-container">
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
          <span className="chat-label" >
            Click here to chat with our Chatbot 
            <button onClick={closeLabel} className="chat-label-close" aria-label="Close label">
              <svg
                className="chat-label-close-svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        </div>
      ) : (
        !isChatOpen && (
          <div className="chat-icon-container">
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
          </div>
        )
      )}
      {isChatOpen && (
        <div className="chat-container animate-slide-in">
          <div className="chat-header">
            <img
              src={botAvatar || "/placeholder.svg"}
              alt="CoreDev Bot"
              className="header-avatar"
              width="30"
              height="30"
            />
            <h2>CoreDev Assistant</h2>
            <button onClick={toggleChat} className="close-button" aria-label="Close chat">
              <svg
                className="close-svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div>
      )}
    </div>
)
}

export default ChatBot
