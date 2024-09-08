import { useState } from "react";

interface InputProps {
	setName: (name: string) => void;
}

export default function Input({ setName }: InputProps) {
	const [value, setValue] = useState("");
	return (
		<div className="flex gap-2 items-end">
			<div className="flex flex-col mt-8">
				<label htmlFor="inputText" className="text-white">
					Qual seu nome?
				</label>
				<input
					type="text"
					name="inputText"
					placeholder="Digite seu nome de usuário"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					className="bg-gray-900 py-4 pl-1 pr-7 rounded-md border text-white border-gray-500"
				/>
			</div>
			<button onClick={() => setName(value)} className="bg-gray-900 p-4 rounded-md border border-gray-500 text-white">
				Enviar nome
			</button>
		</div>
	);
}
