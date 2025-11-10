import { isType, type ExpectType } from "@scripts";

describe("isType", () => {
	it("string", () => {
		const value = "value" as string | number;

		const result = isType(value, "string");

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof value,
				string,
				"strict"
			>;
		}

		expect(isType(42 as string | number, "string")).toBe(false);
	});

	it("number", () => {
		const value = 21 as number | boolean;

		const result = isType(value, "number");

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof value,
				number,
				"strict"
			>;
		}

		expect(isType(true as number | boolean, "number")).toBe(false);
	});

	it("boolean", () => {
		const value = false as boolean | string;

		const result = isType(value, "boolean");

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof value,
				boolean,
				"strict"
			>;
		}

		expect(isType("no" as boolean | string, "boolean")).toBe(false);
	});

	it("function", () => {
		const value = (() => 5) as (() => number) | string;

		const result = isType(value, "function");

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof value,
				() => number,
				"strict"
			>;
		}

		expect(isType("fn" as string | (() => number), "function")).toBe(false);
	});

	it("bigint", () => {
		const value = 10n as bigint | number;

		const result = isType(value, "bigint");

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof value,
				bigint,
				"strict"
			>;
		}

		expect(isType(12 as bigint | number, "bigint")).toBe(false);
	});

	it("undefined", () => {
		const value = undefined as string | undefined;

		const result = isType(value, "undefined");

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof value,
				undefined,
				"strict"
			>;
		}

		expect(isType("defined" as string | undefined, "undefined")).toBe(false);
	});

	it("null", () => {
		const value = null as null | number;

		const result = isType(value, "null");

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof value,
				null,
				"strict"
			>;
		}

		expect(isType(7 as null | number, "null")).toBe(false);
	});

	it("symbol", () => {
		const value = Symbol("id") as symbol | string;

		const result = isType(value, "symbol");

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof value,
				symbol,
				"strict"
			>;
		}

		expect(isType("symbol" as symbol | string, "symbol")).toBe(false);
	});

	it("object", () => {
		const value = {
			foo: "bar",
		} as { foo: string } | string[] | null;

		const result = isType(value, "object");

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof value,
				{
					foo: string;
				},
				"strict"
			>;
		}

		expect(isType(["one"] as { foo: string } | string[], "object")).toBe(false);
	});

	it("array", () => {
		const value = ["one", "two"] as string[] | { foo: string };

		const result = isType(value, "array");

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof value,
				string[],
				"strict"
			>;
		}

		expect(isType({ foo: "bar" } as string[] | { foo: string }, "array")).toBe(false);
	});

	it("iterator", () => {
		const value = new Set([1]);

		const result = isType(value, "iterable");

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof value,
				Set<number>,
				"strict"
			>;
		}

		expect(isType(1 as Set<number> | number, "iterable")).toBe(false);
	});

	it("asyncIterator", () => {
		const value = (async function *() {
			yield await 1;
		})();

		const result = isType(value, "asyncIterable");

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof value,
				AsyncGenerator<number, void, unknown>,
				"strict"
			>;
		}

		expect(isType([] as AsyncGenerator<number, void, unknown> | number[], "asyncIterable")).toBe(false);
	});
});
