import { DFlow, type ExpectType } from "@scripts";

describe("inject", () => {
	it("yields an injection effect and returns the injected dependence", () => {
		const dependenceHandler = DFlow.createDependence("service")<string>;
		const result = DFlow.inject(dependenceHandler);
		const firstResult = result.next();

		expect(firstResult).toStrictEqual({
			done: false,
			value: DFlow.createInjection({
				dependenceHandler,
				inject: expect.any(Function),
			}),
		});

		DFlow.injectionKind.getValue(firstResult.value as DFlow.Injection).inject("service");

		expect(result.next()).toStrictEqual({
			done: true,
			value: "service",
		});

		type check = ExpectType<
			typeof result,
			Generator<DFlow.Injection<typeof dependenceHandler>, string, any>,
			"strict"
		>;
	});
});
