import { questionType } from "@/types/questionType";
import { useState } from "react";

type Prop = {
	question: questionType;
	index: number;
	onAnswer: (answer: number) => void;
};

export default function Question({ question, index, onAnswer }: Prop) {
	const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

	function checkQuestion(key: number) {
		if (selectedAnswer === null) {
			setSelectedAnswer(key);
			setTimeout(() => {
				onAnswer(key);
				setSelectedAnswer(null);
			}, 1);
		}
	}
	let count = 0;

	return (
		<>
			<h2 className="text-4xl p-4 font-bold">
				{index + 1}. {question.question}{" "}
			</h2>

			<ul className="p-4 flex flex-col gap-2">
				{question.options.map((item, key) => {
					let backgroundColor = "bg-sky-200";
					let borderColor = "border-sky-400";
					return (
						<li
							className={`${backgroundColor} ${borderColor} p-2 rounded-md border active:bg-sky-300 
                                ${selectedAnswer !== null ? "cursor-auto" : "cursor-pointer hover:opacity-70"}`}
							onClick={() => checkQuestion(key)}
							key={key}>
							{item}
						</li>
					);
				})}
			</ul>
		</>
	);
}
