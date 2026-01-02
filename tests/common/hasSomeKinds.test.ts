import { createKind, hasSomeKinds, pipe, type ExpectType, type Kind, when } from "@scripts";

describe("hasSomeKinds", () => {
	const userKind = createKind("user");
	const adminKind = createKind("admin");

	type WithUserKind = { name: string } & Kind<typeof userKind.definition>;
	type WithAdminKind = { name: string } & Kind<typeof adminKind.definition>;
	interface WithoutKinds {
		name: string;
	}

	it("return true when any kind is present", () => {
		const withUserKind = userKind.addTo({ name: "toto" });
		const input = withUserKind as WithUserKind | WithAdminKind | WithoutKinds;
		const result = hasSomeKinds(input, [userKind, adminKind]);

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof input,
				WithUserKind | WithAdminKind,
				"strict"
			>;
		}
	});

	it("return false when no kind is present", () => {
		const withoutKinds = { name: "toto" };
		const input: WithUserKind | WithAdminKind | WithoutKinds = withoutKinds;
		const result = hasSomeKinds(input, [userKind, adminKind]);

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
		const withAdminKind = adminKind.addTo({ name: "toto" });
		const input = withAdminKind as WithUserKind | WithAdminKind | WithoutKinds;

		const result = pipe(
			input,
			when(
				hasSomeKinds([userKind, adminKind]),
				(value) => {
					type check = ExpectType<
						typeof value,
						WithUserKind | WithAdminKind,
						"strict"
					>;

					return "ok" as const;
				},
			),
		);

		expect(result).toBe("ok");

		type check = ExpectType<
			typeof result,
			"ok" | WithoutKinds,
			"strict"
		>;
	});
});
