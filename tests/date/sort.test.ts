import { DDate, pipe } from "@scripts";

describe("DDate sort", () => {
	const jan01 = DDate.create("2024-01-01");
	const jan05 = DDate.create("2024-01-05");
	const jan10 = DDate.create("2024-01-10");

	it("sorts ascending and descending", () => {
		const asc = DDate.sort([jan05, jan10, jan01], "ASC");
		const dsc = pipe([jan01, jan05, jan10], DDate.sort("DSC"));

		expect(asc).toEqual([jan01, jan05, jan10]);
		expect(dsc).toEqual([jan10, jan05, jan01]);
	});
});
