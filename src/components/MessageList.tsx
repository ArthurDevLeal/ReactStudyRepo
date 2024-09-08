import { ChatHistoryType } from "@/Contexts/ChatContext";
import { useEffect, useRef } from "react";

export default function MessageList({ chatHistory, name }: { chatHistory: ChatHistoryType[]; name: string }) {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			const scrollToBottom = () => {
				containerRef.current?.scrollTo({
					top: containerRef.current.scrollHeight,
					behavior: "smooth",
				});
			};
			setTimeout(scrollToBottom, 0);
		}
	}, [chatHistory]);

	return (
		<div ref={containerRef} className="overflow-y-auto h-full flex flex-col gap-2 p-2 break-words scrollbar-hide">
			{chatHistory.map((item, index) => (
				<div
					key={index}
					className={`p-2 border border-gray-500 rounded-md text-sm ${
						item.isBot ? "bg-gray-700/50 self-start" : "bg-gray-600/50 self-end text-right"
					} w-fit max-w-[300px]`}>
					<h3 className="font-bold text-white">{item.isBot ? "Bot" : name}</h3>
					<p className="text-white">{item.message}</p>
				</div>
			))}
		</div>
	);
}
