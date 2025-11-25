import { type ExpectType, InvalidMillisecondInStringError, stringToMillisecond } from "@scripts";

describe("stringToMillisecond", () => {
	it("convert 13 minute", () => {
		expect(stringToMillisecond("13m")).toBe(780000);
	});

	it("convert 5.5 week", () => {
		expect(stringToMillisecond("5.5w")).toBe(3326400000);
	});

	it("keep input number", () => {
		expect(stringToMillisecond(200)).toBe(200);
	});

	it("keep 1 minute and 5 second", () => {
		expect(stringToMillisecond("1m", "5s")).toBe(65000);
	});

	it("force wrong input", () => {
		expect(() => stringToMillisecond("toto" as any)).toThrowError(InvalidMillisecondInStringError);
	});
});
