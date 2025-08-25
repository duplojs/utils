import { type ExpectType } from "@scripts/common/types/expectType";
import { objectEntries } from "@scripts/object/entries";

it("objectEntries", () => {
	const entries = objectEntries({
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
