import { DClean, DDataParser, DEither, DPE, type RemoveKind, type ExpectType } from "@scripts";

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
		({ union, array, nullable }) => ({
			name: FormName,
			type: union(FormTypeHuman, FormTypeAgent),
			inputs: array(
				union(InputText, InputNumber),
				{
					min: 1,
					max: 5,
				},
			),
			description: nullable(FormDescription),
			tags: nullable(
				array(FormTag),
			),
			test: array(nullable(FormTag)),
		}),
	);

	type FormEntity = DClean.GetEntity<typeof FormEntity>;

	type Check = ExpectType<
		RemoveKind<FormEntity>,
		{
			readonly name: DClean.NewType<"formName", string, "max100">;
			readonly type: (
				| DClean.NewType<
					"formTypeHuman", {
						readonly siret: string;
					},
					never
				>
				| DClean.NewType<
					"formTypeAgent",
					{
						readonly key: string;
						readonly webHook: string;
					},
					never
				>
			);
			readonly inputs: readonly [
				(
					| DClean.NewType<
						"inputText",
						{
							readonly value: string;
							readonly require: boolean;
						},
						never
					>
					| DClean.NewType<
						"inputNumber",
						{
							readonly value: number;
							readonly require: boolean;
						},
						never
					>
				),
				...(
					| DClean.NewType<
						"inputText",
						{
							readonly value: string;
							readonly require: boolean;
						},
						never
					>
					| DClean.NewType<
						"inputNumber",
						{
							readonly value: number;
							readonly require: boolean;
						},
						never
					>
				)[],
			];
			readonly description: DClean.NewType<"formDescription", string, never> | null;
			readonly tags: readonly DClean.NewType<"formTag", string, never>[] | null;
			readonly test: readonly DClean.NewType<"formTag", string, never>[] | null;
		},
		"strict"
	>;

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
			tags: null,
			test: [],
		});

		expect(form).toStrictEqual(
			DClean.entityKind.setTo({
				name,
				type,
				inputs,
				description: null,
				tags: null,
				test: [],
			}, "Form"),
		);

		type Check = ExpectType<
			typeof form,
			& DClean.Entity<"Form">
			& {
				readonly name: DClean.NewType<"formName", "Super Form", "max100">;
				readonly type: DClean.NewType<"formTypeAgent", {
					readonly key: "k";
					readonly webHook: "url";
				}, never>;
				readonly inputs: readonly [
					DClean.NewType<"inputNumber", {
						readonly value: 2;
						readonly require: false;
					}, never>,
				];
				readonly description: null;
				readonly tags: null;
				readonly test: readonly [];
			},
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
			tags: null,
			test: [],
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
				tags: null,
				test: [],
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
			test: null,
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
					test: null,
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
			test: null,
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
			test: null,
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
			test: null,
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
			test: null,
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

	it("is returns true only for matching entity name", () => {
		const OtherEntity = DClean.createEntity(
			"Other",
			() => ({
				name: FormName,
			}),
		);

		const formFromMap = FormEntity.mapOrThrow({
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
			description: null,
			tags: [],
			test: null,
		});

		const formFromNew = FormEntity.new({
			name: FormName.createOrThrow("Bob"),
			type: FormTypeHuman.createOrThrow({ siret: "123" }),
			inputs: [
				InputNumber.createOrThrow({
					value: 1,
					require: false,
				}),
			],
			description: null,
			tags: null,
			test: [],
		});

		const other = OtherEntity.mapOrThrow({ name: "X" });

		expect(FormEntity.is(formFromMap)).toBe(true);
		expect(FormEntity.is(formFromNew)).toBe(true);
		expect(FormEntity.is(other)).toBe(false);
		expect(FormEntity.is({ name: "Alice" })).toBe(false);
	});

	it("update returns entity with merged properties and kind marker", () => {
		const name = FormName.createOrThrow("Old");
		const type = FormTypeHuman.createOrThrow({ siret: "123" });
		const inputs = [
			InputNumber.createOrThrow({
				value: 10,
				require: true,
			}),
		] as const;
		const description = FormDescription.createOrThrow("Updated");

		const form = FormEntity.new({
			name,
			type,
			inputs,
			description,
			tags: null,
			test: [],
		});

		const updated = FormEntity.update(form, {
			name: FormName.createOrThrow("New"),
			description: null,
			tags: [],
		});

		expect(updated).toStrictEqual(
			DClean.entityKind.setTo({
				name: FormName.createOrThrow("New"),
				type,
				inputs,
				description: null,
				tags: [],
				test: [],
			}, "Form"),
		);

		type check1 = ExpectType<
			typeof form,
			DClean.Entity<"Form">
			& {
				readonly name: DClean.NewType<"formName", "Old", "max100">;
				readonly type: DClean.NewType<"formTypeHuman", {
					readonly siret: "123";
				}, never>;
				readonly inputs: readonly [DClean.NewType<"inputNumber", {
					readonly value: 10;
					readonly require: true;
				}, never>];
				readonly description: DClean.NewType<"formDescription", "Updated", never>;
				readonly tags: null;
				readonly test: readonly [];
			},
			"strict"
		>;

		type check = ExpectType<
			typeof updated,
			DClean.Entity<"Form">
			& {
				readonly type: DClean.NewType<"formTypeHuman", {
					readonly siret: "123";
				}, never>;
				readonly inputs: readonly [DClean.NewType<"inputNumber", {
					readonly value: 10;
					readonly require: true;
				}, never>];
				readonly test: readonly [];
				readonly name: DClean.NewType<"formName", "New", "max100">;
				readonly description: null;
				readonly tags: readonly [];
			},
			"strict"
		>;
	});
});
