import { DClean, unwrap } from "@scripts";

describe("clean primitive number min", () => {
	const one = DClean.Number.createOrThrow(1);
	const two = DClean.Number.createOrThrow(2);
	const four = DClean.Number.createOrThrow(4);

	it("returns smallest value", () => {
		expect(unwrap(DClean.min([four, two, one]))).toBe(1);
	});
});
