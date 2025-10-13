import { clone } from "@scripts";

it("clone", () => {
	expect(
		clone({
			prop1: null,
			prop2: [1, 2, 3],
		}),
	).toStrictEqual({
		prop1: null,
		prop2: [1, 2, 3],
	});
});
