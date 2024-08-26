export const date = new Intl.DateTimeFormat("pt-br", {
	timeStyle: "short",
	hour12: false,
}).format();

function Clock() {
	return <>{date} </>;
}
export default Clock;
