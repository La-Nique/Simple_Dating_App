import React, { useState } from "react";
import "./css/PersonalityPage.css";

const questions = [
  {
    questionText:
      "Do you enjoy spending time with a large group of people or prefer one-on-one interactions?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
  {
    questionText:
      "When presented with a new project, do you tend to focus on the big picture or the details?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
  {
    questionText:
      "Do you prefer to make decisions based on logic or your personal values and beliefs?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
  {
    questionText:
      "Would you rather spend a quiet evening at home or go out and explore new places?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
  {
    questionText:
      "Are you more likely to trust your instincts or rely on the advice of others?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
  {
    questionText:
      "Do you prefer a strict routine or a more flexible approach to your daily life?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
  {
    questionText: "Are you naturally more introverted or extroverted?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
  {
    questionText:
      "When faced with a difficult problem, do you prefer to brainstorm solutions alone or with a group?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
  {
    questionText:
      "Do you prefer to plan everything in advance or take things as they come?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
  {
    questionText: "Are you more likely to follow your heart or your head?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
  {
    questionText: "Do you tend to see the big picture or focus on the details?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
  {
    questionText:
      "Do you prefer a career that involves working with people or working with things?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
  {
    questionText: "Do you enjoy spending time alone or with others?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
  {
    questionText: "Do you prefer to take risks or play it safe?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
  {
    questionText:
      "When faced with a difficult decision, do you rely more on your intuition or analysis?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
  {
    questionText:
      "Do you prefer to focus on the present or plan for the future?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
  {
    questionText:
      "Do you enjoy exploring new ideas or sticking with tried-and-true methods?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
  {
    questionText: "Are you naturally more spontaneous or methodical?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
  {
    questionText:
      "Do you prefer to work on one task at a time or multiple tasks simultaneously?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
  {
    questionText:
      "Are you more likely to make decisions based on emotion or reason?",
    answerOptions: [
      { answerText: "Strongly Disagree", value: 1 },
      { answerText: "Disagree", value: 2 },
      { answerText: "Neutral", value: 3 },
      { answerText: "Agree", value: 4 },
      { answerText: "Strongly Agree", value: 5 },
    ],
  },
];

const mbtiTypes = [
  {
    type: "ISTJ",
    description: "Practical and logical, with a focus on order and structure.",
  },
  {
    type: "ISFJ",
    description:
      "Warm and responsible, with a focus on tradition and stability.",
  },
  {
    type: "INFJ",
    description:
      "Insightful and compassionate, with a focus on understanding and harmony.",
  },
  {
    type: "INTJ",
    description:
      "Strategic and analytical, with a focus on long-term vision and planning.",
  },
  {
    type: "ISTP",
    description: "Bold and practical, with a focus on action and results.",
  },
  {
    type: "ISFP",
    description:
      "Creative and sensitive, with a focus on aesthetics and values.",
  },
  {
    type: "INFP",
    description:
      "Idealistic and empathetic, with a focus on personal growth and meaning.",
  },
  {
    type: "INTP",
    description:
      "Inventive and curious, with a focus on analysis and innovation.",
  },
  {
    type: "ESTP",
    description:
      "Energetic and adaptable, with a focus on seizing opportunities.",
  },
  {
    type: "ESFP",
    description:
      "Spontaneous and enthusiastic, with a focus on fun and excitement.",
  },
  {
    type: "ENFP",
    description:
      "Creative and enthusiastic, with a focus on possibilities and connections.",
  },
  {
    type: "ENTP",
    description:
      "Innovative and adaptable, with a focus on new ideas and challenges.",
  },
  {
    type: "ESTJ",
    description:
      "Efficient and practical, with a focus on organization and control.",
  },
  {
    type: "ESFJ",
    description:
      "Friendly and conscientious, with a focus on harmony and social connections.",
  },
  {
    type: "ENFJ",
    description:
      "Charismatic and empathetic, with a focus on inspiring and leading others.",
  },
  {
    type: "ENTJ",
    description:
      "Assertive and visionary, with a focus on strategic planning and leadership.",
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswerOptionClick = (value) => {
    setAnswers([...answers, value]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      displayResults();
    }
  };

  const displayResults = () => {
    // Calculate the total score
    const totalScore = answers.reduce((sum, answer) => sum + answer, 0);

    // Determine the dominant preference based on total score
    const dominantPreference = totalScore >= 8 ? mbtiTypes[1] : mbtiTypes[0];

    // Display the result to the user
    const result = `Your dominant preference is ${dominantPreference.type} - ${dominantPreference.description}.`;
    alert(result);
  };

  return (
    <div>
      <h1>{questions[currentQuestion].questionText}</h1>
      <div>
        {questions[currentQuestion].answerOptions.map((answerOption) => (
          <button
            key={answerOption.answerText}
            onClick={() => handleAnswerOptionClick(answerOption.value)}
          >
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
