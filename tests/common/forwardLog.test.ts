import { forwardLog, type ExpectType } from "@scripts";

it("forwardLog logs and forwards the received value", () => {
	const spy = vi.spyOn(console, "log").mockImplementation(() => {});
	const value = { foo: "bar" } as const;

	const result = forwardLog(value);

	expect(result).toBe(value);
	expect(spy).toHaveBeenCalledTimes(1);
	expect(spy).toHaveBeenCalledWith(value);

	type check = ExpectType<
		typeof result,
		typeof value,
		"strict"
	>;

	spy.mockRestore();
});
