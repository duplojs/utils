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
		const schema: DDataParser.Contract<any> = DDataParser.object({
			test: DDataParser.lazy(() => schema),
		}).clone();
	});
});

