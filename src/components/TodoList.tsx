import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

export default function TodoList() {
	const [itemInput, setItemInput] = useState("");

	const [list, setList] = useState<TodoItem[]>([]);

	function addTodo() {
		if (itemInput.trim() !== "") {
			setList([...list, { id: list.length + 1, label: itemInput, checked: false }]);
			setItemInput("");
		}
	}

	function removeItem(id: number) {
		setList(
			list.filter((item) => {
				return item.id !== id;
			}),
		);
	}

	function toggleCheck(id: number) {
		let newArray = [...list];
		for (let i in newArray) {
			if (newArray[i].id === id) {
				newArray[i].checked = !newArray[i].checked;
			}
		}

		setList(newArray);
	}

	return (
		<main className="container flex flex-col justify-center items-center text-white mx-auto">
			<h1 className="text-4xl mt-5">Lista de Tarefas</h1>

			<div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-500">
				<input
					type="text"
					placeholder="O que deseja fazer?"
					className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
					value={itemInput}
					onChange={(e) => setItemInput(e.target.value)}
				/>
				<button onClick={addTodo}>Adicionar</button>
			</div>

			<p className="my-4">{list.length} itens na lista</p>

			<ul className="w-full max-w-lg list-disc pl-5">
				{list.map((item) => {
					return (
						<li key={item.id}>
							<input type="checkbox" checked={item.checked} className="w-6 h-6 mr-3" onClick={() => toggleCheck(item.id)} />
							{item.label}
							<button className="hover:underline ml-2" onClick={() => removeItem(item.id)}>
								[Deletar]
							</button>
						</li>
					);
				})}
			</ul>
		</main>
	);
}
