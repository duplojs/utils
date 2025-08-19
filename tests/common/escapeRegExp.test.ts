import { escapeRegExp } from "@scripts/common/escapeRegExp";

it("escapeRegExp", () => {
	expect(new RegExp(escapeRegExp("/")).test("/")).toBe(true);
	expect(new RegExp(escapeRegExp("^")).test("^")).toBe(true);
});
