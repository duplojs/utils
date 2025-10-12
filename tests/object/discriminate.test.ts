import { DObject, pipe, type ExpectType, when } from "@scripts";

describe("discriminate", () => {
	it("match literal prop", () => {
		interface Admin {
			type: "admin";
			permissions: "all";
		}
		interface Guest {
			type: "guest";
			permissions: "read";
		}

		const input = {
			type: "admin",
			permissions: "all",
		} as Admin | Guest;

		const result = DObject.discriminate(
			input,
			"type",
			"admin",
		);

		expect(result).toBe(true);

		if (result) {
			type check = ExpectType<
				typeof input,
				Admin,
				"strict"
			>;
		} else {
			type check = ExpectType<
				typeof input,
				Guest,
				"strict"
			>;
		}
	});

	it("no match on deep prop", () => {
		interface Active {
			meta: {
				status: "active";
				flag: true;
			};
		}
		interface Inactive {
			meta: {
				status: "inactive";
				flag: false;
			};
		}

		const input = {
			meta: {
				status: "inactive",
				flag: false,
			},
		} as Active | Inactive;

		const result = DObject.discriminate(
			input,
			"meta.status",
			"active",
		);

		expect(result).toBe(false);

		if (result) {
			type check = ExpectType<
				typeof input,
				Active,
				"strict"
			>;
		} else {
			type check = ExpectType<
				typeof input,
				Inactive,
				"strict"
			>;
		}
	});

	it("use in pipe with array values", () => {
		interface SuperUser {
			role: "admin";
			level: number;
		}
		interface Moderator {
			role: "moderator";
			level: number;
		}
		interface Viewer {
			role: "viewer";
			level: number;
		}

		const output = pipe(
			{
				role: "moderator",
				level: 2,
			} as SuperUser | Moderator | Viewer,
			when(
				DObject.discriminate(
					"role",
					["admin", "moderator"],
				),
				(value) => {
					type check = ExpectType<
						typeof value,
						SuperUser | Moderator,
						"strict"
					>;

					return value.level;
				},
			),
		);

		expect(output).toBe(2);

		type check = ExpectType<
			typeof output,
			number | Viewer,
			"strict"
		>;
	});
});
