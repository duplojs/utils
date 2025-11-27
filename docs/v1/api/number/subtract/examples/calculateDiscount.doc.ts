import { N, A, pipe } from "@duplojs/utils";

const products = [
	{
		name: "Laptop",
		price: 1200,
	},
	{
		name: "Mouse",
		price: 50,
	},
	{
		name: "Keyboard",
		price: 150,
	},
];
const discount = 20;

const result = pipe(
	products,
	A.map(
		({ name, price }) => ({
			name,
			originalPrice: price,
			finalPrice: pipe(
				price,
				N.subtract(discount),
				N.max(0),
			),
		}),
	),
);

// result: [
//   { name: "Laptop", originalPrice: 1200, finalPrice: 1180 },
//   { name: "Mouse", originalPrice: 50, finalPrice: 30 },
//   { name: "Keyboard", originalPrice: 150, finalPrice: 130 }
// ]
