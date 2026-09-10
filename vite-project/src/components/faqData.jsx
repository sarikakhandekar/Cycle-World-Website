import React, { useState } from "react";
import "./faqData.css";

const FaqData = () => {
  const [openId, setOpenId] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What is a bicycle?",
      answer: "A bicycle is a two-wheeled vehicle that is powered by pedaling.",
    },
    {
      id: 2,
      question: "What is a mountain bicycle used for?",
      answer:
        "A mountain bicycleis designed for off-road riding and rough terrains.",
    },
    {
      id: 3,
      question: "What are the benefits of a geared bicycle?",
      answer:
        "A geared bicycle makes uphill climbing and long-distance riding easier and more comfortable.",
    },
    {
      id: 4,
      question: "What is the difference between a road bike and a mountain bicycle?",
      answer:
        "A road bicycle is built for smooth roads and speed, while a mountain bicycle is designed for rough and uneven trails.",
    },
    {
      id: 5,
      question: "What is the average price of a bicycle?",
      answer:
        "A basic bicycle usually starts around ₹5,000, while premium models can cost over ₹1,00,000.",
    },
  ];

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">🚲 Cycle FAQ</h2>

      {faqData.map((item) => (
        <div key={item.id} className="faq-card">
          <button
            className="faq-question"
            onClick={() => toggleFAQ(item.id)}
          >
            {item.question}
            <span>{openId === item.id ? "-" : "+"}</span>
          </button>

          {openId === item.id && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqData;