import { DDate } from "@scripts";
import { type CreateDateInputString, type TheDate } from "@scripts/date";

describe("createOrThrow", () => {
	it("creates from timestamp", () => {
		const result = DDate.createOrThrow(1609459200000);

		expect(result).toBe("date1609459200000+");
	});

	it("creates from negative timestamp", () => {
		const result = DDate.createOrThrow(-1000);

		expect(result).toBe("date1000-");
	});

	it("throws when timestamp is unsafe", () => {
		expect(() => DDate.createOrThrow(Number.MAX_SAFE_INTEGER + 1)).toThrow(DDate.CreateTheDateError);
	});

	it("throws when timestamp is out of range", () => {
		expect(() => DDate.createOrThrow(DDate.maxTimestamp + 1)).toThrow(DDate.CreateTheDateError);
	});

	it("throws when timestamp hits the limits", () => {
		expect(() => DDate.createOrThrow(DDate.maxTimestamp)).toThrow(DDate.CreateTheDateError);
		expect(() => DDate.createOrThrow(DDate.minTimestamp)).toThrow(DDate.CreateTheDateError);
	});

	it("creates from Date object", () => {
		const nativeDate = new Date("2021-01-01T00:00:00.000Z");

		expect(DDate.createOrThrow(nativeDate)).toBe("date1609459200000+");
	});

	it("creates from Date object before epoch", () => {
		const nativeDate = new Date(-1000);

		expect(DDate.createOrThrow(nativeDate)).toBe("date1000-");
	});

	it("throws when Date object is invalid", () => {
		expect(() => DDate.createOrThrow(new Date(NaN))).toThrow(DDate.CreateTheDateError);
	});

	it("throws when Date object has out-of-range timestamp", () => {
		expect(() => DDate.createOrThrow(new Date(DDate.maxTimestamp + 1))).toThrow(DDate.CreateTheDateError);
		expect(() => DDate.createOrThrow(new Date(DDate.minTimestamp - 1))).toThrow(DDate.CreateTheDateError);
	});

	it("throws when date string includes invalid hour component", () => {
		expect(() => DDate.createOrThrow("2021y-1m-1d-25h")).toThrow(DDate.CreateTheDateError);
	});

	it("throws when date string has impossible calendar date", () => {
		expect(() => DDate.createOrThrow("2021y-2m-30d")).toThrow(DDate.CreateTheDateError);
	});

	it("creates from TheDate string", () => {
		const value: TheDate = "date42-";

		expect(DDate.createOrThrow(value)).toBe(value);
	});

	it("throws when TheDate magnitude is invalid", () => {
		const invalid = "date9007199254740992+";

		expect(() => DDate.createOrThrow(invalid)).toThrow(DDate.CreateTheDateError);
	});

	it("creates from string date format", () => {
		const input: CreateDateInputString = "2021y-1m-1d";

		expect(DDate.createOrThrow(input)).toBe("date1609459200000+");
	});

	it("creates from string date format with full time components", () => {
		const input: CreateDateInputString = "2021y-1m-1d-12h-30mn-45s-123ms";

		expect(DDate.createOrThrow(input)).toBe("date1609504245123+");
	});

	it("creates from string date format before Christ", () => {
		const input: CreateDateInputString = "-100y-1m-1d";
		const expected = DDate.create(input);

		expect(DDate.createOrThrow(input)).toBe(expected);
	});

	it("throws when date string has invalid values", () => {
		const invalidInput = "2021y-13m-1d";

		expect(() => DDate.createOrThrow(invalidInput)).toThrow(DDate.CreateTheDateError);
	});

	it("throws when string does not match any known pattern", () => {
		expect(() => DDate.createOrThrow("not-a-date" as any)).toThrow(DDate.CreateTheDateError);
	});

	it("throws when TheDate matches timestamp boundary", () => {
		expect(() => DDate.createOrThrow(`date${DDate.maxTimestamp}+`)).toThrow(DDate.CreateTheDateError);
		expect(() => DDate.createOrThrow(`date${Math.abs(DDate.minTimestamp)}-`)).toThrow(DDate.CreateTheDateError);
	});

	it("throws when date string yields boundary timestamp", () => {
		const boundary = new Date(DDate.maxTimestamp);
		const year = boundary.getUTCFullYear();
		const month = boundary.getUTCMonth() + 1;
		const day = boundary.getUTCDate();
		const input = `${year}y-${month}m-${day}d` as const;

		expect(() => DDate.createOrThrow(input)).toThrow(DDate.CreateTheDateError);
	});

	it("throws when runtime type is unsupported", () => {
		expect(() => DDate.createOrThrow(undefined as any)).toThrow(DDate.CreateTheDateError);
	});
});
