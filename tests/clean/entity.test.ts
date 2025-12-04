import { DClean, DDataParser, DEither, DPE, type ExpectType } from "@scripts";

describe("createEntity", () => {
	const MaxConstraint = DClean.createConstraint(
		"max100",
		DClean.String,
		DDataParser.checkerStringMax(100),
	);

	const FormName = DClean.createNewType(
		"formName",
		DPE.string(),
		MaxConstraint,
	);

	const FormTypeHuman = DClean.createNewType(
		"formTypeHuman",
		DPE.object({
			siret: DPE.string(),
		}),
	);

	const FormTypeAgent = DClean.createNewType(
		"formTypeAgent",
		DPE.object({
			key: DPE.string(),
			webHook: DPE.string(),
		}),
	);

	const InputText = DClean.createNewType(
		"inputText",
		DPE.object({
			value: DPE.string(),
			require: DPE.boolean(),
		}),
	);

	const InputNumber = DClean.createNewType(
		"inputNumber",
		DPE.object({
			value: DPE.number(),
			require: DPE.boolean(),
		}),
	);

	const FormDescription = DClean.createNewType(
		"formDescription",
		DPE.string(),
	);

	const FormTag = DClean.createNewType(
		"formTag",
		DPE.string(),
	);

	const FormEntity = DClean.createEntity(
		"Form",
		{
			name: FormName,
			type: [FormTypeHuman, FormTypeAgent],
			inputs: {
				type: [InputText, InputNumber],
				inArray: {
					min: 1,
					max: 5,
				},
			},
			description: {
				type: FormDescription,
				nullable: true,
			},
			tags: {
				type: FormTag,
				inArray: true,
			},
		},
	);

	type FormEntity = DClean.GetEntity<typeof FormEntity>;

	it("new returns entity with kind marker", () => {
		const name = FormName.createOrThrow("Super Form");
		const type = FormTypeAgent.createOrThrow({
			key: "k",
			webHook: "url",
		});
		const inputs = [
			InputNumber.createOrThrow({
				value: 2,
				require: false,
			}),
		] as const;

		const form = FormEntity.new({
			name,
			type,
			inputs,
			description: null,
			tags: [],
		});

		expect(form).toStrictEqual(
			DClean.entityKind.setTo({
				name,
				type,
				inputs,
				description: null,
				tags: [],
			}, "Form"),
		);

		type Check = ExpectType<
			typeof form,
			DClean.Entity<"Form", {
				name: DClean.NewType<"formName", "Super Form", "max100">;
				type: DClean.NewType<"formTypeAgent", {
					readonly key: "k";
					readonly webHook: "url";
				}, never>;
				inputs: readonly [
					DClean.NewType<"inputNumber", {
						readonly value: 2;
						readonly require: false;
					}, never>,
				];
				description: null;
				tags: never[];
			}>,
			"strict"
		>;
	});

	it("map returns entity on valid raw properties", () => {
		const result = FormEntity.map({
			name: "Alice",
			type: {
				key: "agent",
				webHook: "hook",
			},
			inputs: [
				{
					value: "hello",
					require: true,
				},
			],
			description: "desc",
			tags: [],
		});

		expect(result).toStrictEqual(DEither.right(
			"createEntity",
			DClean.entityKind.setTo({
				name: FormName.createOrThrow("Alice"),
				type: FormTypeAgent.createOrThrow({
					key: "agent",
					webHook: "hook",
				}),
				inputs: [
					InputText.createOrThrow({
						value: "hello",
						require: true,
					}),
				],
				description: FormDescription.createOrThrow("desc"),
				tags: [],
			}, "Form"),
		));

		type Check = ExpectType<
			typeof result,
			| DEither.EitherLeft<"createEntityError", DPE.DataParserError>
			| DEither.EitherRight<"createEntity", FormEntity>,
			"strict"
		>;
	});

	it("map handles alternative union branch", () => {
		const result = FormEntity.map({
			name: "Bob",
			type: { siret: "123" },
			inputs: [
				{
					value: 5,
					require: false,
				},
			],
			description: null,
			tags: [],
		});

		expect(result).toStrictEqual(
			DEither.right(
				"createEntity",
				DClean.entityKind.setTo({
					name: FormName.createOrThrow("Bob"),
					type: FormTypeHuman.createOrThrow({ siret: "123" }),
					inputs: [
						InputNumber.createOrThrow({
							value: 5,
							require: false,
						}),
					],
					description: null,
					tags: [],
				}, "Form"),
			),
		);
	});

	it("map returns error on invalid raw properties", () => {
		const result = FormEntity.map({
			name: "Invalid",
			type: { siret: "ok" },
			inputs: [],
			description: null,
			tags: [],
		});

		expect(result).toStrictEqual(
			DEither.left(
				"createEntityError",
				expect.objectContaining({
					issues: expect.arrayContaining([
						expect.objectContaining({
							path: "inputs",
						}),
					]),
				}),
			),
		);
	});

	it("map returns error when inputs exceed max", () => {
		const result = FormEntity.map({
			name: "Too many",
			type: {
				key: "a",
				webHook: "b",
			},
			inputs: Array.from({ length: 6 }, (__, index) => ({
				value: `t${index}`,
				require: true,
			})),
			description: "desc",
			tags: [],
		});

		expect(result).toStrictEqual(
			DEither.left(
				"createEntityError",
				expect.objectContaining({
					issues: expect.any(Array),
				}),
			),
		);
	});

	it("mapOrThrow returns entity or throws on error", () => {
		const form = FormEntity.mapOrThrow({
			name: "Charlie",
			type: {
				key: "a",
				webHook: "b",
			},
			inputs: [
				{
					value: 3,
					require: false,
				},
			],
			description: "optional",
			tags: [],
		});

		expect(form).toStrictEqual(DClean.entityKind.setTo({
			name: FormName.createOrThrow("Charlie"),
			type: FormTypeAgent.createOrThrow({
				key: "a",
				webHook: "b",
			}),
			inputs: [
				InputNumber.createOrThrow({
					value: 3,
					require: false,
				}),
			],
			description: FormDescription.createOrThrow("optional"),
			tags: [],
		}, "Form"));

		type Check = ExpectType<
			typeof form,
			FormEntity,
			"strict"
		>;

		expect(() => FormEntity.mapOrThrow({
			name: "Charlie",
			type: {
				key: "a",
				webHook: "b",
			},
			inputs: [
				{
					value: "",
					require: false,
				},
			],
		} as never)).toThrow(DClean.CreateEntityError);
	});
});
