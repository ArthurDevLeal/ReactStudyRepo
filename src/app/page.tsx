"use client";

import { useEffect, useState } from "react";

function Page() {
	const [clock, setClock] = useState("00:00:00");

	useEffect(() => {
		setInterval(() => {
			const date = new Date();
			const formattedDateTime = new Intl.DateTimeFormat("pt-BR", {
				hour: "numeric",
				minute: "numeric",
				second: "numeric",
				hour12: false, // Usa o formato 24 horas
			}).format(date);
			setClock(formattedDateTime);
		}, 1000);

	}, []);

	return (
		<main className="h-full flex justify-center items-center">
			<div className="bg-gray-900 w-auto inline-block p-6 rounded-xl shadow-lg">
				<div className="text-5xl font-bold text-blue-400 font-mono flex justify-center items-center space-x-2">
					<p className="text-blue-300">{clock}</p>
				</div>
			</div>
		</main>
	);
}
export default Page;
