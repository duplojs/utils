import { createOverride } from "@scripts";

interface Service {
	value: number;
	getValue(): number;
	increment(delta: number): number;
	superValue: string;
}

describe("createOverride", () => {
	it("overrides methods and properties", () => {
		const handler = createOverride<Service>("service.override");
		handler.setMethod("getValue", (self) => self.value * 2);

		const base = { superValue: "value" } as Service;

		const result = handler.apply(handler.apply(base as any));

		handler.setMethod("increment", (self, delta) => self.value + delta + 1);
		handler.setPropertyDefaultValue("value", 10);

		expect(result.value).toBe(10);
		expect(result.getValue()).toBe(20);
		expect(result.increment(5)).toBe(16);
		expect({ ...result }).toStrictEqual({
			getValue: expect.any(Function),
			increment: expect.any(Function),
			superValue: "value",
			value: 10,
		});
	});
});
