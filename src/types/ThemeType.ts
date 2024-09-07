export type Theme = "light" | "dark";

export type ThemeTypeCtx = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};
