import { DNumber, DArray, pipe } from "@duplojs/utils";

const coordinates = [
	{
		lat: 48.8566,
		lon: 2.3522,
	},
	{
		lat: -33.8688,
		lon: 151.2093,
	},
	{
		lat: 40.7128,
		lon: -74.0060,
	},
];

const result = pipe(
	coordinates,
	DArray.map((coord) => ({
		latitude: {
			degrees: DNumber.trunc(coord.lat),
			minutes: pipe(
				DNumber.modulo(DNumber.abs(coord.lat), 1),
				DNumber.multiply(60),
				DNumber.trunc,
			),
		},
		longitude: {
			degrees: DNumber.trunc(coord.lon),
			minutes: pipe(
				DNumber.modulo(DNumber.abs(coord.lon), 1),
				DNumber.multiply(60),
				DNumber.trunc,
			),
		},
	})),
);

// result: [
//   { latitude: { degrees: 48, minutes: 51 }, longitude: { degrees: 2, minutes: 21 } },
//   { latitude: { degrees: -33, minutes: 52 }, longitude: { degrees: 151, minutes: 12 } },
//   { latitude: { degrees: 40, minutes: 42 }, longitude: { degrees: -74, minutes: 0 } }
// ]
