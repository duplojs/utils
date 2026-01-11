import { type ExpectType, DDate, pipe } from "@scripts";

describe("formatTime", () => {
	it("formats a time using all supported tokens", () => {
		const theTime = DDate.createTheTime(788_645_006);
		const result = DDate.formatTime(theTime, "WW DD HH:mm:ss.SSS");

		expect(result).toBe("01 02 03:04:05.006");

		type check = ExpectType<
			typeof result,
			string,
			"strict"
		>;
	});

	it("formats negative time values with a leading minus", () => {
		const theTime = DDate.createTheTime(-5_000);
		const result = DDate.formatTime(theTime, "ss.SSS");

		expect(result).toBe("-05.000");
	});

	it("formats with the curried signature in a pipe", () => {
		const theTime = DDate.createTheTime(788_645_006);
		const result = pipe(
			theTime,
			DDate.formatTime("HH:mm"),
		);

		expect(result).toBe("03:04");
	});
});
