import { MissingBuilderMethodsError, builderKind, createBuilder, type Builder } from "@scripts";

interface PersonBuilder extends Builder<{
	name?: string;
	age: number;
}> {
	setName(name: string): PersonBuilder;
	setAge(age: number): PersonBuilder;
	getName(): string | undefined;
	makeError(): never;
	build(): {
		name?: string;
		age: number;
	};
}

describe("builder", () => {
	it("createBuilder", () => {
		const personBuilder = createBuilder<PersonBuilder>("person-builder-test");

		personBuilder
			.set("setName", (params) => {
				const [name] = params.args;

				return params.next({
					...params.accumulator,
					name,
				});
			})
			.set("setAge", (params) => {
				const [age] = params.args;

				return params.next({
					...params.accumulator,
					age,
				});
			})
			.set("getName", (params) => params.accumulator.name)
			.set("build", (params) => params.accumulator);

		const builder = personBuilder.use({
			age: 0,
		});

		expect(builderKind.has(builder)).toBe(true);

		expect(builder.build()).toStrictEqual({
			age: 0,
		});

		expect(builder.setAge(1).build()).toStrictEqual({
			age: 1,
		});

		expect(builder.setName("math").build()).toStrictEqual({
			age: 0,
			name: "math",
		});

		expect(
			builder
				.setName("math")
				.setAge(2)
				.build(),
		).toStrictEqual({
			age: 2,
			name: "math",
		});

		expect(builder.getName()).toStrictEqual(undefined);
		expect(builder.setName("math").getName()).toStrictEqual("math");

		expect(builderKind.getValue(builder)).toStrictEqual({ age: 0 });
		expect(() => builder.makeError()).toThrow(MissingBuilderMethodsError);
	});
});
