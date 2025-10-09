import { DPattern, pipe, type ExpectType } from "@scripts/index";

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
