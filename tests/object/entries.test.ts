import { type ExpectType } from "@scripts/common/types/expectType";
import { DObject } from "@scripts";

it("entries", () => {
	const input: {
		toto: number;
		tt?: string;
	} = {
		toto: 1,
		tt: "ee",
	};

	const entries = DObject.entries(input);

	expect(entries).toStrictEqual([["toto", 1], ["tt", "ee"]]);

	type check = ExpectType<
		typeof entries,
		(["toto", number] | ["tt", string] | ["tt", undefined])[],
		"strict"
	>;
});
