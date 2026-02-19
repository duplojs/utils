import { DDataParser, simpleClone } from "@scripts";

describe("simpleClone", () => {
	it("simpleClone", () => {
		expect(simpleClone({
			prop1: null,
			prop2: [1, 2, 3],
			test: new Error("test"),
		})).toStrictEqual({
			prop1: null,
			prop2: [1, 2, 3],
			test: new Error("test"),
		});
	});

	it("with getter", () => {
		const spy = vi.fn();
		const schema = DDataParser.lazy(spy).clone();

		expect(spy).toHaveBeenCalledTimes(0);

		void schema.definition.getter.value;
		void schema.definition.getter.value;
		void schema.definition.getter.value;
		void schema.definition.getter.value;

		expect(spy).toHaveBeenCalledTimes(1);
	});
});

