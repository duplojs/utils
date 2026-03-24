import { DFlow, type ExpectType } from "@scripts";

describe("createInjection", () => {
	it("creates an injection kind with the provided dependence handler and injector", () => {
		const dependence = DFlow.createDependence("service");
		const inject = vi.fn();
		const result = DFlow.createInjection({
			dependenceHandler: dependence,
			inject,
		});

		expect(DFlow.injectionKind.has(result)).toBe(true);
		expect(DFlow.injectionKind.getValue(result)).toStrictEqual({
			dependenceHandler: dependence,
			inject,
		});

		DFlow.injectionKind.getValue(result).inject("service");

		expect(inject).toHaveBeenCalledWith("service");

		type check = ExpectType<
			typeof result,
			DFlow.Injection<typeof dependence>,
			"strict"
		>;
	});
});
