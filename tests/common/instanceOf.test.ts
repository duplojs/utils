import { instanceOf, pipe, when, type ExpectType } from "@scripts";

describe("instanceOf", () => {
	class User {
		public constructor(public readonly name: string) {}
	}

	class Admin extends User {
		public constructor(name: string, public readonly level: number) {
			super(name);
		}
	}

	it("predicate usage with single constructor", () => {
		const value = new Admin("alice", 1) as User | Admin;
		const predicate = instanceOf(value, Admin);

		expect(predicate).toBe(true);

		if (predicate) {
			type Check = ExpectType<
				typeof value,
				Admin,
				"strict"
			>;
		}

		const other = new User("bob") as User | Admin;
		expect(instanceOf(other, Admin)).toBe(false);
	});

	it("accepts array of constructors", () => {
		const admin = new Admin("alice", 1) as Admin | Date;

		const result = instanceOf(admin, [Date, Admin]);

		expect(result).toBe(true);

		if (result) {
			type Check = ExpectType<typeof admin, Admin | Date, "strict">;
		}
	});

	it("use in pipe", () => {
		const admin = new Admin("alice", 1) as Admin | Date;

		const result = pipe(
			admin,
			when(
				instanceOf(User),
				(user) => {
					type Check = ExpectType<
						typeof user,
						Admin,
						"strict"
					>;

					return 10;
				},
			),
		);

		expect(result).toBe(10);

		type Check = ExpectType<
			typeof result,
			number | Date,
			"strict"
		>;
	});
});
