import { DArray, DClean, DDataParser, DEither, DPE, type RemoveKind, type ExpectType, pipe, unwrap } from "@scripts";

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
			] & DArray.MaxElements<5>;
			readonly description: DClean.NewType<"formDescription", string, never> | null;
			readonly tags: readonly DClean.NewType<"formTag", string, never>[] | null;
			readonly test: readonly (DClean.NewType<"formTag", string, never> | null)[];
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
			inputs: DArray.withMaxElements(inputs),
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
				] & DArray.MaxElements<5>;
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
			"hydratedEntity",
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
			| DEither.Left<"hydrateEntityError", DPE.DataParserError>
			| DEither.Right<"hydratedEntity", FormEntity>,
			"strict"
		>;
	});

	it("map in pipe", () => {
		const result = pipe(
			{
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
			},
			FormEntity.map,
		);

		expect(result).toStrictEqual(
			DEither.right("hydratedEntity", expect.any(Object)),
		);

		type Check = ExpectType<
			typeof result,
			| DEither.Left<"hydrateEntityError", DPE.DataParserError>
			| DEither.Right<"hydratedEntity", FormEntity>,
			"strict"
		>;
	});

	it("map returns refined flagged entity or refinement error", () => {
		const WithTagsFlag = DClean.createFlag<FormEntity, "withTags">("withTags");

		const successResult = FormEntity.map(
			{
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
				test: [],
			},
			(entity) => {
				const form: FormEntity = entity;

				if (entity.tags !== null) {
					return DEither.success(WithTagsFlag.append(form));
				}

				return DEither.left("missingTags");
			},
		);

		expect(DEither.isRight(successResult)).toBe(true);
		if (DEither.isRight(successResult)) {
			expect(WithTagsFlag.has(unwrap(successResult))).toBe(true);
		}

		type SuccessCheck = ExpectType<
			typeof successResult,
			| DEither.Left<"hydrateEntityError", DPE.DataParserError>
			| DEither.Left<"missingTags", undefined>
			| DEither.Success<
				FormEntity & DClean.Flag<"withTags", never>
			>,
			"strict"
		>;

		const failureResult = FormEntity.map(
			{
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
			},
			(entity) => {
				const form: FormEntity = entity;

				if (entity.tags !== null) {
					return DEither.success(WithTagsFlag.append(form));
				}

				return DEither.left("missingTags");
			},
		);

		expect(failureResult).toStrictEqual(DEither.left("missingTags"));
	});

	it("map distributes refined entity flags in the returned either", () => {
		const WithTagsFlag = DClean.createFlag<FormEntity, "withTags">("withTags");
		const WithDescriptionFlag = DClean.createFlag<FormEntity, "withDescription">("withDescription");

		const result = FormEntity.map(
			{
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
			},
			(entity) => {
				const form: FormEntity = entity;

				if (entity.tags !== null) {
					return DEither.success(WithTagsFlag.append(form));
				}

				if (entity.description !== null) {
					return DEither.success(WithDescriptionFlag.append(form));
				}

				return DEither.left("unrefined");
			},
		);

		expect(DEither.isRight(result)).toBe(true);
		if (DEither.isRight(result)) {
			expect(WithDescriptionFlag.has(unwrap(result))).toBe(true);
		}

		type Check = ExpectType<
			typeof result,
			| DEither.Left<"hydrateEntityError", DPE.DataParserError>
			| DEither.Left<"unrefined", undefined>
			| DEither.Success<
				FormEntity & DClean.Flag<"withTags", never>
			>
			| DEither.Success<
				FormEntity & DClean.Flag<"withDescription", never>
			>,
			"strict"
		>;
	});

	it("map supports curried refinement in pipe", () => {
		const WithTagsFlag = DClean.createFlag<FormEntity, "withTags">("withTags");

		const successResult = pipe(
			{
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
				test: [],
			},
			FormEntity.map(
				(entity) => entity.tags !== null
					? DEither.success(WithTagsFlag.append(entity))
					: DEither.left("missingTags"),
			),
		);

		expect(DEither.isRight(successResult)).toBe(true);
		if (DEither.isRight(successResult)) {
			expect(WithTagsFlag.has(unwrap(successResult))).toBe(true);
		}

		type SuccessCheck = ExpectType<
			typeof successResult,
			| DEither.Left<"hydrateEntityError", DPE.DataParserError>
			| DEither.Left<"missingTags", undefined>
			| DEither.Success<FormEntity & DClean.Flag<"withTags", never>>,
			"strict"
		>;

		const failureResult = pipe(
			{
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
			},
			FormEntity.map(
				(entity) => entity.tags !== null
					? DEither.success(WithTagsFlag.append(entity))
					: DEither.left("missingTags"),
			),
		);

		expect(failureResult).toStrictEqual(DEither.left("missingTags"));
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
			test: [null],
		});

		expect(result).toStrictEqual(
			DEither.right(
				"hydratedEntity",
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
					test: [null],
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
			test: [null],
		});

		expect(result).toStrictEqual(
			DEither.left(
				"hydrateEntityError",
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
			test: [null],
		});

		expect(result).toStrictEqual(
			DEither.left(
				"hydrateEntityError",
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
			test: [null],
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
			test: [null],
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
		} as never)).toThrow(DClean.HydrateEntityError);
	});

	it("mapOrThrow in pipe", () => {
		const form = pipe(
			{
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
				test: [null],
			},
			FormEntity.mapOrThrow,
		);

		expect(DClean.entityKind.has(form)).toStrictEqual(true);

		type Check = ExpectType<
			typeof form,
			FormEntity,
			"strict"
		>;
	});

	it("mapOrThrow returns refined flagged entity or throws refinement error", () => {
		const WithTagsFlag = DClean.createFlag<FormEntity, "withTags">("withTags");

		const form = FormEntity.mapOrThrow(
			{
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
				test: [null],
			},
			(entity) => {
				const form: FormEntity = entity;

				if (entity.tags !== null) {
					return DEither.success(WithTagsFlag.append(form));
				}

				return DEither.left("missingTags");
			},
		);

		expect(WithTagsFlag.has(form)).toBe(true);

		type Check = ExpectType<
			typeof form,
			FormEntity & DClean.Flag<"withTags", never>,
			"strict"
		>;

		expect(() => FormEntity.mapOrThrow(
			{
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
				tags: null,
				test: [null],
			},
			(entity) => {
				const form: FormEntity = entity;

				if (entity.tags !== null) {
					return DEither.success(WithTagsFlag.append(form));
				}

				return DEither.left("missingTags");
			},
		)).toThrow(DClean.RefineEntityError);
	});

	it("mapOrThrow distributes refined entity flags in the returned value", () => {
		const WithTagsFlag = DClean.createFlag<FormEntity, "withTags">("withTags");
		const WithDescriptionFlag = DClean.createFlag<FormEntity, "withDescription">("withDescription");

		const form = FormEntity.mapOrThrow(
			{
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
				tags: null,
				test: [null],
			},
			(entity) => {
				if (entity.tags !== null) {
					return DEither.success(WithTagsFlag.append(entity));
				}

				if (entity.description !== null) {
					return DEither.success(WithDescriptionFlag.append(entity));
				}

				return DEither.left("unrefined");
			},
		);

		expect(WithDescriptionFlag.has(form)).toBe(true);

		type Check = ExpectType<
			typeof form,
			(
				| FormEntity & DClean.Flag<"withTags", never>
				| FormEntity & DClean.Flag<"withDescription", never>
			),
			"strict"
		>;
	});

	it("mapOrThrow supports curried refinement in pipe", () => {
		const WithTagsFlag = DClean.createFlag<FormEntity, "withTags">("withTags");

		const form = pipe(
			{
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
				test: [null],
			},
			FormEntity.mapOrThrow(
				(entity) => entity.tags !== null
					? DEither.success(WithTagsFlag.append(entity))
					: DEither.left("missingTags"),
			),
		);

		expect(WithTagsFlag.has(form)).toBe(true);

		type Check = ExpectType<
			typeof form,
			FormEntity & DClean.Flag<"withTags", never>,
			"strict"
		>;

		expect(() => pipe(
			{
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
				tags: null,
				test: [null],
			},
			FormEntity.mapOrThrow((entity) => entity.tags !== null
				? DEither.success(WithTagsFlag.append(entity))
				: DEither.left("missingTags")),
		)).toThrow(DClean.RefineEntityError);
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
			test: [null],
		});

		const formFromNew = FormEntity.new({
			name: FormName.createOrThrow("Bob"),
			type: FormTypeHuman.createOrThrow({ siret: "123" }),
			inputs: DArray.withMaxElements([
				InputNumber.createOrThrow({
					value: 1,
					require: false,
				}),
			]),
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
			inputs: DArray.withMaxElements(inputs),
			description,
			tags: null,
			test: [],
		});

		const updated = FormEntity.update(form, {
			name: FormName.createOrThrow("New"),
			description: null as null | undefined,
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
				}, never>] & DArray.MaxElements<5>;
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
				}, never>] & DArray.MaxElements<5>;
				readonly test: readonly [];
				readonly name: DClean.NewType<"formName", "New", "max100">;
				readonly description: DClean.NewType<"formDescription", "Updated", never> | null;
				readonly tags: readonly [];
			},
			"strict"
		>;
	});

	it("supports structure property definitions in new map and update", () => {
		const ProfileLabel = DClean.createNewType(
			"profileLabel",
			DPE.string(),
		);
		const ProfileLevel = DClean.createNewType(
			"profileLevel",
			DPE.number(),
		);

		const ProfileEntity = DClean.createEntity(
			"Profile",
			({ structure, nullable, identifier }) => ({
				kind: identifier("profile"),
				config: structure({
					label: ProfileLabel,
					level: ProfileLevel,
					note: nullable(ProfileLabel),
				}),
			}),
		);

		const created = ProfileEntity.new({
			kind: "profile",
			config: {
				label: ProfileLabel.createOrThrow("admin"),
				level: ProfileLevel.createOrThrow(2),
				note: null,
			},
		});

		expect(created).toStrictEqual(
			DClean.entityKind.setTo(
				{
					kind: "profile",
					config: {
						label: ProfileLabel.createOrThrow("admin"),
						level: ProfileLevel.createOrThrow(2),
						note: null,
					},
				},
				"Profile",
			),
		);

		const mapped = ProfileEntity.map({
			kind: "profile",
			config: {
				label: "user",
				level: 1,
				note: "vip",
			},
		});

		expect(mapped).toStrictEqual(
			DEither.right(
				"hydratedEntity",
				DClean.entityKind.setTo({
					kind: "profile",
					config: {
						label: ProfileLabel.createOrThrow("user"),
						level: ProfileLevel.createOrThrow(1),
						note: ProfileLabel.createOrThrow("vip"),
					},
				}, "Profile"),
			),
		);

		const updated = pipe(
			created,
			ProfileEntity.update({
				config: {
					...created.config,
					note: ProfileLabel.createOrThrow("owner"),
				},
			}),
		);

		expect(updated).toStrictEqual(
			DClean.entityKind.setTo({
				kind: "profile",
				config: {
					label: ProfileLabel.createOrThrow("admin"),
					level: ProfileLevel.createOrThrow(2),
					note: ProfileLabel.createOrThrow("owner"),
				},
			}, "Profile"),
		);

		type Check = ExpectType<
			typeof mapped,
			| DEither.Left<"hydrateEntityError", DPE.DataParserError>
			| DEither.Right<
				"hydratedEntity",
				DClean.Entity<"Profile"> & {
					readonly kind: "profile";
					readonly config: {
						readonly label: DClean.NewType<"profileLabel", string, never>;
						readonly level: DClean.NewType<"profileLevel", number, never>;
						readonly note: DClean.NewType<"profileLabel", string, never> | null;
					};
				}
			>,
			"strict"
		>;
	});

	it("expect getter return good value", () => {
		expect(Object.keys(FormEntity.propertiesDefinition)).toStrictEqual([
			"name",
			"type",
			"inputs",
			"description",
			"tags",
			"test",
		]);
		expect(DDataParser.dataParserKind.has(FormEntity.mapDataParser)).toStrictEqual(true);
		expect(DDataParser.dataParserKind.has(FormEntity.internal.mapDataParser)).toStrictEqual(true);
	});
});
