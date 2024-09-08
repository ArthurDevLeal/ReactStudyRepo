interface InputUser {
	name: string;
	value: string;
	setValue: (value: string) => void;
	func: (e: React.KeyboardEvent<HTMLInputElement>, isUser: boolean) => void;
}
export default function InputUserForChat({ name, value, setValue, func }: InputUser) {
	return (
		<input
			type="text"
			placeholder={`${name}, digite uma mensagem (e aperte enter)`}
			className="p-2 bg-black border border-gray-500 text-white"
			onKeyDown={(e) => func(e, true)}
			value={value}
			onChange={(e) => setValue(e.target.value)}
		/>
	);
}
