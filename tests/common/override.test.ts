import { createOverride } from "@scripts/common/override";

interface Service {
	value: number;
	getValue(): number;
	increment(delta: number): number;
}

describe("createOverride", () => {
	it("overrides methods and properties", () => {
		const handler = createOverride<Service>("service.override");
		handler.setMethod("getValue", (self) => self.value * 2);
		handler.setMethod("increment", (self, delta) => self.value + delta + 1);
		handler.setPropertyDefaultValue("value", 10);

		const base: Service = {
			value: 1,
			getValue() {
				return this.value;
			},
			increment(delta) {
				return this.value + delta;
			},
		};

		const result = handler.apply(base);

		expect(result.value).toBe(10);
		expect(result.getValue()).toBe(20);
		expect(result.increment(5)).toBe(16);
	});
});
