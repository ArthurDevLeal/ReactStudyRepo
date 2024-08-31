"use client";
import { listReducer } from "@/reducers/listReducer";
import { Item } from "@/types/Item";
import { useState, useReducer } from "react";
function Page() {
	const [list, dispatch] = useReducer(listReducer, []);
	const [value, setValue] = useState("");

	function handleClickBtnAdd() {
		if (value.trim() !== "") {
			dispatch({
				type: "add",
				payload: { text: value.trim() },
			});
			setValue("");
		}
	}
	function handleClickBtnRemove(id: number) {
		if (!confirm("Tem certeza que deseja excluir?")) return false;
		dispatch({
			type: "remove",
			payload: { id },
		});
	}
	function handleClickBtnEdit(id: number) {
		const item = list.find((item) => item.id === id);
		if (!item) return false;
		let newText = prompt("Qual o novo texto?", item.text);
		if (newText !== null) {
			dispatch({
				type: "edit",
				payload: { id, newText },
			});
		}
	}
	function handleClickBtnDone(id: number) {
		dispatch({
			type: "toggleDone",
			payload: { id },
		});
	}
	return (
		<div className="h-full flex flex-col items-center mt-4">
			<h1 className="text-5xl text-white font-bold">Todo list</h1>
			<div className="bg-white p-2 rounded-md">
				<input type="text" placeholder="Adicione um item" className=" text-black" value={value} onChange={(e) => setValue(e.target.value)} />
				<button className="ml-2" onClick={handleClickBtnAdd}>
					Adicionar
				</button>
			</div>
			<ul>
				{list.length > 0 &&
					list.map((item) => {
						return (
							<li key={item.id} className={`text-black ${item.done ? "bg-green-300 line-through" : "bg-white"} p-2 rounded-md w-[400px] mt-4 truncate`}>
								<button className="bg-red-300 px-1 rounded-md" onClick={() => handleClickBtnRemove(item.id)}>
									X
								</button>
								<button className="mx-2 underline bg-blue-300 px-1 rounded-md" onClick={() => handleClickBtnEdit(item.id)}>
									Edit
								</button>
								<button className="mr-2 px-1 rounded-md" onClick={() => handleClickBtnDone(item.id)}>
									{item.done ? "✔️" : "❌"}
								</button>
								{item.text}
							</li>
						);
					})}
			</ul>
		</div>
	);
}
export default Page;
