"use client";
import { Item } from "@/types/Item";
import { useState } from "react";
function Page() {
	const [list, setList] = useState<Item[]>([]);

	function addNewItem(text: string) {
		setList([...list, { id: list.length, text, done: false }]);
	}

	function editItem(id: number, newText: string) {
		setList(
			list.map((item) => {
				if (item.id === id) item.text = newText;
				return item;
			}),
		);
	}
	
	function toggleDoneItem(id: number) {
		setList(
			list.map((item) => {
				if (item.id === id) item.done = !item.done;
				return item;
			}),
		);
	}

	function removeItem(id: number) {
		setList(list.filter((item) => item.id !== id));
	}

	return <div className=""></div>;
}
export default Page;
