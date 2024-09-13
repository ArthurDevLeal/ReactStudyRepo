"use client";

import { useRef, useState } from "react";

function Page() {
	const [legendInput, setLegendInput] = useState("");
	const fileInputRef = useRef<HTMLInputElement>(null);
	const allowedImgs = ["image/jpeg", "image/png"];
	const handeFileSend = async () => {
		if (fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
			const fileItem = fileInputRef.current.files[0];
			if (allowedImgs.includes(fileItem.type)) {
				const data = new FormData();
				data.append("img", fileItem);
				data.append("legend", legendInput);
				const req = await fetch("https://jsonplaceholder.typicode.com/posts", {
					method: "POST",
					headers: {
						"Content-type": "multipart/form-data",
					},
					body: data,
				});
				const json = await req.json()
				console.log(json);
				
			} else {
				alert("Aqruivo incompativel");
			}
		}
		alert("Selecione um arquivo por favor!");
	};
	return (
		<div className="container mx-auto">
			<h1 className="text-3xl">Upload de imagem</h1>

			<div className="flex flex-col gap-3 max-w-md border border-dotted border-white p-3 mt-4">
				<input type="file" ref={fileInputRef} />
				<input
					type="text"
					placeholder="Digite uma legenda"
					className="p-3 bg-white rounded-md text-black"
					value={legendInput}
					onChange={(e) => setLegendInput(e.target.value)}
				/>
				<button onClick={handeFileSend}>Enviar imagem</button>
			</div>
		</div>
	);
}
export default Page;
