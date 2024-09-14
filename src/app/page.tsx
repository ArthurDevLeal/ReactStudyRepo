"use client";

import axios from "axios";
import { useRef, useState } from "react";

function Page() {
	const fileInput = useRef<HTMLInputElement>(null);
	async function handleSendFile() {
		if (fileInput.current?.files && fileInput.current.files.length > 0) {
			const file = fileInput.current.files[0];
			const data = new FormData();
			data.append("name", "file");
			data.append("file", file);
			const req = await axios.post("https://jsonplaceholder.typicicode/posts", data);
		}
	}
	return (
		<div className="container mx-auto">
			<input ref={fileInput} type="file" />
			<button onClick={handleSendFile}>Enviar</button>
		</div>
	);
}
export default Page;
