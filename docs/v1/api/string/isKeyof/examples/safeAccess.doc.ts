import { A, DString, pipe } from "@duplojs/utils";

const input = ["id", "name", "role"];
const config = {
	id: 1,
	name: "admin",
};
const result = pipe(
	input,
	A.map(
		(key) => DString.isKeyof(key, config) ? config[key] : null,
	),
);
// result: [1, "admin", null]
