import { Item } from "@/types/Item";

type AddAction = {
	type: "add";
	payload: { text: string };
};
type EditTextAction = {
	type: "edit";
	payload: { id: number; newText: string };
};
type ToggleDoneAction = {
	type: "toggleDone";
	payload: { id: number };
};
type RemoveItemAction = {
	type: "remove";
	payload: { id: number };
};

type ListActions = AddAction | EditTextAction | ToggleDoneAction | RemoveItemAction;
export function listReducer(list: Item[], action: ListActions) {
	switch (action.type) {
		case "add":
			return [...list, { id: list.length, text: action.payload.text, done: false }];
		case "edit":
			return list.map((item) => {
				if (item.id === action.payload.id) {
					item.text = action.payload.newText;
				}
				return item;
			});
		case "remove":
			return list.filter((item) => item.id !== action.payload.id);
		case "toggleDone":
			return list.map((item) => {
				if (item.id === action.payload.id) {
					return { ...item, done: !item.done };
				}
				return item;
			});
		default:
			return list;
	}
}
