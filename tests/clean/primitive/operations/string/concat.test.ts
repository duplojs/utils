import { DClean, unwrap } from "@scripts";

describe("clean primitive string concat", () => {
	const hello = DClean.String.createOrThrow("hello");
	const world = DClean.String.createOrThrow("world");

	it("concats directly", () => {
		expect(unwrap(DClean.concat(hello, world))).toBe("helloworld");
		expect(unwrap(DClean.concat(hello, "!", world))).toBe("hello!world");
	});

	it("concats curried", () => {
		expect(unwrap(DClean.concat(world)(hello))).toBe("helloworld");
		expect(unwrap(DClean.concat("!")(hello))).toBe("hello!");
	});
});
