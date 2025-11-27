import { N, A, pipe, when } from "@duplojs/utils";

interface Product {
	name: string;
	stock: number;
}

const products: Product[] = [
	{
		name: "Laptop",
		stock: 10,
	},
	{
		name: "Mouse",
		stock: 0,
	},
	{
		name: "Keyboard",
		stock: 5,
	},
];

const minimumStock = 5;

const result = pipe(
	products,
	A.map((product) => ({
		...product,
		available: N.greater(product.stock, minimumStock),
	})),
);

// result: [
//   { name: "Laptop", stock: 10, available: true },
//   { name: "Mouse", stock: 0, available: false },
//   { name: "Keyboard", stock: 5, available: true }
// ]
