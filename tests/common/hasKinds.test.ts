import { hasKinds, createKind, type Kind, type ExpectType, pipe, when } from "@scripts";

describe("hasKinds", () => {
	const userKind = createKind("user");
	const adminKind = createKind("admin");

	type WithKinds = { name: string }
		& Kind<typeof userKind.definition>
		& Kind<typeof adminKind.definition>;

	interface WithoutKinds {
		name: string;
	}

	it("return true when all kinds are present", () => {
		const withKinds = adminKind.addTo(
			userKind.addTo({ name: "toto" }),
		);

		const input: WithKinds | WithoutKinds = withKinds;
		const result = hasKinds(input, [userKind, adminKind]);

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof input,
				WithKinds,
				"strict"
			>;
		}
	});

	it("return false when a kind is missing", () => {
		const withoutKinds = { name: "toto" };
		const input: WithKinds | WithoutKinds = withoutKinds;
		const result = hasKinds(input, [userKind, adminKind]);

		expect(result).toBe(false);

		if (!result) {
			type check = ExpectType<
				typeof input,
				WithoutKinds,
				"strict"
			>;
		}
	});

	it("use in curried form with pipe and when", () => {
		const withKinds = adminKind.addTo(
			userKind.addTo({ name: "toto" }),
		);
		const input: WithKinds | WithoutKinds = withKinds;

		const result = pipe(
			input,
			when(
				hasKinds([userKind, adminKind]),
				(value) => {
					type check = ExpectType<
						typeof value,
						WithKinds,
						"strict"
					>;

					return true;
				},
			),
		);

		expect(result).toBe(true);
	});
});
