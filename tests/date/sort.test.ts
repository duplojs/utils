import { DDate, pipe } from "@scripts";

describe("DDate sort", () => {
	const jan01 = DDate.create("2024-01-01");
	const jan05 = DDate.create("2024-01-05");
	const jan10 = DDate.create("2024-01-10");

	it("sorts ascending and descending", () => {
		const asc = DDate.sort([jan05, jan10, jan01], "ASC");
		const dsc = pipe([jan01, jan05, jan10], DDate.sort("DSC"));

		expect(asc.map(DDate.toTimestamp)).toEqual([
			DDate.toTimestamp(jan01),
			DDate.toTimestamp(jan05),
			DDate.toTimestamp(jan10),
		]);
		expect(dsc.map(DDate.toTimestamp)).toEqual([
			DDate.toTimestamp(jan10),
			DDate.toTimestamp(jan05),
			DDate.toTimestamp(jan01),
		]);
	});
});
