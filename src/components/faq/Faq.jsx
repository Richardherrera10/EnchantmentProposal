import React, { useState } from 'react';
import "./Faq.css";
import Header from '../header/Header';
import faqBkg from "../../assets/FaqBackground.svg";
import faq1 from "../../assets/faq1.jpg";
import faq2 from "../../assets/faq2.jpg";
import faq3 from "../../assets/faq3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

const faqData = {
  title1: [
    {
      question: "Question 1",
      answer: "Answer 1",
    },
    {
      question: "Question 2",
      answer: "Answer 2",
    },
  ],
  title2: [
    {
      question: "Question 1",
      answer: " Answer 1",
    },
    {
      question: "Question 2",
      answer: "Answer 2",
    },
  ],
  title3: [
    {
      question: "Title 3 Question 1",
      answer: "Title 3 Answer 1",
    },
    {
      question: "Title 3 Question 2",
      answer: "Title 3 Answer 2",
    },
  ],
};

function Faq() {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("title1");

  const toggleAnswer = (index) => {
    setShowAnswer((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleTitleClick = (title) => {
    setSelectedTitle(title);
  };

  return (
    <>
      <div className='containerFaq'>
        <h1>WHAT TO KNOW</h1>
        <img className="background-svg" src={faqBkg} alt="Background" />
        <div className='FaqBox'>
          <div className='faqTitles'>
            <h1
              onClick={() => handleTitleClick("title1")}
              className={selectedTitle === "title1" ? "active" : ""}
            >
              TITLE 1
            </h1>
            <h1
              onClick={() => handleTitleClick("title2")}
              className={selectedTitle === "title2" ? "active" : ""}
            >
              TITLE 2
            </h1>
            <h1
              onClick={() => handleTitleClick("title3")}
              className={selectedTitle === "title3" ? "active" : ""}
            >
              TITLE 3
            </h1>
          </div>

          <div className='FaqContent'>
            <div className='FaqContentLeft'>
              {faqData[selectedTitle].map((faq, index) => (
                <div key={index} className="FaqQuestionAnswer">
                  <div className="FaqQuestion">
                    <p>{faq.question}</p>
                    {showAnswer === index ? (
                      <FontAwesomeIcon
                        icon={faMinusCircle}
                        size="xl"
                        style={{ color: "#FFF" }}
                        onClick={() => toggleAnswer(index)}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faPlusCircle}
                        size="xl"
                        style={{ color: "#FFF" }}
                        onClick={() => toggleAnswer(index)}
                      />
                    )}
                  </div>
                  {showAnswer === index && (
                    <div className="FaqAnswer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                  {<div className="divisionLine"></div>}
                </div>
              ))}
            </div>
            <div className='FaqContentRight'>
              {selectedTitle === "title1" && (
                <img className='picture' src={faq1} alt="Picture" />
              )}
              {selectedTitle === "title2" && (
                <img className='picture' src={faq2} alt="Picture" />
              )}
              {selectedTitle === "title3" && (
                <img className='picture' src={faq3} alt="Picture" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
