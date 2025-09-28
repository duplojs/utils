import { DPattern, pipe, type ExpectType } from "@scripts/index";

describe("pattern match", () => {
	it("match literal string", () => {
		const result = DPattern.match(
			"test" as "test" | "toto" | "tata",
			"test",
			(value) => {
				type Check = ExpectType<
					typeof value,
					"test",
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			"toto" | "tata" | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("not match literal string", () => {
		const result = DPattern.match(
			"tata" as "test" | "toto" | "tata",
			"test",
			(value) => {
				type Check = ExpectType<
					typeof value,
					"test",
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual("tata");

		type Check = ExpectType<
			typeof result,
			"toto" | "tata" | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("match string", () => {
		const result = DPattern.match(
			"test" as string,
			"test",
			(value) => {
				type Check = ExpectType<
					typeof value,
					"test",
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			string | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("not match string", () => {
		const result = DPattern.match(
			"titi" as string,
			"test",
			(value) => {
				type Check = ExpectType<
					typeof value,
					"test",
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual("titi");

		type Check = ExpectType<
			typeof result,
			string | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("match literal number", () => {
		const result = DPattern.match(
			11 as 11 | 22 | 33,
			11,
			(value) => {
				type Check = ExpectType<
					typeof value,
					11,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			22 | 33 | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("not match literal number", () => {
		const result = DPattern.match(
			22 as 11 | 22 | 33,
			11,
			(value) => {
				type Check = ExpectType<
					typeof value,
					11,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(22);

		type Check = ExpectType<
			typeof result,
			22 | 33 | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("match number", () => {
		const result = DPattern.match(
			10 as number,
			10,
			(value) => {
				type Check = ExpectType<
					typeof value,
					10,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			number | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("not match number", () => {
		const result = DPattern.match(
			20 as number,
			10,
			(value) => {
				type Check = ExpectType<
					typeof value,
					10,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(20);

		type Check = ExpectType<
			typeof result,
			number | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("match null", () => {
		const result = DPattern.match(
			null as "test" | null,
			null,
			(value) => {
				type Check = ExpectType<
					typeof value,
					null,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			"test" | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("not match null", () => {
		const result = DPattern.match(
			"test" as "test" | null,
			null,
			(value) => {
				type Check = ExpectType<
					typeof value,
					null,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual("test");

		type Check = ExpectType<
			typeof result,
			"test" | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("match undefined", () => {
		const result = DPattern.match(
			undefined as "test" | undefined,
			undefined,
			(value) => {
				type Check = ExpectType<
					typeof value,
					undefined,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			"test" | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("not match undefined", () => {
		const result = DPattern.match(
			"test" as "test" | undefined,
			undefined,
			(value) => {
				type Check = ExpectType<
					typeof value,
					undefined,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual("test");

		type Check = ExpectType<
			typeof result,
			"test" | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("match boolean", () => {
		const result = DPattern.match(
			true as boolean,
			true,
			(value) => {
				type Check = ExpectType<
					typeof value,
					true,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(DPattern.result("myValue"));

		type Check = ExpectType<
			typeof result,
			false | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	it("not match boolean", () => {
		const result = DPattern.match(
			true as boolean,
			false,
			(value) => {
				type Check = ExpectType<
					typeof value,
					false,
					"strict"
				>;

				return "myValue";
			},
		);

		expect(result).toStrictEqual(true);

		type Check = ExpectType<
			typeof result,
			true | DPattern.PatternResult<"myValue">,
			"strict"
		>;
	});

	describe("object", () => {
		const input: {
			type: "one" | "two";
			name: string;
			promotion?: number;
			flags?: "ope" | "co";
		} = {
			type: "one",
			name: "super nom",
			promotion: undefined,
			flags: "co",
		};

		it("discriminated on literal prop ", () => {
			const result = DPattern.match(
				input,
				{
					type: "one",
				},
				(value) => {
					type Check = ExpectType<
						typeof value,
						{
							type: "one";
							name: string;
							promotion?: number;
							flags?: "ope" | "co";
						},
						"strict"
					>;

					return "myValue";
				},
			);

			expect(result).toStrictEqual(DPattern.result("myValue"));

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | {
					type: "two";
					name: string;
					promotion?: number;
					flags?: "ope" | "co";
				},
				"strict"
			>;
		});

		it("with prop string", () => {
			const result = DPattern.match(
				input,
				{
					type: "one",
					name: "super nom",
				},
				(value) => {
					type Check = ExpectType<
						typeof value,
						{
							type: "one";
							name: "super nom";
							promotion?: number;
							flags?: "ope" | "co";
						},
						"strict"
					>;

					return "myValue";
				},
			);

			expect(result).toStrictEqual(DPattern.result("myValue"));

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | typeof input,
				"strict"
			>;
		});

		it("with optional prop with value", () => {
			const result = DPattern.match(
				input,
				{
					promotion: 10,
				},
				(value) => {
					type Check = ExpectType<
						typeof value,
						{
							type: "one" | "two";
							name: string;
							promotion: 10;
							flags?: "ope" | "co";
						},
						"strict"
					>;

					return "myValue";
				},
			);

			expect(result).toStrictEqual(input);

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | {
					type: "one" | "two";
					name: string;
					promotion?: number;
					flags?: "ope" | "co";
				},
				"strict"
			>;
		});

		it("with optional prop with undefined", () => {
			const result = DPattern.match(
				input,
				{
					type: "one",
					promotion: undefined,
				},
				(value) => {
					type Check = ExpectType<
						typeof value,
						{
							type: "one";
							name: string;
							promotion: undefined;
							flags?: "ope" | "co";
						},
						"strict"
					>;

					return "myValue";
				},
			);

			expect(result).toStrictEqual(DPattern.result("myValue"));

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | typeof input,
				"strict"
			>;
		});

		it("with optional prop with literal", () => {
			const result = DPattern.match(
				input,
				{
					type: "one",
					promotion: undefined,
					flags: "co",
				},
				(value) => {
					type Check = ExpectType<
						typeof value,
						{
							type: "one";
							name: string;
							promotion: undefined;
							flags: "co";
						},
						"strict"
					>;

					return "myValue";
				},
			);

			expect(result).toStrictEqual(DPattern.result("myValue"));

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | typeof input,
				"strict"
			>;
		});
	});

	describe("object discrimination", () => {
		interface ProductCommercialOperation<
			GenericName extends string,
			GenericDiscount extends number,
		> {
			name: GenericName;
			discount: GenericDiscount;
		}

		interface Product {
			name: string;
			price: number;
			commercialOperation?: | ProductCommercialOperation<"blackFriday", 50>
			| ProductCommercialOperation<"summerDay", 10>
			| ProductCommercialOperation<"winterDay", 30>;
		}

		interface MarketplaceProduct extends Product {
			marketplace: true;
			seller: string;
		}

		interface SecondeChanceProduct extends Product {
			secondeChance: true;
			discount: number;
		}

		const product = {
			name: "super product",
			price: 150,
			commercialOperation: {
				name: "blackFriday",
				discount: 50,
			},
			secondeChance: true,
			discount: 30,
		} as MarketplaceProduct | SecondeChanceProduct;

		it("with seconde chance product", () => {
			const result = DPattern.match(
				product,
				{
					secondeChance: true,
				},
				(value) => {
					type Check = ExpectType<
						typeof value,
						SecondeChanceProduct,
						"strict"
					>;

					return "myValue";
				},
			);

			expect(result).toStrictEqual(DPattern.result("myValue"));

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | MarketplaceProduct,
				"strict"
			>;
		});

		it("with market place product", () => {
			const result = DPattern.match(
				product,
				{
					marketplace: true,
				},
				(value) => {
					type Check = ExpectType<
						typeof value,
						MarketplaceProduct,
						"strict"
					>;

					return "myValue";
				},
			);

			expect(result).toStrictEqual(product);

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue"> | SecondeChanceProduct,
				"strict"
			>;
		});

		it("with seconde chance product with promotion", () => {
			const result = DPattern.match(
				product,
				{
					secondeChance: true,
					price: 150,
					commercialOperation: {
						name: "blackFriday",
					},
				},
				(value) => {
					type Check = ExpectType<
						typeof value,
						{
							discount: number;
							name: string;
							price: 150;
							secondeChance: true;
							commercialOperation: {
								discount: 50;
								name: "blackFriday";
							};
						},
						"strict"
					>;

					return "myValue";
				},
			);

			expect(result).toStrictEqual(DPattern.result("myValue"));

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue">
				| MarketplaceProduct
				| SecondeChanceProduct,
				"strict"
			>;
		});

		it("with product who have promotion", () => {
			const result = DPattern.match(
				product,
				{
					commercialOperation: {
						name: "summerDay",
					},
				},
				(value) => {
					type Check = ExpectType<
						typeof value,
						{
							marketplace: true;
							seller: string;
							name: string;
							price: number;
							commercialOperation: ProductCommercialOperation<"summerDay", 10>;
						} | {
							secondeChance: true;
							discount: number;
							name: string;
							price: number;
							commercialOperation: ProductCommercialOperation<"summerDay", 10>;
						},
						"strict"
					>;

					return "myValue";
				},
			);

			expect(result).toStrictEqual(product);

			type Check = ExpectType<
				typeof result,
				DPattern.PatternResult<"myValue">
				| {
					commercialOperation?: {
						discount: 50;
						name: "blackFriday";
					} | {
						discount: 30;
						name: "winterDay";
					} | undefined;
					marketplace: true;
					seller: string;
					name: string;
					price: number;
				} | {
					commercialOperation?: {
						discount: 50;
						name: "blackFriday";
					} | {
						discount: 30;
						name: "winterDay";
					} | undefined;
					secondeChance: true;
					name: string;
					price: number;
					discount: number;
				},
				"strict"
			>;
		});

		it("with impossible product", () => {
			const result = DPattern.match(
				product,
				{
					marketplace: true,
					secondeChance: true,
				},
				(value) => {
					type Check = ExpectType<
						typeof value,
						never,
						"strict"
					>;

					return "myValue";
				},
			);

			expect(result).toStrictEqual(product);

			type Check = ExpectType<
				typeof result,
				MarketplaceProduct
				| SecondeChanceProduct,
				"strict"
			>;
		});

		it("use in pipe", () => {
			const result = pipe(
				product,
				DPattern.match(
					{ commercialOperation: { name: "blackFriday" } },
					(value) => {
						type Check = ExpectType<
							typeof value,
							{
								marketplace: true;
								seller: string;
								name: string;
								price: number;
								commercialOperation: ProductCommercialOperation<"blackFriday", 50>;
							} | {
								name: string;
								price: number;
								discount: number;
								secondeChance: true;
								commercialOperation: ProductCommercialOperation<"blackFriday", 50>;
							},
							"strict"
						>;

						return "first";
					},
				),
				DPattern.match(
					{ marketplace: true },
					(value) => {
						type Check = ExpectType<
							typeof value,
							{
								commercialOperation?: {
									discount: 10;
									name: "summerDay";
								} | {
									discount: 30;
									name: "winterDay";
								} | undefined;
								marketplace: true;
								seller: string;
								name: string;
								price: number;
							},
							"strict"
						>;

						return "second";
					},
				),
				DPattern.match(
					{ discount: 90 },
					(value) => {
						type Check = ExpectType<
							typeof value,
							{
								secondeChance: true;
								name: string;
								price: number;
								commercialOperation?: {
									discount: 10;
									name: "summerDay";
								} | {
									discount: 30;
									name: "winterDay";
								} | undefined;
								discount: 90;
							},
							"strict"
						>;

						return "tread";
					},
				),
				DPattern.match(
					{ commercialOperation: { name: "summerDay" } },
					(value) => {
						type Check = ExpectType<
							typeof value,
							{
								name: string;
								price: number;
								secondeChance: true;
								discount: number;
								commercialOperation: {
									discount: 10;
									name: "summerDay";
								};
							},
							"strict"
						>;

						return "quatre";
					},
				),
				DPattern.match(
					{ secondeChance: true },
					(value) => {
						type Check = ExpectType<
							typeof value,
							{
								commercialOperation?: {
									discount: 30;
									name: "winterDay";
								} | undefined;
								name: string;
								price: number;
								secondeChance: true;
								discount: number;
							},
							"strict"
						>;

						return "last";
					},
				),
				(value) => value,
				DPattern.exhaustive,
			);

			expect(result).toStrictEqual("first");

			type Check = ExpectType<
				typeof result,
				"first" | "second" | "tread" | "quatre" | "last",
				"strict"
			>;
		});
	});
});
