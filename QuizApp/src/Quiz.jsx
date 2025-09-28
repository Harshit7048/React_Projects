import { useEffect, useState } from "react"


const quiestions = [
    {
        "question": "What is the name of Tanjiro Kamado’s younger sister?",
        "options": ["Nezuko", "Shinobu", "Kanae", "Kanao"],
        "correct": "Nezuko"
    },
    {
        "question": "What kind of breathing style does Tanjiro primarily use?",
        "options": ["Water Breathing", "Thunder Breathing", "Flame Breathing", "Wind Breathing"],
        "correct": "Water Breathing"
    },
    {
        "question": "Who is the leader of the Demon Slayer Corps?",
        "options": ["Kyojuro Rengoku", "Kagaya Ubuyashiki", "Tengen Uzui", "Sanemi Shinazugawa"],
        "correct": "Kagaya Ubuyashiki"
    },
    {
        "question": "Which Hashira uses Sound Breathing?",
        "options": ["Muichiro Tokito", "Tengen Uzui", "Mitsuri Kanroji", "Gyomei Himejima"],
        "correct": "Tengen Uzui"
    },
    {
        "question": "What is Zenitsu’s main fighting style?",
        "options": ["Water Breathing", "Beast Breathing", "Thunder Breathing", "Stone Breathing"],
        "correct": "Thunder Breathing"
    },
    {
        "question": "What color does Tanjiro’s Nichirin Blade first turn?",
        "options": ["Black", "Red", "Blue", "Green"],
        "correct": "Black"
    },
    {
        "question": "Who killed the Flame Hashira, Kyojuro Rengoku?",
        "options": ["Akaza", "Muzan", "Enmu", "Daki"],
        "correct": "Akaza"
    },
    {
        "question": "What is Nezuko’s unique ability as a demon?",
        "options": ["Blood Demon Art: Exploding Blood", "Ice Manipulation", "Shadow Control", "Lightning Speed"],
        "correct": "Blood Demon Art: Exploding Blood"
    },
    {
        "question": "Who was the Upper Rank 6 demon defeated in the Entertainment District Arc?",
        "options": ["Gyutaro and Daki", "Akaza", "Kokushibo", "Enmu"],
        "correct": "Gyutaro and Daki"
    },
    {
        "question": "Which Hashira is known as the Love Hashira?",
        "options": ["Shinobu Kocho", "Mitsuri Kanroji", "Kanae Kocho", "Kanao Tsuyuri"],
        "correct": "Mitsuri Kanroji"
    }
]







 export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [select, setSelect] = useState("");

  const question = quiestions[index];

  const isCorrect = (i) => {
    return question.correct === question.options[i];
  };

  const handleAnswer = (i) => {
    setSelect(question.options[i]);
  };

  return (
    <div className="quiz-box">
      <h2 className="question">
        {index + 1}. {question.question}
      </h2>

      {question.options.map((ele, i) => (
        <p
          key={i}
          onClick={() => handleAnswer(i)}
          className={select === ele ? (isCorrect(i) ? "correct" : "wrong") : ""}
        >
          {ele}
        </p>
      ))}

      <div className="btn-cont">
        <button
          className="btns"
          onClick={() => setIndex(index - 1)}
          disabled={index === 0}
        >
          Prev
        </button>
        <button
          className="btns"
          onClick={() => setIndex(index + 1)}
          disabled={index === quiestions.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
}
