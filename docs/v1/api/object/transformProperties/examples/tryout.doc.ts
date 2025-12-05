import { N, O, S } from "@duplojs/utils";

const input = {
	name: "alice",
	age: 30,
};
const result = O.transformProperties(
	input,
	{
		name: S.toUpperCase,
		age: N.add(1),
	},
);
// result: { name: "ALICE", age: 31 }
