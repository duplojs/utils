import { DClean, type ExpectType, pipe } from "@scripts";

describe("createPort", () => {
	it("createImplementation returns typed implementation", () => {
		interface UserPort {
			send<T>(id: T): Promise<string>;
			count(): number;
			name: string;
		}

		const Port = DClean.createPort<UserPort>();

		const impl = Port.createImplementation({
			send: (id) => Promise.resolve(String(id)),
			count: () => 2,
			name: "port",
		});

		expect(impl.send).toBeInstanceOf(Function);
		expect(impl.count()).toBe(2);
		expect(impl.name).toBe("port");

		type Check = ExpectType<
			typeof impl,
			UserPort,
			"strict"
		>;
	});
});
