import { type ExpectType } from "@scripts/common/types/expectType";
import { createKind, DObject, wrapValue } from "@scripts";

describe("countKeys", () => {
	it("default usage", () => {
		const count = DObject.countKeys({
			toto: 1,
			tt: "ee",
		});

		expect(count).toBe(2);

		type check = ExpectType<
			typeof count,
			number,
			"strict"
		>;
	});

	it("ignore wrappedValue and kind", () => {
		const myKind = createKind("test");

		const count = DObject.countKeys(
			myKind.addTo(
				wrapValue(1),
			),
		);

		expect(count).toBe(0);

		type check = ExpectType<
			typeof count,
			number,
			"strict"
		>;
	});
});
