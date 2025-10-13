import { simpleClone } from "@scripts";

it("simpleClone", () => {
	expect(simpleClone({
		prop1: null,
		prop2: [1, 2, 3],
		test: new Error("test"),
	})).toStrictEqual({
		prop1: null,
		prop2: [1, 2, 3],
		test: new Error("test"),
	});
});
