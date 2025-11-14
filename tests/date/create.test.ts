import { type ExpectType, DDate } from "@scripts";

describe("create", () => {
	it("create from timestamp", () => {
		const result = DDate.create(1609459200000);

		expect(result).toBe("date1609459200000+");

		type check = ExpectType<
			typeof result,
			`date${number}${"+" | "-"}`,
			"strict"
		>;
	});

	it("create from negative timestamp", () => {
		const result = DDate.create(-1000);

		expect(result).toBe("date1000-");

		type check = ExpectType<
			typeof result,
			`date${number}${"+" | "-"}`,
			"strict"
		>;
	});

	it("create from unsafe timestamp", () => {
		const result = DDate.create(Number.MAX_SAFE_INTEGER + 1);

		expect(result).toBe("date0+");

		type check = ExpectType<
			typeof result,
			`date${number}${"+" | "-"}`,
			"strict"
		>;
	});

	it("create from timestamp out of range (too high)", () => {
		const result = DDate.create(8640000000000001);

		expect(result).toBe("date0+");

		type check = ExpectType<
			typeof result,
			`date${number}${"+" | "-"}`,
			"strict"
		>;
	});

	it("create from timestamp out of range (too low)", () => {
		const result = DDate.create(-8640000000000001);

		expect(result).toBe("date0+");

		type check = ExpectType<
			typeof result,
			`date${number}${"+" | "-"}`,
			"strict"
		>;
	});

	it("create from Date object", () => {
		const nativeDate = new Date("2021-01-01T00:00:00.000Z");
		const result = DDate.create(nativeDate);

		expect(result).toBe("date1609459200000+");

		type check = ExpectType<
			typeof result,
			`date${number}${"+" | "-"}`,
			"strict"
		>;
	});

	it("create from Date object with negative timestamp", () => {
		const nativeDate = new Date(-1000);
		const result = DDate.create(nativeDate);

		expect(result).toBe("date1000-");

		type check = ExpectType<
			typeof result,
			`date${number}${"+" | "-"}`,
			"strict"
		>;
	});

	it("create from TheDate", () => {
		const result = DDate.create("date1609459200000+");

		expect(result).toBe("date1609459200000+");

		type check = ExpectType<
			typeof result,
			`date${number}${"+" | "-"}`,
			"strict"
		>;
	});

	it("create from TheDate negative", () => {
		const result = DDate.create("date1000-");

		expect(result).toBe("date1000-");

		type check = ExpectType<
			typeof result,
			`date${number}${"+" | "-"}`,
			"strict"
		>;
	});

	it("create from string date format basic", () => {
		const result = DDate.create("2021y-1m-1d");

		expect(result).toBe("date1609459200000+");

		type check = ExpectType<
			typeof result,
			`date${number}${"+" | "-"}`,
			"strict"
		>;
	});

	it("create from string date format with hours", () => {
		const result = DDate.create("2021y-1m-1d-12h");

		expect(result).toBe("date1609502400000+");

		type check = ExpectType<
			typeof result,
			`date${number}${"+" | "-"}`,
			"strict"
		>;
	});

	it("create from string date format with hours and minutes", () => {
		const result = DDate.create("2021y-1m-1d-12h-30mn");

		expect(result).toBe("date1609504200000+");

		type check = ExpectType<
			typeof result,
			`date${number}${"+" | "-"}`,
			"strict"
		>;
	});

	it("create from string date format with hours, minutes and seconds", () => {
		const result = DDate.create("2021y-1m-1d-12h-30mn-45s");

		expect(result).toBe("date1609504245000+");

		type check = ExpectType<
			typeof result,
			`date${number}${"+" | "-"}`,
			"strict"
		>;
	});

	it("create from string date format complete", () => {
		const result = DDate.create("2021y-1m-1d-12h-30mn-45s-123ms");

		expect(result).toBe("date1609504245123+");

		type check = ExpectType<
			typeof result,
			`date${number}${"+" | "-"}`,
			"strict"
		>;
	});

	it("create from string date format before Christ", () => {
		const result = DDate.create("-100y-1m-1d");

		const nativeDate = new Date(0);
		nativeDate.setUTCFullYear(-100);
		nativeDate.setUTCMonth(0);
		nativeDate.setUTCDate(1);

		expect(result).toBe(`date${Math.abs(nativeDate.getTime())}-`);

		type check = ExpectType<
			typeof result,
			`date${number}${"+" | "-"}`,
			"strict"
		>;
	});

	it("create from invalid string", () => {
		const result = DDate.create("invalid" as any);

		expect(result).toBe("date0+");

		type check = ExpectType<
			typeof result,
			`date${number}${"+" | "-"}`,
			"strict"
		>;
	});

	it("create from string date format February 29 leap year", () => {
		const result = DDate.create("2020y-2m-29d");

		expect(result).toBe("date1582934400000+");

		type check = ExpectType<
			typeof result,
			`date${number}${"+" | "-"}`,
			"strict"
		>;
	});
});
