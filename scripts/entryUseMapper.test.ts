import { entryUseMapper } from "./entryUseMapper";
import { type ExpectType } from "./expectType";

it("entryUseMapper", () => {
	type Entries = ["test", { tt: string }] | ["lo", number];
	const entry = ["test", { tt: "aie" }] as Entries;

	const resultMapper = entryUseMapper(
		entry,
		{
			test: (value) => value,
			lo: (value) => value,
		},
	);

	expect(resultMapper).toStrictEqual({ tt: "aie" });

	type check = ExpectType<typeof resultMapper, Entries[1], "strict">;
});
