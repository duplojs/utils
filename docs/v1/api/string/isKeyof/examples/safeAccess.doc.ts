import { DArray, DString, pipe } from "@duplojs/utils";

const input = ["id", "name", "role"];
const config = {
	id: 1,
	name: "admin",
};
const result = pipe(
	input,
	DArray.map(
		(key) => DString.isKeyof(key, config) ? config[key] : null,
	),
);
// result: [1, "admin", null]
