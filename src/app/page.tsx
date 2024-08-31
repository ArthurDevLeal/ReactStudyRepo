"use client";
import Header from "@/components/Header";
import { UserNameContext, UserNameCtx } from "@/contexts/userNameContext";
import { useContext, useState } from "react";

function Page() {
	const [value, setValue] = useState("");
	const userCtx = useContext(UserNameCtx);

	function handleClickChangeName() {
		userCtx?.setUserName(value);
	}
	function Page() {
		const [value, setValue] = useState("");
		const userCtx = useContext(UserNameCtx);

		function handleClickChangeName() {
			userCtx?.setUserName(value);
		}

		return (
			<div className="container mx-auto">
				<Header />
				<input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="text-black" />
				<button onClick={handleClickChangeName}>Alterar nome</button>
			</div>
		);
	}

	return (
		<UserNameContext>
			<div className="container mx-auto">
				<Header />
				<input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="text-black" />
				<button onClick={handleClickChangeName}>Alterar nome</button>
			</div>
		</UserNameContext>
	);
}

export default Page;
