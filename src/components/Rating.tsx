type RatingProp = {
	rate: number;
};

function makeEmoji(rate: number) {
	let emoji = "";

	if (rate >= 0 && rate <= 1) emoji = "😑";
	if (rate > 1 && rate <= 2) emoji = "😀";
	if (rate > 2) emoji = "😎";

	return emoji;
}

function fixRate(rate: number) {
	if (rate > 5) rate = 5;
	if (rate < 0) rate = 0;

	return rate;
}

export default function Rating({ rate }: RatingProp) {
	rate = fixRate(rate);

	let emoji = makeEmoji(rate);
	let rateCount = emoji.repeat(rate) + "😶".repeat(Math.ceil(5 - rate));

	return (
		<h1 className="text-white">
			{rate.toFixed(1)}
			{rateCount}
		</h1>
	);
}
