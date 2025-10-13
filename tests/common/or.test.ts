import { DObject, DString, isType, pipe, when, or, type ExpectType } from "@scripts";

describe("or", () => {
	it("check with multi type", () => {
		const input = null as string | number | null;

		const predicate = or(input, [
			isType("number"),
			isType("string"),
		]);

		expect(predicate).toBe(false);

		if (predicate) {
			type check = ExpectType<
				typeof input,
				string | number,
				"strict"
			>;
		} else {
			type check = ExpectType<
				typeof input,
				null,
				"strict"
			>;
		}
	});

	it("check with function without predicate", () => {
		const input = "-test" as "-test" | "otot";

		const predicate = or(input, [
			isType("string"),
			DString.test(/t/),
		]);

		expect(predicate).toBe(true);

		if (predicate) {
			type check = ExpectType<
				typeof input,
				"-test" | "otot",
				"strict"
			>;
		} else {
			type check = ExpectType<
				typeof input,
				"-test" | "otot",
				"strict"
			>;
		}
	});

	it("composes with discriminate in pipe", () => {
		interface Admin {
			type: "admin";
			status: "active" | "suspended";
			meta: {
				role: "super";
			};
		}

		interface Moderator {
			type: "moderator";
			status: "active";
			meta: {
				role: "reviewer";
			};
		}

		interface Viewer {
			type: "viewer";
			status: "active";
			meta: {
				role: "reader";
			};
		}

		type User = Admin | Moderator | Viewer;

		const result = pipe(
			{
				type: "moderator",
				status: "active",
				meta: {
					role: "reviewer",
				},
			} as User,
			when(
				or([
					DObject.discriminate("type", "admin"),
					DObject.discriminate("type", "moderator"),
				]),
				(value) => {
					type check = ExpectType<
						typeof value,
						Admin | Moderator,
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
