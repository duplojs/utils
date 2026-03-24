import { DFlow, type ExpectType } from "@scripts";

describe("createDependence", () => {
	it("creates a dependence handler kind that returns the injected implementation", () => {
		const result = DFlow.createDependence("service")<{ name: string }>;
		const implementation = {
			name: "service",
		} as const;

		expect(DFlow.dependenceHandlerKind.has(result)).toBe(true);
		expect(DFlow.dependenceHandlerKind.getValue(result)).toBe("service");
		expect(result(implementation)).toBe(implementation);

		type check = ExpectType<
			typeof result,
			& DFlow.DependenceHandlerKind<"service">
			& ((implementation: {
				name: string;
			}) => {
				name: string;
			}),
			"strict"
		>;
	});
});
