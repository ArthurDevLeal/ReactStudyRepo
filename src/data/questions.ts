import { questionType } from "@/types/questionType";

export const questions: questionType[] = [
	{
		question: "Em qual elemento HTML nós colocamos o javascript?",
		options: ["tag js", "tag script", "tag scripting", "tag javascript"],
		answer: 1,
	},
	{
		question: "Onde é o local certo de colocar o javascript?",
		options: ["Na tag body", "Na tag head", "Tanto na tag body quanto a head estão corretas", "Na tag button"],
		answer: 2,
	},
	{
		question: "Qual a sintaxe correta para adicionar um arquivo javascript externo na tag script?",
		options: ['name="xxx.js"', 'src="xxx.js"', 'href="xxx.js"', 'js="xxx.js"'],
		answer: 1,
	}
];
