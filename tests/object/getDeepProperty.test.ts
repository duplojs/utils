import { type ExpectType, pipe, DObject } from "@scripts";

describe("getDeepProperty", () => {
	it("retrieves nested primitive value", () => {
		const obj = {
			user: {
				profile: {
					age: 32,
				},
			},
		};

		const result = DObject.getDeepProperty(obj, "user.profile.age");

		expect(result).toBe(32);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});

	it("narrows union types for deep properties", () => {
		const obj = {
			user: {
				profile: {
					age: 28,
				},
			},
		} as {
			user: {
				profile: {
					age: number;
				};
			};
		} | {
			user: {
				profile: {
					age: string;
				};
			};
		};

		const result = DObject.getDeepProperty(obj, "user.profile.age");

		expect(result).toBe(28);

		type check = ExpectType<
			typeof result,
			number | string,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const obj = {
			user: {
				profile: {
					age: 45,
				},
			},
		};

		const result = pipe(
			obj,
			DObject.getDeepProperty("user.profile.age"),
		);

		expect(result).toBe(45);

		type check = ExpectType<
			typeof result,
			number,
			"strict"
		>;
	});
});
