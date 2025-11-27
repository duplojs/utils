import { N, O, DString } from "@duplojs/utils";

const input = {
	name: "alice",
	age: 30,
};
const result = O.transformProperties(
	input,
	{
		name: DString.toUpperCase,
		age: N.add(1),
	},
);
// result: { name: "ALICE", age: 31 }
