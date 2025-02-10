import React, { useState } from "react";
import Question from "./components/Question";
import Results from "./components/Results";

// Константы
const INITIAL_ANSWERS = new Array(8).fill([]);  // 8 вопросов в тесте


// Константы
const INITIAL_TEST = {
  "testName": "Особенности стиля мышления собеседника в диалоге",
  "description": "Тест о коммуникации с разными психотипами",
  "modules": [
    {
      "name": "Особенности стиля мышления собеседника в диалоге",
      "questions": [
        {
          "id": 1,
          "text": "Как доносить информацию до Производителя?",
          "options": [
            "Воздержитесь от пустой болтовни, сразу переходите к делу. Преподносите свою проблему как кризис",
            "Возьмите риск, связанный с изменениями, на себя",
            "Поставьте перед ним достижимые цели и определите приоритеты, чтобы он понимал смысл каждого действия",
            "Убеждая его, ссылайтесь на факты, а не на мнения",
            "Изъясняйтесь точно, избегайте намеков и недомолвок",
            "Никогда не критикуйте его идеи. Со временем они устареют сами собой"
          ],
          "correctAnswers": [0, 2, 4],
          "type": "multipleChoice"
        },
        {
          "id": 2,
          "text": "Как доносить информацию до Администратора?",
          "options": [
            "Дайте ему возможность внести поправки в ваше решение и обогатить его собственными идеями. Никогда не вносите предложения, которые нельзя изменить",
            "Уделяйте самое пристальное внимание как",
            "Станьте для него источником информации",
            "Возьмите риск, связанный с изменениями, на себя",
            "Поставьте перед ним достижимые цели и определите приоритеты, чтобы он понимал смысл каждого действия",
            "Убеждая его, ссылайтесь на факты, а не на мнения"
          ],
          "correctAnswers": [1, 3, 5],
          "type": "multipleChoice"
        },
        {
          "id": 3,
          "text": "Как доносить информацию до Предпринимателя?",
          "options": [
            "Когда он участвует в процессе принятия решений, относитесь к его чувствам и взглядам непредвзято, даже если вы занимаете иную позицию",
            "Дайте ему возможность внести поправки в ваше решение и обогатить его собственными идеями. Никогда не вносите предложения, которые нельзя изменить",
            "Сначала обрисуйте общую картину, потом переходите к деталям",
            "Поставьте перед ним достижимые цели и определите приоритеты, чтобы он понимал смысл каждого действия",
            "Никогда не критикуйте его идеи. Со временем они устареют сами собой",
            "Поддерживайте его, когда он выполняет свою работу"
          ],
          "correctAnswers": [1, 2, 4],
          "type": "multipleChoice"
        },
        {
          "id": 4,
          "text": "Как доносить информацию до Интегратора?",
          "options": [
            "Когда он участвует в процессе принятия решений, относитесь к его чувствам и взглядам непредвзято, даже если вы занимаете иную позицию",
            "Дайте ему возможность внести поправки в ваше решение и обогатить его собственными идеями. Никогда не вносите предложения, которые нельзя изменить",
            "Станьте для него источником информации",
            "Убеждая его, ссылайтесь на факты, а не на мнения",
            "Изъясняйтесь точно, избегайте намеков и недомолвок",
            "Поддерживайте его, когда он выполняет свою работу"
          ],
          "correctAnswers": [0, 2, 5],
          "type": "multipleChoice"
        },
        {
          "id": 5,
          "text": "Какое значение имеют для Производителя слова ДА и НЕТ?",
          "options": [
            "Да = Да",
            "Да может перейти в Нет",
            "Нет = Нет",
            "Нет может перейти в Да",
            "Да = Может быть",
            "Нет = Может быть"
          ],
          "correctAnswers": [0, 2],
          "type": "multipleChoice"
        },
        {
          "id": 6,
          "text": "Какое значение имеют для Администратора слова ДА и НЕТ?",
          "options": [
            "Да = Да",
            "Да может перейти в Нет",
            "Нет = Нет",
            "Нет может перейти в Да",
            "Да = Может быть",
            "Нет = Может быть"
          ],
          "correctAnswers": [0, 3],
          "type": "multipleChoice"
        },
        {
          "id": 7,
          "text": "Какое значение имеют для Предпринимателя слова ДА и НЕТ?",
          "options": [
            "Да = Да",
            "Да может перейти в Нет",
            "Нет = Нет",
            "Нет может перейти в Да",
            "Да = Может быть",
            "Нет = Может быть"
          ],
          "correctAnswers": [1, 2],
          "type": "multipleChoice"
        },
        {
          "id": 8,
          "text": "Какое значение имеют для Интегратора слова ДА и НЕТ?",
          "options": [
            "Да = Да",
            "Да может перейти в Нет",
            "Нет = Нет",
            "Нет может перейти в Да",
            "Да = Может быть",
            "Нет = Может быть"
          ],
          "correctAnswers": [4, 5],
          "type": "multipleChoice"
        }
      ]
    }
  ]
}

export default function TestPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(INITIAL_ANSWERS);
  const [showResults, setShowResults] = useState(false);
  const [test] = useState(INITIAL_TEST);

  const questions = test.modules[0].questions;
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answers) => {
    setUserAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestionIndex] = answers;
      return newAnswers;
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(new Array(questions.length).fill([]));
    setShowResults(false);
  };

  if (showResults) {
    return <Results userAnswers={userAnswers} questions={questions} onRetry={handleRetry} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-2 sm:py-12">
      <div className="max-w-4xl mx-auto px-2 sm:px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-3 sm:p-6 bg-blue-600">
            <h1 className="text-2xl font-bold text-white">{test.testName}</h1>
            <p className="text-blue-100 mt-2">{test.description}</p>
          </div>

          <div className="p-2 sm:p-4">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span 
                  className="text-sm text-gray-600"
                  role="status"
                  aria-label={`Вопрос ${currentQuestionIndex + 1} из ${questions.length}`}
                >
                  Вопрос {currentQuestionIndex + 1} из {questions.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                  }}
                  role="progressbar"
                  aria-valuenow={currentQuestionIndex + 1}
                  aria-valuemin={1}
                  aria-valuemax={questions.length}
                />
              </div>
            </div>

            <Question
              question={currentQuestion}
              selectedAnswers={userAnswers[currentQuestionIndex] || []}
              onAnswerSelect={handleAnswerSelect}
            />

            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="px-4 sm:px-6 py-2 rounded-lg bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:outline-none"
                aria-label="Перейти к предыдущему вопросу"
              >
                Назад
              </button>

              <button
                onClick={handleNext}
                disabled={!userAnswers[currentQuestionIndex]?.length}
                className="px-4 sm:px-6 py-2 rounded-lg bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
                aria-label={currentQuestionIndex === questions.length - 1 ? "Завершить тест" : "Перейти к следующему вопросу"}
              >
                {currentQuestionIndex === questions.length - 1 ? "Завершить" : "Далее"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}