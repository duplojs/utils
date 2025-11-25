import { DArray, DDate, type ExpectType } from "@scripts";

describe("each", () => {
	it("iterates days inclusively in ascending order by default", () => {
		const iterable = DDate.each({
			start: DDate.create("2024-01-01"),
			end: DDate.create("2024-01-03"),
		});

		const result = DArray.from(iterable);

		expect(result).toStrictEqual([
			DDate.create("2024-01-01"),
			DDate.create("2024-01-02"),
			DDate.create("2024-01-03"),
		]);

		type check = ExpectType<
			typeof iterable,
			Generator<DDate.TheDate, unknown, unknown>,
			"strict"
		>;
	});

	it("supports descending ranges", () => {
		const result = DArray.from(DDate.each({
			start: DDate.create("2024-01-05"),
			end: DDate.create("2024-01-03"),
		}));

		expect(result).toStrictEqual([
			DDate.create("2024-01-05"),
			DDate.create("2024-01-04"),
			DDate.create("2024-01-03"),
		]);
	});

	it("iterates hours when separator is hour", () => {
		const result = DArray.from(DDate.each({
			start: DDate.create("2024-01-01"),
			end: DDate.create("2024-01-01", { hour: "03" }),
		}, "hour"));

		expect(result).toStrictEqual([
			DDate.create("2024-01-01"),
			DDate.create("2024-01-01", { hour: "01" }),
			DDate.create("2024-01-01", { hour: "02" }),
			DDate.create("2024-01-01", { hour: "03" }),
		]);
	});

	it("handles months with varying lengths", () => {
		const result = DArray.from(DDate.each({
			start: DDate.create("2024-01-15"),
			end: DDate.create("2024-04-15"),
		}, "month"));

		expect(result).toStrictEqual([
			DDate.create("2024-01-15"),
			DDate.create("2024-02-15"),
			DDate.create("2024-03-15"),
			DDate.create("2024-04-15"),
		]);
	});

	it("returns single value when start equals end", () => {
		const result = DArray.from(DDate.each({
			start: DDate.create("2024-01-01"),
			end: DDate.create("2024-01-01"),
		}));

		expect(result).toStrictEqual([DDate.create("2024-01-01")]);
	});

	it("supports seconds, minutes and milliseconds separators", () => {
		const seconds = DArray.from(DDate.each({
			start: DDate.create("2024-01-01"),
			end: DDate.create("2024-01-01", { second: "02" }),
		}, "second"));

		expect(seconds).toStrictEqual([
			DDate.create("2024-01-01"),
			DDate.create("2024-01-01", { second: "01" }),
			DDate.create("2024-01-01", { second: "02" }),
		]);

		const minutes = DArray.from(DDate.each({
			start: DDate.create("2024-01-01"),
			end: DDate.create("2024-01-01", { minute: "02" }),
		}, "minute"));

		expect(minutes).toStrictEqual([
			DDate.create("2024-01-01"),
			DDate.create("2024-01-01", { minute: "01" }),
			DDate.create("2024-01-01", { minute: "02" }),
		]);

		const milliseconds = DArray.from(DDate.each({
			start: DDate.create("2024-01-01"),
			end: DDate.create("2024-01-01", { millisecond: "002" }),
		}, "millisecond"));

		expect(milliseconds).toStrictEqual([
			DDate.create("2024-01-01"),
			DDate.create("2024-01-01", { millisecond: "001" }),
			DDate.create("2024-01-01", { millisecond: "002" }),
		]);
	});

	it("iterates across years", () => {
		const result = DArray.from(DDate.each({
			start: DDate.create("2023-01-01"),
			end: DDate.create("2025-01-01"),
		}, "year"));

		expect(result).toStrictEqual([
			DDate.create("2023-01-01"),
			DDate.create("2024-01-01"),
			DDate.create("2025-01-01"),
		]);
	});

	it("exits early when step overshoots the end", () => {
		const result = DArray.from(DDate.each({
			start: DDate.create("2024-01-01"),
			end: DDate.create("2024-01-01", { hour: "12" }),
		}, "day"));

		expect(result).toStrictEqual([DDate.create("2024-01-01")]);
	});

	it("handles dates before 1970", () => {
		const result = DArray.from(DDate.each({
			start: DDate.create("-0001-01-01"),
			end: DDate.create("-0001-01-03"),
		}));

		expect(result).toStrictEqual([
			DDate.create("-0001-01-01"),
			DDate.create("-0001-01-02"),
			DDate.create("-0001-01-03"),
		]);
	});
});
