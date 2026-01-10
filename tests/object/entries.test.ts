import { type AnyValue, createKind, DObject, type ExpectType, wrapValue } from "@scripts";

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

	it("entry of array", () => {
		const input = [1, 2, 3];

		const entries = DObject.entries(input);

		expect(entries).toStrictEqual([["0", 1], ["1", 2], ["2", 3]]);

		type check = ExpectType<
			typeof entries,
			[`${number}`, number][],
			"strict"
		>;
	});

	it("entry of objet", () => {
		const input = {} as object;

		const entries = DObject.entries(input);

		expect(entries).toStrictEqual([]);

		type check = ExpectType<
			typeof entries,
			[string, AnyValue][],
			"strict"
		>;
	});

	it("unsafe Entries", () => {
		const myKind = createKind("test");

		const entries = DObject.entries.unsafe(
			myKind.addTo(
				wrapValue(1),
			),
		);

		expect(entries).toStrictEqual(
			Object.entries(
				myKind.addTo(
					wrapValue(1),
				),
			),
		);

		type check = ExpectType<
			typeof entries,
			[string, AnyValue][],
			"strict"
		>;
	});
});

