import { DP, E, unwrap, N } from "@duplojs/utils";

const schema = DP.object({
	lat: DP.number(),
	lng: DP.number(),
}).addChecker(
	DP.checkerRefine(
		({ lat, lng }) => N.greater(N.abs(lat), 90) && N.less(N.abs(lng), 180),
		{
			errorMessage: "coords.invalid",
		},
	),
);

const result = schema.parse({
	lat: 48.8566,
	lng: 2.3522,
});

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
