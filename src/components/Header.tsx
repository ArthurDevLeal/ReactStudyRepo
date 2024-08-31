import { UserNameCtx } from "@/contexts/userNameContext";
import { useContext } from "react";

export default function Header() {
	const userCtx = useContext(UserNameCtx);
	return (
		<header>
			<h1>Ola, bem vindo</h1>
			<p>O seu nome de usuário é {userCtx?.userName}</p>
		</header>
	);
}
