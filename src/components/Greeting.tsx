const hour = new Date().getHours();
function Greeting() {
	if (hour >= 0 && hour < 12) {
		return <>Bom dia😉</>;
	} else if (hour >= 12 && hour < 18) {
		return <>Boa tarde😎</>;
	} else {
		return <>Boa noite💀</>;
	}
}
export default Greeting;
