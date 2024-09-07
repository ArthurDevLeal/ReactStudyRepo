"use client";
import { ThemeTypeCtx, Theme } from "@/types/ThemeType";
import { createContext, ReactNode, useEffect, useState } from "react";
const STORAGE_KEY = "themeKey";
export const ThemeCtx = createContext<ThemeTypeCtx | null>(null);

export default function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>((localStorage.getItem(STORAGE_KEY) as Theme) || "dark");
	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, theme);
	}, [theme]);

	return <ThemeCtx.Provider value={{ theme, setTheme }}>{children}</ThemeCtx.Provider>;
}
