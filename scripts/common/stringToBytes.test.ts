import { InvalidBytesInStringError, stringToBytes } from "./stringToBytes";

it("stringToBytes", () => {
	expect(stringToBytes("12b")).toBe(12);

	expect(stringToBytes("5.6mb")).toBe(5872025);

	expect(stringToBytes(5872025)).toBe(5872025);

	expect(() => stringToBytes("toto" as any)).toThrowError(InvalidBytesInStringError);
});
