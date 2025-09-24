import { DDate, type ExpectType, pipe } from "@scripts/index";

describe("toObject", () => {
	it("should return parsed date object", () => {
		const date = "2023-12-25T14:30:45.123Z" as DDate.NewDate;
		const result = DDate.toObject(date);

		expect(result.year).toBe(2023);
		expect(result.month).toBe(12);
		expect(result.day).toBe(25);
		expect(result.hour).toBe(14);
		expect(result.minute).toBe(30);
		expect(result.second).toBe(45);
		expect(result.milliseconds).toBe(123);
		expect(result.timezone).toBe("Z");
	});

	it("should return parsed date object without milliseconds", () => {
		const date = "2023-12-25T14:30:45Z" as DDate.NewDate;
		const result = DDate.toObject(date);

		expect(result.milliseconds).toBeUndefined();
	});
});
