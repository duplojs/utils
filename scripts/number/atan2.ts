export function atan2(axisX: number): (axisY: number) => number;

export function atan2(axisY: number, axisX: number): number;

export function atan2(...args: [number] | [number, number]) {
	if (args.length === 1) {
		const [axisX] = args;
		return (axisY: number) => atan2(axisY, axisX);
	}

	const [axisY, axisX] = args;

	return Math.atan2(axisY, axisX);
}
