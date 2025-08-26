import { hasKind, createKind } from "@scripts/common/kind";

describe("theKind", () => {
	it("theKind", () => {
		expect(createKind("test"))
			.toStrictEqual({ "kind-test": null });
	});

	it("hasKind", () => {
		expect(hasKind(null, "test")).toBe(false);

		expect(hasKind({ "kind-test": null }, "test")).toBe(true);
	});
});
