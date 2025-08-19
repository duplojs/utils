import { type ExpectType } from "./types/expectType";
import { getTypedEntries } from "./getTypedEntries";

it("getTypedEntries", () => {
	const entries = getTypedEntries({
		toto: 1,
		tt: "ee",
	});

	expect(entries).toStrictEqual([["toto", 1], ["tt", "ee"]]);

	type check = ExpectType<
		typeof entries,
		(["toto", number] | ["tt", string])[],
		"strict"
	>;
});
