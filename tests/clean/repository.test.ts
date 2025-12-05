import { DClean, type ExpectType } from "@scripts";

describe("createRepository", () => {
	it("createImplementation returns typed implementation", () => {
		interface UserRepository {
			find<T>(id: T): Promise<string>;
			count(): number;
			name: string;
		}

		const Repository = DClean.createRepository<UserRepository>();

		const impl = Repository.createImplementation({
			find: (id) => Promise.resolve(String(id)),
			count: () => 2,
			name: "repo",
		});

		expect(impl.find).toBeInstanceOf(Function);
		expect(impl.count()).toBe(2);
		expect(impl.name).toBe("repo");

		type Check = ExpectType<
			typeof impl,
			UserRepository,
			"strict"
		>;
	});
});
