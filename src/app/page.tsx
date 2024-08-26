"use client";
import Question from "@/components/Question";
import { useState } from "react";
import { questions } from "@/data/questions";
function page() {
	const [answers, setAnswers] = useState<number[]>([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showResult, setShowResult] = useState(false);

	function handleAnswered(answer: number) {
		setAnswers([...answers, answer]);
		loadNextQuestion();
	}

	function loadNextQuestion() {
		if (questions[currentQuestion + 1]) {
			setCurrentQuestion(currentQuestion + 1);
		} else {
			setShowResult(true);
		}
	}
	function restart(){
		setShowResult(false)
		setCurrentQuestion(0)
		setAnswers([])
	}
	return (
		<main className="bg-white  rounded-md shadow-md min-w-[500px] max-w-[600px]">
			{showResult === false && (
				<>
					<h1 className="text-3xl p-4 border-b border-b-gray-500/50 font-bold">Quiz de Javascript</h1>

					<Question question={questions[currentQuestion]} index={currentQuestion} onAnswer={handleAnswered} />
					<div className="border-t border-t-gray-500/50 text-center p-4">
						<p>
							{currentQuestion + 1} de {questions.length} perguntas
						</p>
					</div>
				</>
			)}
			{showResult && (
				<>
					<h1 className="text-3xl p-4 border-b border-b-gray-500/50 font-bold">Quiz de Javascript</h1>
					<ul className="list-none p-4 flex flex-col gap-2">
						{answers.map((item, index) => {
							return (
								<>
									<div
										className={`bg-sky-200 border rounded-md p-2 ${
											item === questions[index].answer ? "bg-green-200 border-green-400" : "bg-red-200 border-red-400"
										}`}>
										<li>{questions[index].question}</li> <p>{item === questions[index].answer ? "Correto" : "Incorreta"}</p>
									</div>
								</>
							);
						})}
					</ul>
					<div className="border-t border-t-gray-500/50 text-center p-4 ">
						<button className="bg-blue-700 p-2 text-white rounded-md w-fit" onClick={restart}>Reinciar Quiz</button>
					</div>
				</>
			)}
			
		</main>

	);
}

export default page;
