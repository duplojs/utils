import { pipe, type ExpectType, DDate } from "@scripts";

describe("equal", () => {
	it("simple case", () => {
		const result = DDate.equal(
			DDate.create("2024-01-03"),
			DDate.create("2024-01-03"),
		);

		expect(result).toBe(true);
	});

	it("with serialized", () => {
		const result = DDate.equal(
			DDate.create("2024-01-03").toString(),
			DDate.create("2024-01-03").toString(),
		);

		expect(result).toBe(true);
	});

	it("with TheDate/serialized", () => {
		const result = DDate.equal(
			DDate.create("2024-01-03"),
			DDate.create("2024-01-03").toString(),
		);

		expect(result).toBe(true);
	});

	it("different date", () => {
		const result = DDate.equal(
			DDate.create("2024-01-03"),
			DDate.create("2024-01-04"),
		);

		expect(result).toBe(false);
	});

	it("different date (TheDate/serialized)", () => {
		const result = DDate.equal(
			DDate.create("2024-01-03"),
			DDate.create("2024-01-04").toString(),
		);

		expect(result).toBe(false);
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create("2024-01-03"),
			DDate.equal(DDate.create("2024-01-03")),
		);

		type _check = ExpectType<
			typeof result,
			boolean,
			"strict"
		>;

		expect(result).toBe(true);
	});
});
