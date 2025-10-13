import { DObject, pipe, type ExpectType, when, DString, and } from "@scripts";

describe("and", () => {
	it("check with literal string", () => {
		const input = "-test-" as "-test-" | "-test" | "test-";

		const predicate = and(input, [
			DString.startsWith("-"),
			DString.endsWith("-"),
		]);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof input,
				"-test-",
				"strict"
			>;
		} else {
			type check = ExpectType<
				typeof input,
				"-test" | "test-",
				"strict"
			>;
		}
	});

	it("check with large string", () => {
		const input = "-test-" as string;

		const predicate = and(input, [
			DString.startsWith("-"),
			DString.endsWith("-"),
		]);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof input,
				`-${string}` & `${string}-`,
				"strict"
			>;
		} else {
			type check = ExpectType<
				typeof input,
				string,
				"strict"
			>;
		}
	});

	it("check with function without predicate", () => {
		const input = "-test" as "-test-" | "-test" | "test-";

		const predicate = and(input, [
			DString.startsWith("-"),
			DString.endsWith("-"),
			DString.test(/test/),
		]);

		expect(predicate).toBe(false);

		if (predicate) {
			type check = ExpectType<
				typeof input,
				"-test-" | "-test" | "test-",
				"strict"
			>;
		} else {
			type check = ExpectType<
				typeof input,
				"-test-" | "-test" | "test-",
				"strict"
			>;
		}
	});

	it("use in pipe", () => {
		interface Admin {
			type: "admin";
			status: "active";
			meta: {
				role: "super";
			};
		}

		interface Viewer {
			type: "viewer";
			status: "active";
			meta: {
				role: "reader";
			};
		}

		type User = Admin | Viewer;

		const result = pipe(
			{
				type: "admin",
				status: "active",
				meta: {
					role: "super",
				},
			} as User,
			when(
				and([
					DObject.discriminate("type", "admin"),
					DObject.discriminate("status", "active"),
				]),
				(value) => {
					type check = ExpectType<
						typeof value,
						Admin,
						"strict"
					>;

					return "myValue";
				},
			),
		);

		expect(result).toBe("myValue");

		type check = ExpectType<
			typeof result,
			string | Viewer,
			"strict"
		>;
	});
});
