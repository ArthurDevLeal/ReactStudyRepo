"use client";

import { useState } from "react";
import { TodoType } from "@/types/TodoType";
function Page() {
	const [value, setValue] = useState("");
	const [todoList, setTodoList] = useState<TodoType[]>([]);
	const [count, setCount] = useState(0);
	function handleSubmit() {
		if (value !== "") {
			setTodoList([...todoList, { label: value, id: todoList.length, check: false }]);
			setValue("");
		}
	}
	function removeTodo(id: number) {
		let newList = todoList.filter((item) => {
			return item.id !== id ? true : false;
		});
		setTodoList(newList);

		const itemToRemove = todoList.find((item) => {
			return item.id === id;
		});
		itemToRemove && itemToRemove.check ? setCount(count - 1) : setCount(count);
	}
	function updateCheck(id: number) {
		let arr = [...todoList];
		arr.forEach((item) => {
			if (item.id === id) {
				item.check = !item.check;
				item.check ? setCount(count + 1) : setCount(count - 1);
			}
		});
		setTodoList(arr);
	}
	function checkKey(e: string) {
		if (e === "Enter") {
			handleSubmit();
		}
	}
	return (
		<main className="text-center mt-8">
			<h1 className="text-white text-4xl font-bold mb-2">Lista de tarefas</h1>
			<input type="text" className="rounded-md p-2" value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => checkKey(e.key)} />
			<button className="bg-white rounded-md px-4 py-2 ml-2 hover:bg-white/80" onClick={handleSubmit}>
				Enviar
			</button>
			<p className="text-white mt-4 text-xl">
				{count} concluidas de {todoList.length} tarefas
			</p>
			<ul className="mt-2">
				{todoList.length > 0 &&
					todoList.map((item) => {
						return (
							<li key={item.id} className="bg-white px-4 py-2 min-w-48 max-w-96 mx-auto text-black truncate text-left rounded-md mb-2">
								<input type="checkbox" className="mr-2" checked={item.check} onClick={() => updateCheck(item.id)} />
								<button className="bg-red-400 rounded-md px-1 mr-2" onClick={() => removeTodo(item.id)}>
									X
								</button>
								{item.label}
							</li>
						);
					})}
			</ul>
		</main>
	);
}
export default Page;
