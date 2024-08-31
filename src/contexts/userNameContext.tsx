import { createContext, ReactNode, useState } from "react";

type UserType = {
	userName: string;
	setUserName: (userName: string) => void;
};

export const UserNameCtx = createContext<UserType | null>(null);

export function UserNameContext({ children }: { children: ReactNode }) {
	const [userName, setUserName] = useState("Arthur");
	return <UserNameCtx.Provider value={{ userName, setUserName }}>{children}</UserNameCtx.Provider>;
}
