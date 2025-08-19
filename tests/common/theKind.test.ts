import { hasKind, theKind } from "@scripts/common/theKind";

describe("theKind", () => {
	it("theKind", () => {
		expect(theKind("test"))
			.toStrictEqual({ "kind-test": null });
	});

	it("hasKind", () => {
		expect(hasKind(null, "test")).toBe(false);

		expect(hasKind({ "kind-test": null }, "test")).toBe(true);
	});
});
