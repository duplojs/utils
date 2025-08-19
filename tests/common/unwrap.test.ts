import { unwrap } from "@scripts/common/unwrap";

it("unwrap", () => {
	expect(unwrap({ value: 1 })).toBe(1);
});
