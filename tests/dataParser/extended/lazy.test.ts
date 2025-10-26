import { DDataParser, DEither } from "@scripts";

const { extended } = DDataParser;

describe("extended.lazy", () => {
	it("defers parser resolution", () => {
		const parser = extended.lazy(() => extended.number());
		expect(parser.parse(3)).toStrictEqual(DEither.success(3));
	});

	it("supports recursive definitions", () => {
		interface Tree {
			value: number;
			children?: Tree[];
		}

		const treeParser: DDataParser.Contract<Tree> = extended.object({
			value: extended.number(),
			children: extended.lazy(() => treeParser).array().optional(),
		});

		const input: Tree = {
			value: 1,
			children: [{ value: 2 }],
		};
		expect(treeParser.parse(input)).toStrictEqual(DEither.success(input));
	});
});
