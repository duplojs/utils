import { memo } from "@scripts/common";

it("memo", () => {
	const getter = vi.fn(() => 1);

	const memoizedValue = memo(getter);

	expect(memoizedValue.value).toBe(1);
	expect(memoizedValue.value).toBe(1);
	expect(memoizedValue.value).toBe(1);
	expect(getter).toBeCalledTimes(1);
});
