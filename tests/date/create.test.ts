import { DDate, type ExpectType, pipe } from "@scripts/index";

describe("create", () => {
	it("should create date from string", () => {
		const dateStr = "2023-12-25T14:30:45.123Z";
		const result = DDate.create(dateStr);

		expect(result).toBeDefined();
		if (result) {
			expect(result).toBe(dateStr);
		}

        type check = ExpectType<
			typeof result,
			DDate.NewDate<"2023-12-25T14:30:45.123Z"> | undefined,
			"strict"
        >;
	});

	it("should create date from Date", () => {
		const date = new Date("2023-12-25T14:30:45.123Z");
		const result = DDate.create(date);

		expect(result).toBeDefined();
		if (result) {
			expect(result).toBe("2023-12-25T14:30:45.123Z");
		}

		type check = ExpectType<
			typeof result,
			DDate.NewDate | undefined,
			"strict"
		>;
	});

	it("should create date from timestamp", () => {
		const timestamp = 1703516245123;
		const result = DDate.create(timestamp);

		expect(result).toBeDefined();
		if (result) {
			expect(result).toBe("2023-12-25T14:57:25.123Z");
		}

		type check = ExpectType<
			typeof result,
			DDate.NewDate | undefined,
			"strict"
		>;
	});

	it("should create date from DateObject", () => {
		const parts = {
			year: 2023,
			month: 12,
			day: 25,
			hour: 14,
			minute: 30,
			second: 45,
			milliseconds: 123,
			timezone: "Z",
		} as const;

		const result = DDate.create(parts);

		expect(result).toBeDefined();
		if (result) {
			expect(result).toBe("2023-12-25T14:30:45.123Z");
		}

		type check = ExpectType<
			typeof result,
			DDate.NewDate<DDate.SerializedDate<typeof parts>> | undefined,
			"strict"
		>;
	});

	it("should create date from DateObject without milliseconds", () => {
		const parts = {
			year: 2023,
			month: 12,
			day: 25,
			hour: 14,
			minute: 30,
			second: 45,
			milliseconds: undefined,
			timezone: "+01:00",
		} as const;

		const result = DDate.create(parts);

		expect(result).toBeDefined();
		if (result) {
			expect(result).toBe("2023-12-25T14:30:45+01:00");
		}

		type check = ExpectType<
			typeof result,
			DDate.NewDate<DDate.NewDate<"2023-12-25T14:30:45+01:00">> | undefined,
			"strict"
		>;
	});

	it("use in pipe", () => {
		const result = pipe(
			DDate.create("2023-12-25T14:30:45.123Z"),
			(res) => {
				if (!res) {
					return "invalid-date";
				}
				return DDate.getYear(res);
			},
		);

		expect(result).toBe(2023);

		type check = ExpectType<
			typeof result,
			2023 | "invalid-date",
			"strict"
		>;
	});
});
