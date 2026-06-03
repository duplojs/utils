import { bindPrototypeMethods, pipe, type ExpectType } from "@scripts";

describe("bindPrototypeMethods", () => {
	it("binds prototype methods to the instance", () => {
		class Counter {
			public value = 1;

			public increment(delta: number) {
				this.value += delta;
				return this.value;
			}
		}

		const counter = new Counter();
		bindPrototypeMethods(counter);
		const increment = counter.increment;

		expect(increment(2)).toBe(3);
		expect(counter.value).toBe(3);
	});

	it("binds inherited methods and keeps the closest overridden method", () => {
		class Parent {
			public value = "parent";

			public getValue() {
				return this.value;
			}

			public getParentValue() {
				return this.value;
			}
		}

		class Child extends Parent {
			public override value = "child";

			public override getValue() {
				return `child:${this.value}`;
			}
		}

		const child = new Child();
		bindPrototypeMethods(child);
		const getValue = child.getValue;
		const getParentValue = child.getParentValue;

		expect(getValue()).toBe("child:child");
		expect(getParentValue()).toBe("child");
	});

	it("ignores accessors and non-writable prototype methods", () => {
		class Service {
			public value = "value";

			public get label() {
				return this.value;
			}

			public locked() {
				return this.value;
			}
		}

		Object.defineProperty(Service.prototype, "locked", {
			writable: false,
		});

		const service = new Service();
		const locked = service.locked;
		bindPrototypeMethods(service);

		expect(service.label).toBe("value");
		expect(() => locked()).toThrow();
		expect(Object.hasOwn(service, "label")).toBe(false);
		expect(Object.hasOwn(service, "locked")).toBe(false);
	});

	it("does nothing for an object with a null prototype", () => {
		const instance = Object.create(null) as object;

		bindPrototypeMethods(instance);
		expect(Object.getPrototypeOf(instance)).toBeNull();
	});
});
