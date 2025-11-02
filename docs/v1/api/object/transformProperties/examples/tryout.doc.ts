import { DNumber, DObject, DString } from "@duplojs/utils";

const input = {
	name: "alice",
	age: 30,
};
const result = DObject.transformProperties(
	input,
	{
		name: DString.toUpperCase,
		age: DNumber.add(1),
	},
);
// result: { name: "ALICE", age: 31 }
