export function atan2<
	GenericAxisY extends number,
>(axisX: number): (axisY: GenericAxisY) => number;

export function atan2<
	GenericAxisY extends number,
>(axisY: GenericAxisY, axisX: number): number;

export function atan2(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [axisX] = args;
		return (axisY: number) => atan2(axisY, axisX);
	}

	const [axisY, axisX] = args;

	return Math.atan2(axisY, axisX);
}
