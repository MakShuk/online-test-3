import React, { useState } from "react";
import Question from "./components/Question";
import Results from "./components/Results";

// Константы
const INITIAL_ANSWERS = new Array(8).fill([]);  // 8 вопросов в тесте


// Константы
const INITIAL_TEST = {
  "testName": "Коммуникация в семье",
  "description": "Тест о правильном общении с разными психотипами в семье",
  "modules": [
    {
      "name": "Коммуникация в семье",
      "questions": [
        {
          "id": 1,
          "text": "Что важно помнить, общаясь с близким человеком-производителем?",
          "options": [
            "Опирайтесь на инструкции, алгоритмы и списки. Подчеркивайте его правильность, исполнительность.",
            "Фокусируйтесь на результате, смысле задания. Говорите четко, конкретно, по существу. Поощряйте его усердие.",
            "Опирайтесь на его готовность помогать, быть полезным. Общайтесь эмоционально и искренне."
          ],
          "correctAnswers": [1],
          "type": "singleChoice"
        },
        {
          "id": 2,
          "text": "Что важно помнить, общаясь с близким человеком-администратором?",
          "options": [
            "Опирайтесь на инструкции, алгоритмы и списки. Подчеркивайте его правильность, исполнительность.",
            "Фокусируйтесь на результате, смысле задания. Говорите четко, конкретно, по существу. Поощряйте его усердие.",
            "Опирайтесь на его готовность помогать, быть полезным. Общайтесь эмоционально и искренне."
          ],
          "correctAnswers": [0],
          "type": "singleChoice"
        },
        {
          "id": 3,
          "text": "Что важно помнить, общаясь с близким человеком-предпринимателем?",
          "options": [
            "Опирайтесь на инструкции, алгоритмы и списки. Подчеркивайте его правильность, исполнительность.",
            "Опирайтесь на его готовность помогать, быть полезным. Общайтесь эмоционально и искренне.",
            "Давайте ему возможность для самостоятельной проработки задачи. Опишите сначала общую картину."
          ],
          "correctAnswers": [2],
          "type": "singleChoice"
        },
        {
          "id": 4,
          "text": "Что важно помнить, общаясь с близким человеком-интегратором?",
          "options": [
            "Фокусируйтесь на результате, смысле задания. Говорите четко, конкретно, по существу. Поощряйте его усердие.",
            "Опирайтесь на его готовность помогать, быть полезным. Общайтесь эмоционально и искренне.",
            "Давайте ему возможность для самостоятельной проработки задачи. Опишите сначала общую картину."
          ],
          "correctAnswers": [1],
          "type": "singleChoice"
        },
        {
          "id": 5,
          "text": "На какие сильные стороны нужно опираться у ребенка-производителя, чтобы развивать его уникальность?",
          "options": [
            "Желание работать, добиваться быстрых результатов, целеустремленность, активность.",
            "Эмпатия, умение общаться с людьми, творческий подход к делу, умение создавать уют и красоту, стиль.",
            "Самостоятельность, готовность принимать решения и брать за них ответственность, творческий подход к решению сложных задач.",
            "Исполнительность, послушание, желание все упорядочивать, обеспечивать безопасность."
          ],
          "correctAnswers": [0],
          "type": "singleChoice"
        },
        {
          "id": 6,
          "text": "На какие сильные стороны нужно опираться у ребенка-администратора, чтобы развивать его уникальность?",
          "options": [
            "Желание работать, добиваться быстрых результатов, целеустремленность, активность.",
            "Эмпатия, умение общаться с людьми, творческий подход к делу, умение создавать уют и красоту, стиль.",
            "Самостоятельность, готовность принимать решения и брать за них ответственность, творческий подход к решению сложных задач.",
            "Исполнительность, послушание, желание все упорядочивать, обеспечивать безопасность."
          ],
          "correctAnswers": [3],
          "type": "singleChoice"
        },
        {
          "id": 7,
          "text": "На какие сильные стороны нужно опираться у ребенка-предпринимателя, чтобы развивать его уникальность?",
          "options": [
            "Желание работать, добиваться быстрых результатов, целеустремленность, активность.",
            "Эмпатия, умение общаться с людьми, творческий подход к делу, умение создавать уют и красоту, стиль.",
            "Самостоятельность, готовность принимать решения и брать за них ответственность, творческий подход к решению сложных задач.",
            "Исполнительность, послушание, желание все упорядочивать, обеспечивать безопасность."
          ],
          "correctAnswers": [2],
          "type": "singleChoice"
        },
        {
          "id": 8,
          "text": "На какие сильные стороны нужно опираться у ребенка-интегратора, чтобы развивать его уникальность?",
          "options": [
            "Желание работать, добиваться быстрых результатов, целеустремленность, активность.",
            "Эмпатия, умение общаться с людьми, творческий подход к делу, умение создавать уют и красоту, стиль.",
            "Самостоятельность, готовность принимать решения и брать за них ответственность, творческий подход к решению сложных задач.",
            "Исполнительность, послушание, желание все упорядочивать, обеспечивать безопасность."
          ],
          "correctAnswers": [1],
          "type": "singleChoice"
        },
        {
          "id": 9,
          "text": "Как просить близкого человека-производителя?",
          "options": [
            "Проведите спокойное обсуждение ситуации, вместе придите к определенным договоренностям. Можно даже наглядно оформить их.",
            "Без всяких намеков, говорите четко и конкретно, что не так, и что нужно сделать.",
            "Просите искренне, не пытайтесь манипулировать. И сами старайтесь помогать ему, когда он к вам обращается.",
            "Обозначьте проблему и попросите партнера предложить разные идеи по ее решению."
          ],
          "correctAnswers": [1],
          "type": "singleChoice"
        },
        {
          "id": 10,
          "text": "Как просить близкого человека-администратора?",
          "options": [
            "Проведите спокойное обсуждение ситуации, вместе придите к определенным договоренностям. Можно даже наглядно оформить их.",
            "Без всяких намеков, говорите четко и конкретно, что не так, и что нужно сделать.",
            "Просите искренне, не пытайтесь манипулировать. И сами старайтесь помогать ему, когда он к вам обращается.",
            "Обозначьте проблему и попросите партнера предложить разные идеи по ее решению."
          ],
          "correctAnswers": [0],
          "type": "singleChoice"
        },
        {
          "id": 11,
          "text": "Как просить близкого человека-предпринимателя?",
          "options": [
            "Проведите спокойное обсуждение ситуации, вместе придите к определенным договоренностям. Можно даже наглядно оформить их.",
            "Без всяких намеков, говорите четко и конкретно, что не так, и что нужно сделать.",
            "Просите искренне, не пытайтесь манипулировать. И сами старайтесь помогать ему, когда он к вам обращается.",
            "Обозначьте проблему и попросите партнера предложить разные идеи по ее решению."
          ],
          "correctAnswers": [3],
          "type": "singleChoice"
        },
        {
          "id": 12,
          "text": "Как просить близкого человека-интегратора?",
          "options": [
            "Проведите спокойное обсуждение ситуации, вместе придите к определенным договоренностям. Можно даже наглядно оформить их.",
            "Без всяких намеков, говорите четко и конкретно, что не так, и что нужно сделать.",
            "Просите искренне, не пытайтесь манипулировать. И сами старайтесь помогать ему, когда он к вам обращается.",
            "Обозначьте проблему и попросите партнера предложить разные идеи по ее решению."
          ],
          "correctAnswers": [2],
          "type": "singleChoice"
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