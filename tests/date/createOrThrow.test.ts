import { DDate } from "@scripts";

describe("createOrThrow", () => {
	it("creates from timestamp", () => {
		const result = DDate.createOrThrow(1609459200000);

		expect(DDate.serialize(result)).toBe("date1609459200000+");
	});

	it("creates from negative timestamp", () => {
		const result = DDate.createOrThrow(-1000);

		expect(DDate.serialize(result)).toBe("date1000-");
	});

	it("throws when timestamp is unsafe", () => {
		expect(() => DDate.createOrThrow(Number.MAX_SAFE_INTEGER + 1)).toThrow(DDate.CreateTheDateError);
	});

	it("throws when timestamp is out of range", () => {
		expect(() => DDate.createOrThrow(DDate.maxTimestamp + 1)).toThrow(DDate.CreateTheDateError);
	});

	it("throws with wrong spooling Date", () => {
		expect(() => DDate.createOrThrow({ value: NaN })).toThrow(DDate.CreateTheDateError);
	});

	it("throws when timestamp hits the limits", () => {
		expect(() => DDate.createOrThrow(DDate.maxTimestamp)).toThrow(DDate.CreateTheDateError);
		expect(() => DDate.createOrThrow(DDate.minTimestamp)).toThrow(DDate.CreateTheDateError);
	});

	it("creates from Date object", () => {
		const nativeDate = new Date("2021-01-01T00:00:00.000Z");

		expect(DDate.serialize(DDate.createOrThrow(nativeDate))).toBe("date1609459200000+");
	});

	it("creates from Date object before epoch", () => {
		const nativeDate = new Date(-1000);

		expect(DDate.serialize(DDate.createOrThrow(nativeDate))).toBe("date1000-");
	});

	it("throws when Date object is invalid", () => {
		expect(() => DDate.createOrThrow(new Date(NaN))).toThrow(DDate.CreateTheDateError);
	});

	it("throws when Date object has out-of-range timestamp", () => {
		expect(() => DDate.createOrThrow(new Date(DDate.maxTimestamp + 1))).toThrow(DDate.CreateTheDateError);
		expect(() => DDate.createOrThrow(new Date(DDate.minTimestamp - 1))).toThrow(DDate.CreateTheDateError);
	});

	it("creates from TheDate string", () => {
		const value: DDate.SerializedTheDate = "date42-";

		expect(DDate.serialize(DDate.createOrThrow(value))).toBe(value);
	});

	it("throws when TheDate magnitude is invalid", () => {
		const invalid = "date9007199254740992+";

		expect(() => DDate.createOrThrow(invalid)).toThrow(DDate.CreateTheDateError);
	});

	it("creates from Date before Christ", () => {
		const input = new Date(Date.UTC(-100, 0, 1));
		const timestamp = input.getTime();

		expect(DDate.serialize(DDate.createOrThrow(input))).toBe(`date${Math.abs(timestamp)}-`);
	});

	it("throws when string does not match any known pattern", () => {
		expect(() => DDate.createOrThrow("not-a-date" as any)).toThrow(DDate.CreateTheDateError);
	});

	it("throws when TheDate matches timestamp boundary", () => {
		expect(() => DDate.createOrThrow(`date${DDate.maxTimestamp}+`)).toThrow(DDate.CreateTheDateError);
		expect(() => DDate.createOrThrow(`date${Math.abs(DDate.minTimestamp)}-`)).toThrow(DDate.CreateTheDateError);
	});

	it("throws when runtime type is unsupported", () => {
		expect(() => DDate.createOrThrow("date99999999999999999999999999999999999999+")).toThrow(DDate.CreateTheDateError);
	});
});
