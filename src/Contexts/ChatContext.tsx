import { createContext, ReactNode, useState } from "react";

export type ChatHistoryType = {
	name?: string;
	message: string;
	isBot: boolean;
};
type ChatContextType = {
	chatHistory: ChatHistoryType[];
	setChatHistory: (chatHistory: ChatHistoryType[]) => void;
};

export const ChatContext = createContext<ChatContextType | null>(null);

export default function ChatProvider({ children }: { children: ReactNode }) {
	const [chatHistory, setChatHistory] = useState<ChatHistoryType[]>([]);
	
	return <ChatContext.Provider value={{chatHistory,setChatHistory }}>{children}</ChatContext.Provider>;
}
