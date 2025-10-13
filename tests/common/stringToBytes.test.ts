import { type ExpectType, InvalidBytesInStringError, stringToBytes } from "@scripts";

describe("stringToBytes", () => {
	it("convert 12 byte", () => {
		expect(stringToBytes("12b")).toBe(12);
	});

	it("convert 5.6 mega byte", () => {
		expect(stringToBytes("5.6mb")).toBe(5872025);
	});

	it("keep input number", () => {
		expect(stringToBytes(5872025)).toBe(5872025);
	});

	it("force wrong input", () => {
		expect(() => stringToBytes("toto" as any)).toThrowError(InvalidBytesInStringError);
	});

	it("test instance of", () => {
		expect(InvalidBytesInStringError.instanceof(new Error())).toBe(false);

		const error = new InvalidBytesInStringError("test") as unknown;

		const isInstanceOf = InvalidBytesInStringError.instanceof(error);

		expect(isInstanceOf).toBe(true);

		if (isInstanceOf) {
			type check = ExpectType<
				typeof error,
				InvalidBytesInStringError,
				"strict"
			>;
		}
	});
});
