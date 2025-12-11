import { DClean, unwrap } from "@scripts";

describe("clean primitive number max", () => {
	const one = DClean.Number.createOrThrow(1);
	const two = DClean.Number.createOrThrow(2);
	const four = DClean.Number.createOrThrow(4);

	it("returns largest value", () => {
		expect(unwrap(DClean.max([one, two, four]))).toBe(4);
	});
});
