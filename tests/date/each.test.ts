import { DArray, DDate, type ExpectType } from "@scripts";

describe("each", () => {
	it("iterates days inclusively in ascending order by default", () => {
		const iterable = DDate.each({
			start: DDate.create("2024y-1m-1d"),
			end: DDate.create("2024y-1m-3d"),
		});

		const result = DArray.from(iterable);

		expect(result).toStrictEqual([
			DDate.create("2024y-1m-1d"),
			DDate.create("2024y-1m-2d"),
			DDate.create("2024y-1m-3d"),
		]);

		type check = ExpectType<
			typeof iterable,
			Generator<DDate.TheDate, unknown, unknown>,
			"strict"
		>;
	});

	it("supports descending ranges", () => {
		const result = DArray.from(DDate.each({
			start: DDate.create("2024y-1m-5d"),
			end: DDate.create("2024y-1m-3d"),
		}));

		expect(result).toStrictEqual([
			DDate.create("2024y-1m-5d"),
			DDate.create("2024y-1m-4d"),
			DDate.create("2024y-1m-3d"),
		]);
	});

	it("iterates hours when separator is hour", () => {
		const result = DArray.from(DDate.each({
			start: DDate.create("2024y-1m-1d-0h"),
			end: DDate.create("2024y-1m-1d-3h"),
		}, "hour"));

		expect(result).toStrictEqual([
			DDate.create("2024y-1m-1d-0h"),
			DDate.create("2024y-1m-1d-1h"),
			DDate.create("2024y-1m-1d-2h"),
			DDate.create("2024y-1m-1d-3h"),
		]);
	});

	it("handles months with varying lengths", () => {
		const result = DArray.from(DDate.each({
			start: DDate.create("2024y-1m-15d"),
			end: DDate.create("2024y-4m-15d"),
		}, "month"));

		expect(result).toStrictEqual([
			DDate.create("2024y-1m-15d"),
			DDate.create("2024y-2m-15d"),
			DDate.create("2024y-3m-15d"),
			DDate.create("2024y-4m-15d"),
		]);
	});

	it("returns single value when start equals end", () => {
		const result = DArray.from(DDate.each({
			start: DDate.create("2024y-1m-1d"),
			end: DDate.create("2024y-1m-1d"),
		}));

		expect(result).toStrictEqual([DDate.create("2024y-1m-1d")]);
	});

	it("supports seconds, minutes and milliseconds separators", () => {
		const seconds = DArray.from(DDate.each({
			start: DDate.create("2024y-1m-1d-0h-0mn-0s"),
			end: DDate.create("2024y-1m-1d-0h-0mn-2s"),
		}, "second"));

		expect(seconds).toStrictEqual([
			DDate.create("2024y-1m-1d-0h-0mn-0s"),
			DDate.create("2024y-1m-1d-0h-0mn-1s"),
			DDate.create("2024y-1m-1d-0h-0mn-2s"),
		]);

		const minutes = DArray.from(DDate.each({
			start: DDate.create("2024y-1m-1d-0h-0mn"),
			end: DDate.create("2024y-1m-1d-0h-2mn"),
		}, "minute"));

		expect(minutes).toStrictEqual([
			DDate.create("2024y-1m-1d-0h-0mn"),
			DDate.create("2024y-1m-1d-0h-1mn"),
			DDate.create("2024y-1m-1d-0h-2mn"),
		]);

		const milliseconds = DArray.from(DDate.each({
			start: DDate.create("2024y-1m-1d-0h-0mn-0s-0ms"),
			end: DDate.create("2024y-1m-1d-0h-0mn-0s-2ms"),
		}, "milisecond"));

		expect(milliseconds).toStrictEqual([
			DDate.create("2024y-1m-1d-0h-0mn-0s-0ms"),
			DDate.create("2024y-1m-1d-0h-0mn-0s-1ms"),
			DDate.create("2024y-1m-1d-0h-0mn-0s-2ms"),
		]);
	});

	it("iterates across years", () => {
		const result = DArray.from(DDate.each({
			start: DDate.create("2023y-1m-1d"),
			end: DDate.create("2025y-1m-1d"),
		}, "year"));

		expect(result).toStrictEqual([
			DDate.create("2023y-1m-1d"),
			DDate.create("2024y-1m-1d"),
			DDate.create("2025y-1m-1d"),
		]);
	});

	it("exits early when step overshoots the end", () => {
		const result = DArray.from(DDate.each({
			start: DDate.create("2024y-1m-1d"),
			end: DDate.create("2024y-1m-1d-12h"),
		}, "day"));

		expect(result).toStrictEqual([DDate.create("2024y-1m-1d")]);
	});

	it("handles dates before 1970", () => {
		const result = DArray.from(DDate.each({
			start: DDate.create("-1y-1m-1d"),
			end: DDate.create("-1y-1m-3d"),
		}));

		expect(result).toStrictEqual([
			DDate.create("-1y-1m-1d"),
			DDate.create("-1y-1m-2d"),
			DDate.create("-1y-1m-3d"),
		]);
	});
});
