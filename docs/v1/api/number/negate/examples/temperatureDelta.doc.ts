import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

const temperatureChanges = [5, -3, 8, -2];
const currentTemp = 20;

const result = pipe(
	temperatureChanges,
	DArray.map(DNumber.negate),
	DArray.map(
		innerPipe(
			DNumber.add(currentTemp),
		),
	),
);

// result: [15, 23, 12, 22]
// Application des changements inversés à partir de 20°C
