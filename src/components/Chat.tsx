import React, { useContext, useState } from "react";
import Input from "./Input";
import MessageList from "./MessageList";
import { ChatContext } from "@/Contexts/ChatContext";
import InputUserForChat from "./InputUserForChat";
import InputBotForChat from "./InputBotForChat";

export default function Chat() {
	const [name, setName] = useState<string>("");
	const [valueUser, setValueUser] = useState<string>("");
	const [valueBot, setValueBot] = useState<string>("");

	const ctx = useContext(ChatContext);
	if (ctx === null) return <p>Estamos sem chat Srry</p>;

	const addItem = (e: React.KeyboardEvent<HTMLInputElement>, isUser: boolean) => {
		if (e.key === "Enter") {
			if (isUser) {
				ctx.setChatHistory([...ctx.chatHistory, { name, message: valueUser, isBot: false }]);
				setValueUser("");
			} else {
				ctx.setChatHistory([...ctx.chatHistory, { message: valueBot, isBot: true }]);
				setValueBot("");
			}
		}
	};
	return (
		<div>
			{name === "" && <Input setName={setName} />}
			{name !== "" && (
				<div className="w-[600px] h-[600px] flex flex-col">
					<div className="min-h-full w-full border border-gray-500 rounded-t-md">
						<MessageList chatHistory={ctx.chatHistory} name={name} />
					</div>
					<InputUserForChat name={name} value={valueUser} setValue={setValueUser} func={addItem} />
					<InputBotForChat value={valueBot} setValue={setValueBot} func={addItem} />
				</div>
			)}
		</div>
	);
}
