import { O, pipe, when } from "@scripts";

const partialObj: {
	name?: string;
	age?: number;
} = {
	name: "Ada",
};

if (O.hasKeys(partialObj, "name")) {
	// partialObj has key "name"
}

pipe(
	partialObj,
	when(
		O.hasKeys(
			[
				"name",
				"age",
			], // and
		),
		(value) => {
			// value has both keys
		},
	),
);
