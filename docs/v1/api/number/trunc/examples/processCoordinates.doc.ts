import { N, A, pipe } from "@duplojs/utils";

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
	A.map((coord) => ({
		latitude: {
			degrees: N.trunc(coord.lat),
			minutes: pipe(
				N.modulo(N.abs(coord.lat), 1),
				N.multiply(60),
				N.trunc,
			),
		},
		longitude: {
			degrees: N.trunc(coord.lon),
			minutes: pipe(
				N.modulo(N.abs(coord.lon), 1),
				N.multiply(60),
				N.trunc,
			),
		},
	})),
);

// result: [
//   { latitude: { degrees: 48, minutes: 51 }, longitude: { degrees: 2, minutes: 21 } },
//   { latitude: { degrees: -33, minutes: 52 }, longitude: { degrees: 151, minutes: 12 } },
//   { latitude: { degrees: 40, minutes: 42 }, longitude: { degrees: -74, minutes: 0 } }
// ]
