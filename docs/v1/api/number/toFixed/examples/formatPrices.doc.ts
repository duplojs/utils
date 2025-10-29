import { DNumber, DArray, pipe, innerPipe, DString } from "@duplojs/utils";

const prices = [19.5, 24.999, 15, 32.456];

const result = pipe(
	prices,
	DArray.map(
		innerPipe(
			DNumber.toFixed(2),
			DString.concat("€"),
		),
	),
);

// result: ["19.50€", "25.00€", "15.00€", "32.46€"]
