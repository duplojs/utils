import { type ExpectType } from "@scripts/common/types/expectType";
import { createKind, DObject, wrapValue } from "@scripts";

describe("keys", () => {
	it("default usage", () => {
		const keys = DObject.keys({
			toto: 1,
			tt: "ee",
		});

		expect(keys).toStrictEqual(["toto", "tt"]);

		type check = ExpectType<
			typeof keys,
			("toto" | "tt")[],
			"strict"
		>;
	});

	it("ignore wrappedValue and kind", () => {
		const myKind = createKind("test");

		const keys = DObject.keys(
			myKind.addTo(
				wrapValue(1),
			),
		);

		expect(keys).toStrictEqual([]);

			type check = ExpectType<
				typeof keys,
				never[],
				"strict"
			>;
	});
});

