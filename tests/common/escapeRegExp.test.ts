import { escapeRegExp } from "@scripts";

it("escapeRegExp", () => {
	expect(new RegExp(escapeRegExp("/")).test("/")).toBe(true);
	expect(new RegExp(escapeRegExp("^")).test("^")).toBe(true);
});
