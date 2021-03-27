import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Evaluate 1/15 + 4/5',
			answerOptions: [
				{ answerText: '5/20', isCorrect: false },
				{ answerText: '1/4', isCorrect: false },
				{ answerText: '13/15', isCorrect: true },
				{ answerText: '43/15', isCorrect: false },
			],
		},
		{
			questionText: 'Add the fractions 2/7 + 13/28',
			answerOptions: [
				{ answerText: '3/7', isCorrect: false },
				{ answerText: '3/4', isCorrect: true },
				{ answerText: '15/35', isCorrect: false },
				{ answerText: '22/28', isCorrect: false },
			],
		},
		{
			questionText: 'Determine the value of 5/21 + 1/3',
			answerOptions: [
				{ answerText: '4/7', isCorrect: true },
				{ answerText: '6/24', isCorrect: false },
				{ answerText: '1/4', isCorrect: false },
				{ answerText: '12/21', isCorrect: false },
			],
		},
		{
			questionText: '2/14 + 5/24',
			answerOptions: [
				{ answerText: '7/68', isCorrect: false },
				{ answerText: '4/16', isCorrect: false },
				{ answerText: '10/38', isCorrect: false },
				{ answerText: '59/168', isCorrect: true },
			],
		},
		{
			questionText: '3/5 + 3/8',
			answerOptions: [
				{ answerText: '19/20', isCorrect: false },
				{ answerText: '39/40', isCorrect: true },
				{ answerText: '6/13', isCorrect: false },
				{ answerText: '9/40', isCorrect: false },
			],
		},
		{
			questionText: 'Determine the value of 2/12 + 2/4',
			answerOptions: [
				{ answerText: '4/48', isCorrect: false },
				{ answerText: '1/4', isCorrect: false },
				{ answerText: '2/3', isCorrect: true },
				{ answerText: '1/12', isCorrect: false },
			],
		},
		{
			questionText: 'Add the fractions 2/7 + 1/4',
			answerOptions: [
				{ answerText: '2/14', isCorrect: false },
				{ answerText: '1/7', isCorrect: false },
				{ answerText: '3/11', isCorrect: false },
				{ answerText: '16/7', isCorrect: true },
			],
		},
		{
			questionText: 'Determine the value of 6/9 + 1/4',
			answerOptions: [
				{ answerText: '7/13', isCorrect: false },
				{ answerText: '1', isCorrect: true },
				{ answerText: '1/6', isCorrect: false },
				{ answerText: '6/36', isCorrect: false },
			],
		},
		{
			questionText: 'Add the fractions 1/4 + 2/5',
			answerOptions: [
				{ answerText: '21/15', isCorrect: false },
				{ answerText: '13/20', isCorrect: true },
				{ answerText: '2/97', isCorrect: false },
				{ answerText: '1/10', isCorrect: false },
			],
		},
		{
			questionText: '5/9 + 1/4',
			answerOptions: [
				{ answerText: '6/13', isCorrect: false },
				{ answerText: '29/13', isCorrect: false },
				{ answerText: '5/36', isCorrect: false },
				{ answerText: '29/36', isCorrect: true },
			],
		},
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
