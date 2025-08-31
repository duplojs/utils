import { type ExpectType } from "@scripts/common/types/expectType";
import { DObject } from "@scripts";

it("entries", () => {
	const entries = DObject.entries({
		toto: 1,
		tt: true ? "ee" : undefined,
	});

	expect(entries).toStrictEqual([["toto", 1], ["tt", "ee"]]);

	type check = ExpectType<
		typeof entries,
		(["toto", number] | ["tt", string | undefined])[],
		"strict"
	>;
});
