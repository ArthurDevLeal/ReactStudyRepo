interface InputUser {
	value: string;
	setValue: (value: string) => void;
	func: (e: React.KeyboardEvent<HTMLInputElement>, isUser: boolean) => void;
}
export default function InputBotForChat({ value, setValue, func }: InputUser) {
	return (
		<input
			type="text"
			placeholder={`bot, digite uma mensagem (e aperte enter)`}
			className="p-2 bg-black border border-gray-500 rounded-b-md text-white"
			onKeyDown={(e) => func(e, false)}
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
}
