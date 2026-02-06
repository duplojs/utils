import { DDate } from "@scripts";

describe("createTimeOrThrow", () => {
	it("creates from milliseconds", () => {
		const result = DDate.createTimeOrThrow(5000);

		expect(DDate.serialize(result)).toBe("time5000+");
	});

	it("creates from negative milliseconds", () => {
		const result = DDate.createTimeOrThrow(-1000);

		expect(DDate.serialize(result)).toBe("time1000-");
	});

	it("creates from TheTime string", () => {
		const value: DDate.SerializedTheTime = "time42-";

		expect(DDate.serialize(DDate.createTimeOrThrow(value))).toBe(value);
	});

	it("creates from ISO time value", () => {
		const result = DDate.createTimeOrThrow({
			value: "01:00:00.000",
		});

		expect(DDate.serialize(result)).toBe(`time${DDate.millisecondInOneHour}+`);
	});

	it("creates from spooling value number", () => {
		const result = DDate.createTimeOrThrow({
			value: 2500,
		});

		expect(DDate.serialize(result)).toBe("time2500+");
	});

	it("throws when time value is unsafe", () => {
		expect(() => DDate.createTimeOrThrow(Number.MAX_SAFE_INTEGER + 1)).toThrow(DDate.CreateTheTimeError);
	});

	it("throws when time value hits the limits", () => {
		expect(() => DDate.createTimeOrThrow(DDate.maxTimeValue)).toThrow(DDate.CreateTheTimeError);
		expect(() => DDate.createTimeOrThrow(DDate.minTimeValue)).toThrow(DDate.CreateTheTimeError);
	});

	it("throws when spooling value is NaN", () => {
		expect(() => DDate.createTimeOrThrow({ value: Number.NaN })).toThrow(DDate.CreateTheTimeError);
	});
});
