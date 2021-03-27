import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			id: '1',
			questionText: 'You give 1/3 of a pan of brownies to Susan and 1/6 of the pan of brownies to Patrick. How much pan of brownies did you give away?',
			answerOptions: [
				{ id: '11', answerText: '1/6', isCorrect: false, isAnswer: false },
				{ id: '12', answerText: '1/4', isCorrect: false, isAnswer: false },
				{ id: '13', answerText: '1/2', isCorrect: true, isAnswer: false },
				{ id: '14', answerText: '1/18', isCorrect: false, isAnswer: false },
			],
			image: "/q-1.png"
		},
		{
			id: '2',
			questionText: 'Marty made two types of cookies. He used 2/3 cup of sugar for one recipe and ¼ cup of sugar for the other. How much sugar did he use in all?',
			answerOptions: [
				{ id: '21', answerText: '3/7', isCorrect: false, isAnswer: false },
				{ id: '22', answerText: '11/12', isCorrect: true, isAnswer: false },
				{ id: '23', answerText: '13/15', isCorrect: false, isAnswer: false },
				{ id: '24', answerText: '43/15', isCorrect: false, isAnswer: false },
			],
			image: "/q-2.png"
		},
		{
			id: '3',
			questionText: 'There were two cheesecakes in the fridge. The first cheesecake was cut into 16 slices and there are 3 slices left. The other cheesecake was cut into 10 slices and 4 slices were sold. How much cake is left in the fridge?',
			answerOptions: [
				{ id: '31', answerText: '7/26', isCorrect: false, isAnswer: false },
				{ id: '32', answerText: '9', isCorrect: false, isAnswer: false },
				{ id: '33', answerText: '63/80', isCorrect: true, isAnswer: false },
				{ id: '34', answerText: '3/4', isCorrect: false, isAnswer: false },
			],
			image: "/q-3.png"
		},
		{
			id: '4',
			questionText: 'Maria spent 1/3 of the money her grandparents gave her on an adventure book. She also spent 1/9 of the money on a bag of candy. What fraction of the payment has Maria spent?',
			answerOptions: [
				{ id: '41', answerText: '2/27', isCorrect: false, isAnswer: false },
				{ id: '42', answerText: '1/6', isCorrect: false, isAnswer: false },
				{ id: '44', answerText: '1/27', isCorrect: false, isAnswer: false },
				{ id: '43', answerText: '4/9', isCorrect: true, isAnswer: false },
			],
			image: "/q-4.png"
		},
		{
			id: '5',
			questionText: 'The capacity of the two milk pitchers on the counter is 9/10 liter each. One pitcher has 3/8 of a liters of milk in it and the other pitcher has 5/12 of a liter milk in it. How much milk is there altogether?',
			answerOptions: [
				{ id: '53', answerText: '19/24', isCorrect: true, isAnswer: false },
				{ id: '51', answerText: '15/96', isCorrect: false, isAnswer: false },
				{ id: '52', answerText: '2/5', isCorrect: false, isAnswer: false },
				{ id: '54', answerText: '19/23', isCorrect: false, isAnswer: false },
			],
			image: "/q-5.png"
		},
		{
			id: '6',
			questionText: 'There were 3 1/2 of bags of flour in the kitchen. 4 1/2 bags of flour were delivered. How many bags of flour are there in total? ',
			answerOptions: [
				{ id: '61', answerText: '18/4', isCorrect: false, isAnswer: false },
				{ id: '62', answerText: '15/2', isCorrect: false, isAnswer: false },
				{ id: '63', answerText: '8', isCorrect: true, isAnswer: false },
				{ id: '64', answerText: '9/5', isCorrect: false, isAnswer: false },
			],
			image: "/q-6.png"
		},
		{
			id: '7',
			questionText: 'There are size pieces of pizza. Justin ate 2/6 of the pizza for dinner. He ate 1/16 of the pizza for a bedtime snack. How much of the pizza has he eaten in all?',
			answerOptions: [
				{ id: '73', answerText: '19/48', isCorrect: true, isAnswer: false },
				{ id: '71', answerText: '3/22', isCorrect: false, isAnswer: false },
				{ id: '72', answerText: '1/48', isCorrect: false, isAnswer: false },
				{ id: '74', answerText: '3/16', isCorrect: false, isAnswer: false },
			],
			image: "/q-7.png"
		},
		{
			id: '8',
			questionText: 'A baby otter was born 3/4 of a month early. At birth, its weight was 7/8 kilograms, which is 9 /10 kilogram less than the average weight of newborn otter in the aquarium. What is the average weight of newborn otter?',
			answerOptions: [
				{ id: '81', answerText: '1/5', isCorrect: false, isAnswer: false },
				{ id: '82', answerText: '68/80', isCorrect: false, isAnswer: false },
				{ id: '84', answerText: '16/10', isCorrect: false, isAnswer: false },
				{ id: '83', answerText: '1 31/40', isCorrect: true, isAnswer: false },
			],
			image: "/q-8.png"
		},
		{
			id: '9',
			questionText: 'The penguin nursery is open two times a day: 2/3 hour at noon and 5/12 hour in the afternoon. How much time is the penguin nursery open every day?',
			answerOptions: [
				{ id: '91', answerText: '7/15', isCorrect: false, isAnswer: false },
				{ id: '92', answerText: '1 1/12', isCorrect: true, isAnswer: false },
				{ id: '93', answerText: '10/39', isCorrect: false, isAnswer: false },
				{ id: '94', answerText: '10/12', isCorrect: false, isAnswer: false },
			],
			image: "/q-9.png"
		},
		{
			id: '10',
			questionText: 'There are two identical fridges for desserts. One of the fridge has 5/8 of its room left and the other fridge is only 1/8 full. How much room is left?',
			answerOptions: [
				{ id: '101', answerText: '3/2', isCorrect: false, isAnswer: false },
				{ id: '103', answerText: '12/8', isCorrect: false, isAnswer: false },
				{ id: '104', answerText: '35/64', isCorrect: false, isAnswer: false },
				{ id: '102', answerText: '1 1/2', isCorrect: true, isAnswer: false },
			],
			image: "/q-10.png"
		},
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [showInstructions, setShowInstructions] = useState(false);
	const [showPlayInstructions, setShowPlayInstructions] = useState(false);
	const [showInteractiveCalculator, setshowInteractiveCalculator] = useState(false);
	const [score, setScore] = useState(0);
	const [list, setList] = useState(questions);

	const handleAnswerOptionClick = (answerOptionI, list) => {
		if (answerOptionI.isCorrect) {
			setScore(score + 1);
		}
		list[currentQuestion].answerOptions.forEach((answerOption, index) => {
			if(answerOption.id === answerOptionI.id){
				answerOption.isAnswer = true;
			}else{
				answerOption.isAnswer = false;
			}
		});
		
		setList(list);

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < list.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};


	const showInstructionsClick = (event) =>{
		setShowPlayInstructions(false);
		setshowInteractiveCalculator(false);
		setShowInstructions(true);
		document.getElementById('showPlayInstructions').classList.remove('active');
		document.getElementById('showInstructions').classList.remove('active');
		document.getElementById('showInteractiveCalculator').classList.remove('active');
		event.target.classList.add('active');
	};

	const showPlayInstructionsClick = (event) =>{
		setShowInstructions(false);
		setshowInteractiveCalculator(false);
		setShowPlayInstructions(true);
		document.getElementById('showPlayInstructions').classList.remove('active');
		document.getElementById('showInstructions').classList.remove('active');
		document.getElementById('showInteractiveCalculator').classList.remove('active');
		event.target.classList.add('active');
	};

	const showInteractiveCalculatorClick = (event) =>{
		setShowInstructions(false);
		setShowPlayInstructions(false);
		setshowInteractiveCalculator(true);
		document.getElementById('showPlayInstructions').classList.remove('active');
		document.getElementById('showInstructions').classList.remove('active');
		document.getElementById('showInteractiveCalculator').classList.remove('active');
		event.target.classList.add('active');
	};

	const nextQuestionClick = (currentQuestion) => {
		const nextQuestion = currentQuestion + 1;
		setCurrentQuestion(nextQuestion);
	};

	const prevQuestionClick = (currentQuestion) => {
		const prevQuestion = currentQuestion - 1;
		setCurrentQuestion(prevQuestion);
	};
	return (
		<div className='app'>
			<header>
				<div className="container">
					<nav className="navbar sticky-top navbar-light">
						<a class="navbar-brand" href="/"><img src={'/logo512-n.png'} alt="logo" /></a>

						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNavDropdown">
							<ul class="navbar-nav">
								<li class="nav-item">
									<span className="nav-link" id="showInstructions" onClick={(e) => showInstructionsClick(e)}>How to Solve Fractions</span>
								</li>
								<li class="nav-item">
									<span className="nav-link" id="showPlayInstructions" onClick={(e) => showPlayInstructionsClick(e)}>How to Play</span>
								</li>
								<li class="nav-item">
									<span className="nav-link" id="showInteractiveCalculator" onClick={(e) => showInteractiveCalculatorClick(e)}>Interactive Calculator</span>
								</li>
							</ul>
						</div>

						{/* <span className="navbar-text ml-auto d-sm-inline-block" id="showInstructions" onClick={(e) => showInstructionsClick(e)}>How to Solve Fractions</span>
						<span className="navbar-text d-sm-inline-block" id="showPlayInstructions" onClick={(e) => showPlayInstructionsClick(e)}>How to Play</span> */}
					</nav>
				</div>
			</header>
			<div className='my-auto'>
				<div className="container">
					<div className={"instructionsDiv " + (showInstructions ? 'show' : 'hidden') }>
						<div className='score-section'>
							<h3 className="mt-3 font-theme">How to Solve Fractions</h3> <br></br>
							<div className="row">
								<div className="col-sm-6">
									<img className="img-fluid" src={'/how-to-step-1.png'} alt="step1" width="500" />
								</div>
								<div className="col-sm-6">
									<img className="img-fluid" src={'/how-to-step-2.png'} alt="step2" width="500"/>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-6">
									<img className="img-fluid" src={'/how-to-step-3.png'} alt="step3" width="500" />
								</div>
								<div className="col-sm-6">
									<img className="img-fluid" src={'/how-to-step-4.png'} alt="step4" width="500"/>
								</div>
							</div> 
							<br></br>
							<center>
								<a className="btn-link" href="/">PLAY NOW!</a>
							</center>
						
						</div>
					</div>

					<div className={"interactiveDiv " + (showInteractiveCalculator ? 'show' : 'hidden') }>
						<div className='score-section'>
							<h3 className="mt-3 font-theme">Interactive Calculator</h3> <br></br>

							<center>
								<embed className="embed-class" type="text/html" src="https://www.dadsworksheets.com/fraction-calculator-iframe.html#VX1X4-adding-VX3X8" width="700" height="530"/>
							</center>
							<br></br>
							<center>
								<a className="btn-link" href="/">PLAY NOW!</a>
							</center>
						
						</div>
					</div>


					<div className={"playInstructionsDiv " + (showPlayInstructions ? 'show' : 'hidden')}>
						<div className='score-section'>
							<h3 className="mt-5 font-theme">How to Play</h3> <br></br>
							<div className="d-flex justify-content-center">
								<ol className="how-to-list">
									<li>There is a menu button on the rightmost part of the screen. It's a list of Instruction Navigation. "How to Solve Fractions" will provide a guide or mini lesson review. "How to Play", it will be a quick guide on how you can use the application</li>
									<li>The Header span inside the Question Pane, "Question 1/10" , it is the counter or indicator in which what question now are you currently in.</li>
									<li>To submit your answer, just click the button so you'll be able to proceed with the next question</li>
									<li>On the bottom part, there are 2 buttons "Next Question" and "Previous Question" which will navigate through the questions</li>
								</ol>
							</div>
							<center>
								<a className="btn-link" href="/">PLAY NOW!</a>
							</center>
						
						</div>
					</div>

					<div className={"gameDiv " + (showInstructions || showPlayInstructions || showInteractiveCalculator ? 'hidden' : 'show') }>
						{showScore ? (
							<div className='score-section'>
								<h1 className="mt-5">You scored <span className="score">{score}</span> out of {questions.length}</h1>
								<br />
								<a className="btn-link" href="/">Play Again</a>
							</div>
						) : (
							<>
								<br></br>
								<br></br>

								<div className='question-section'>
									<div className='question-count'>
										<span>QUESTION <span className="currentQuestion">{currentQuestion + 1}</span></span>/{questions.length}
									</div> ~<br />
									<div className='question-text'>
										<span className="question-span">
											{list[currentQuestion].questionText}
										</span>
									</div>
								</div>~<br />
								<center>
									<img className="img-fluid" src={list[currentQuestion].image} alt="logo" width="500" />
								</center>~<br />
								<div className="answers-list">
									<div className='answer-section'>
										{list[currentQuestion].answerOptions.map((answerOption) => (
											<button className={(answerOption.isAnswer ? 'active' : '')} onClick={() => handleAnswerOptionClick(answerOption, list)}>{answerOption.answerText}</button> 
										))}
									</div>
								</div>~<br />
								<div className="options-section">
									{currentQuestion !== 0 &&
										<span className="previousBtn" onClick={() => prevQuestionClick(currentQuestion)}>{"<"} PREVIOUS QUESTION</span>
									}
									
									{currentQuestion !== 9 &&
										<span className="nextBtn" onClick={() => nextQuestionClick(currentQuestion)}>NEXT QUESTION {">"}</span>
									}
								</div>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
