import { memoObject, pipe, type ExpectType } from "@scripts";

describe("memoObject", () => {
	it("memoizes the getter and proxies get/set operations", () => {
		const getter = vi.fn(() => ({
			count: 1 as const,
		}));
		const result = memoObject(getter);

		expect(getter).not.toBeCalled();

		const firstCount = result.count;

		expect(firstCount).toBe(1);
		expect(getter).toBeCalledTimes(1);

		result.count = 2 as never;
		expect(result.count).toBe(2);
		expect(getter).toBeCalledTimes(1);

		type check = ExpectType<
			typeof firstCount,
			1,
			"strict"
		>;
	});

	it("exposes keys and descriptors through proxy traps", () => {
		const result = memoObject(() => ({
			foo: 1,
			bar: 2,
		}));

		expect("foo" in result).toBe(true);
		expect("missing" in result).toBe(false);
		expect(Object.keys(result)).toEqual(["foo", "bar"]);
		expect(Object.getOwnPropertyDescriptor(result, "foo")).toMatchObject({
			enumerable: true,
			configurable: true,
		});
	});

	it("keeps a memoized key list after keys have been read once", () => {
		const result = memoObject(() => ({
			foo: 1,
		} as {
			foo: number;
			bar?: number;
		}));

		expect(Object.keys(result)).toEqual(["foo"]);

		result.bar = 2;
		expect(result.bar).toBe(2);
		expect(Object.keys(result)).toEqual(["foo", "bar"]);
		expect("bar" in result).toBe(true);
	});
});
