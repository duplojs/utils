import { asserts, isType, AssertsError } from "@scripts";

const input: string | number = "demo";
asserts(input, isType("string"));

const payload: { id?: number } = { id: 1 };
asserts(payload.id, isType("undefined"));

try {
	asserts(42 as string | number, isType("string"));
} catch (error) {
	if (error instanceof AssertsError) {
		const failedValue = error.value;
	}
}
