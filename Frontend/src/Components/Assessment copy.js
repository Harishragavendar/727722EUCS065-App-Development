// src/Components/AssessmentPage.js
import React, { useState } from 'react';
import './Assessment.css';

const stories = [
  {
    title: "The Brave Little Squirrel",
    content: `
      Once upon a time, in a dense forest, there was a brave little squirrel named Sammy.
      Sammy loved to explore and gather nuts for the winter. One day, while exploring,
      he found a hidden treasure of golden acorns. Sammy decided to share the treasure
      with all the forest animals, making him a hero in the forest.
    `,
    questions: [
      {
        question: "What is the name of the brave little squirrel?",
        options: ["Sammy", "Timmy", "Jimmy", "Bobby"],
        answer: "Sammy",
      },
      {
        question: "What did Sammy find while exploring the forest?",
        options: [
          "A hidden treasure of golden acorns",
          "A lost city",
          "A magic wand",
          "A secret cave",
        ],
        answer: "A hidden treasure of golden acorns",
      },
      {
        question: "What did Sammy decide to do with the treasure?",
        options: [
          "Keep it for himself",
          "Hide it again",
          "Share it with all the forest animals",
          "Sell it in the market",
        ],
        answer: "Share it with all the forest animals",
      },
    ],
  },
  {
    title: "The Lost Puppy",
    content: `
      Once there was a little puppy named Max who got lost in the big city.
      Max wandered through streets and alleys looking for his home. He met
      many kind people who tried to help him. In the end, a little girl named
      Lily found Max and took him home. She put up posters and soon, Max's
      owner came to take him home. Max was happy and promised to be more
      careful next time.
    `,
    questions: [
      {
        question: "What is the name of the lost puppy?",
        options: ["Max", "Buddy", "Rex", "Charlie"],
        answer: "Max",
      },
      {
        question: "Who found Max and took him home?",
        options: ["A policeman", "A little girl named Lily", "A firefighter", "A shopkeeper"],
        answer: "A little girl named Lily",
      },
      {
        question: "What did Lily do to help Max find his owner?",
        options: [
          "Put up posters",
          "Kept him as her own",
          "Gave him to a shelter",
          "Posted on social media",
        ],
        answer: "Put up posters",
      },
    ],
  },
  {
    title: "The Magic Paintbrush",
    content: `
      Lily, a young girl with a passion for art, finds a magic paintbrush in an old attic.
      Anything she paints with it turns into real-life objects. She uses it to help her village
      by painting food for the hungry, building houses, and creating beautiful gardens. Her
      kindness and creativity bring joy to everyone around her.
    `,
    questions: [
      {
        question: "What did Lily find in the old attic?",
        options: ["A magic paintbrush", "A magic mirror", "A treasure chest", "A flying carpet"],
        answer: "A magic paintbrush",
      },
      {
        question: "What happens when Lily uses the magic paintbrush?",
        options: ["Anything she paints turns into real-life objects", "She can fly", "She can read minds", "She can turn invisible"],
        answer: "Anything she paints turns into real-life objects",
      },
      {
        question: "How does Lily use her magic paintbrush to help her village?",
        options: ["By painting food, houses, and gardens", "By painting animals to help with chores", "By painting books for the school", "By painting beautiful clothes for everyone"],
        answer: "By painting food, houses, and gardens",
      },
    ],
  },
  {
    title: "The Curious Cat and the Moonlight Adventure",
    content: `
      Whiskers, a curious cat, loves exploring at night. One moonlit night, he follows
      a trail of glowing paw prints and discovers a secret world where animals talk
      and have magical powers. Whiskers makes new friends, learns about the magic
      of the moon, and helps save the world from a shadowy figure.
    `,
    questions: [
      {
        question: "What is the name of the curious cat?",
        options: ["Whiskers", "Mittens", "Shadow", "Tigger"],
        answer: "Whiskers",
      },
      {
        question: "What does Whiskers follow to discover the secret world?",
        options: ["A trail of glowing paw prints", "A trail of sparkling stars", "A trail of colorful feathers", "A trail of glowing flowers"],
        answer: "A trail of glowing paw prints",
      },
      {
        question: "What does Whiskers discover in the secret world?",
        options: ["A world where animals talk and have magical powers", "A world of giant vegetables", "A world of talking trees", "A world of flying fish"],
        answer: "A world where animals talk and have magical powers",
      },
    ],
  },
];

const Assessment = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const currentStory = stories[currentStoryIndex];
  const currentQuestion = currentStory.questions[currentQuestionIndex];

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < currentStory.questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleNextStory = () => {
    const nextStory = currentStoryIndex + 1;
    if (nextStory < stories.length) {
      setCurrentStoryIndex(nextStory);
      setCurrentQuestionIndex(0);
      setScore(0);
      setShowScore(false);
    } else {
      alert('You have completed all assessments!');
    }
  };

  return (
    <div className="all365">
    <div className="assessment-container65">
      <h1>{currentStory.title}</h1>
      <p>{currentStory.content}</p>
      {showScore ? (
        <div className="score-section65">
          <h2>Your Score</h2>
          <p>You scored {score} out of {currentStory.questions.length}</p>
          <button onClick={handleNextStory} className="next-button65">Next Story</button>
        </div>
      ) : (
        <>
          <div className="question-section65">
            <div className="question-count65">
              <span>Question {currentQuestionIndex + 1}</span>/{currentStory.questions.length}
            </div>
            <div className="question-text65">{currentQuestion.question}</div>
          </div>
          <div className="answer-section65">
            {currentQuestion.options.map((option) => (
              <button
                onClick={() => handleAnswerOptionClick(option)}
                key={option}
                id="answer-button65"
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default Assessment;
