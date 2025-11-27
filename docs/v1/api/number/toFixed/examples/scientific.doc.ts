import { A, N, pipe } from "@duplojs/utils";

const measurements = [
	{
		name: "Temperature",
		value: 23.456789,
		precision: 1,
	},
	{
		name: "Pressure",
		value: 1013.25678,
		precision: 2,
	},
	{
		name: "Humidity",
		value: 65.432,
		precision: 0,
	},
	{
		name: "pH",
		value: 7.385,
		precision: 2,
	},
];

const result = pipe(
	measurements,
	A.map(({ name, precision, value }) => ({
		name,
		formatted: N.toFixed(value, precision),
	})),
);

// result: [
//   { name: "Temperature", formatted: "23.5" },
//   { name: "Pressure", formatted: "1013.26" },
//   { name: "Humidity", formatted: "65" },
//   { name: "pH", formatted: "7.39" }
// ]
