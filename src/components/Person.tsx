import { StudentType } from "@/types/StudentType";
import ActiveStatus from "@/components/ActiveStatus";

export default function Person({ id, active, avatar, email, grade1, grade2, name }: StudentType) {
	let finalGrade = finalGradeCalc(grade1, grade2, active);

	return (
		<tr className="bg-gray-200 border border-b-black">
			<th className="flex items-center p-4">
				<img src={avatar} alt="#" className="w-16 rounded-full" />
				<div className="flex flex-col text-left ml-4">
					<span className="font-bold">{name}</span>
					{email}
				</div>
			</th>
			<td>
				<ActiveStatus status={active} />
			</td>
			<td>{grade1}</td>
			<td>{grade2}</td>
			<td>{finalGrade}</td>
		</tr>
	);
}
function finalGradeCalc(grade1: number, grade2: number, active: boolean) {
	if (active) {
		return ((grade1 + grade2) / 2).toFixed(1);
	}
	return "--";
}
