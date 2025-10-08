import { type ExpectType } from "@scripts/common/types/expectType";
import { createKind, DObject, wrapValue } from "@scripts";

describe("entries", () => {
	it("normal usage", () => {
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

	it("ignore wrappedValue and kind", () => {
		const myKind = createKind("test");

		const entries = DObject.entries(
			myKind.addTo(
				wrapValue(1),
			),
		);

		expect(entries).toStrictEqual([]);

		type check = ExpectType<
			typeof entries,
			[],
			"strict"
		>;
	});
});

