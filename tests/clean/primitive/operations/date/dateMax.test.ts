import { DClean, DDate, unwrap } from "@scripts";

describe("clean primitive dateMax", () => {
	const jan01 = DClean.Date.createOrThrow(DDate.create("2024-01-01"));
	const jan05 = DClean.Date.createOrThrow(DDate.create("2024-01-05"));
	const jan10 = DClean.Date.createOrThrow(DDate.create("2024-01-10"));

	it("returns latest date in direct form", () => {
		const result = DClean.dateMax([jan01, jan05, jan10]);
		expect(result).toStrictEqual(jan10);
	});
});
