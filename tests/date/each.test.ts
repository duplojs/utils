import { DArray, DDate, type ExpectType } from "@scripts";
import { fromIso } from "./utils";

describe("each", () => {
	it("iterates days inclusively in ascending order by default", () => {
		const iterable = DDate.each({
			start: fromIso("2024-01-01T00:00:00.000Z"),
			end: fromIso("2024-01-03T00:00:00.000Z"),
		});

		const result = DArray.from(iterable);

		expect(result).toStrictEqual([
			fromIso("2024-01-01T00:00:00.000Z"),
			fromIso("2024-01-02T00:00:00.000Z"),
			fromIso("2024-01-03T00:00:00.000Z"),
		]);

		type check = ExpectType<
			typeof iterable,
			Generator<DDate.TheDate, unknown, unknown>,
			"strict"
		>;
	});

	it("supports descending ranges", () => {
		const result = DArray.from(DDate.each({
			start: fromIso("2024-01-05T00:00:00.000Z"),
			end: fromIso("2024-01-03T00:00:00.000Z"),
		}));

		expect(result).toStrictEqual([
			fromIso("2024-01-05T00:00:00.000Z"),
			fromIso("2024-01-04T00:00:00.000Z"),
			fromIso("2024-01-03T00:00:00.000Z"),
		]);
	});

	it("iterates hours when separator is hour", () => {
		const result = DArray.from(DDate.each({
			start: fromIso("2024-01-01T00:00:00.000Z"),
			end: fromIso("2024-01-01T03:00:00.000Z"),
		}, "hour"));

		expect(result).toStrictEqual([
			fromIso("2024-01-01T00:00:00.000Z"),
			fromIso("2024-01-01T01:00:00.000Z"),
			fromIso("2024-01-01T02:00:00.000Z"),
			fromIso("2024-01-01T03:00:00.000Z"),
		]);
	});

	it("handles months with varying lengths", () => {
		const result = DArray.from(DDate.each({
			start: fromIso("2024-01-15T00:00:00.000Z"),
			end: fromIso("2024-04-15T00:00:00.000Z"),
		}, "month"));

		expect(result).toStrictEqual([
			fromIso("2024-01-15T00:00:00.000Z"),
			fromIso("2024-02-15T00:00:00.000Z"),
			fromIso("2024-03-15T00:00:00.000Z"),
			fromIso("2024-04-15T00:00:00.000Z"),
		]);
	});

	it("returns single value when start equals end", () => {
		const result = DArray.from(DDate.each({
			start: fromIso("2024-01-01T00:00:00.000Z"),
			end: fromIso("2024-01-01T00:00:00.000Z"),
		}));

		expect(result).toStrictEqual([fromIso("2024-01-01T00:00:00.000Z")]);
	});

	it("supports seconds, minutes and milliseconds separators", () => {
		const seconds = DArray.from(DDate.each({
			start: fromIso("2024-01-01T00:00:00.000Z"),
			end: fromIso("2024-01-01T00:00:02.000Z"),
		}, "second"));

		expect(seconds).toStrictEqual([
			fromIso("2024-01-01T00:00:00.000Z"),
			fromIso("2024-01-01T00:00:01.000Z"),
			fromIso("2024-01-01T00:00:02.000Z"),
		]);

		const minutes = DArray.from(DDate.each({
			start: fromIso("2024-01-01T00:00:00.000Z"),
			end: fromIso("2024-01-01T00:02:00.000Z"),
		}, "minute"));

		expect(minutes).toStrictEqual([
			fromIso("2024-01-01T00:00:00.000Z"),
			fromIso("2024-01-01T00:01:00.000Z"),
			fromIso("2024-01-01T00:02:00.000Z"),
		]);

		const milliseconds = DArray.from(DDate.each({
			start: fromIso("2024-01-01T00:00:00.000Z"),
			end: fromIso("2024-01-01T00:00:00.002Z"),
		}, "milisecond"));

		expect(milliseconds).toStrictEqual([
			fromIso("2024-01-01T00:00:00.000Z"),
			fromIso("2024-01-01T00:00:00.001Z"),
			fromIso("2024-01-01T00:00:00.002Z"),
		]);
	});

	it("iterates across years", () => {
		const result = DArray.from(DDate.each({
			start: fromIso("2023-01-01T00:00:00.000Z"),
			end: fromIso("2025-01-01T00:00:00.000Z"),
		}, "year"));

		expect(result).toStrictEqual([
			fromIso("2023-01-01T00:00:00.000Z"),
			fromIso("2024-01-01T00:00:00.000Z"),
			fromIso("2025-01-01T00:00:00.000Z"),
		]);
	});

	it("exits early when step overshoots the end", () => {
		const result = DArray.from(DDate.each({
			start: fromIso("2024-01-01T00:00:00.000Z"),
			end: fromIso("2024-01-01T12:00:00.000Z"),
		}, "day"));

		expect(result).toStrictEqual([fromIso("2024-01-01T00:00:00.000Z")]);
	});

	it("handles dates before 1970", () => {
		const result = DArray.from(DDate.each({
			start: fromIso("-0001-01-01T00:00:00.000Z"),
			end: fromIso("-0001-01-03T00:00:00.000Z"),
		}));

		expect(result).toStrictEqual([
			fromIso("-0001-01-01T00:00:00.000Z"),
			fromIso("-0001-01-02T00:00:00.000Z"),
			fromIso("-0001-01-03T00:00:00.000Z"),
		]);
	});
});
