import { DNumber, DArray, pipe, when } from "@duplojs/utils";

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
	DArray.map((product) => ({
		...product,
		available: DNumber.greater(product.stock, minimumStock),
	})),
);

// result: [
//   { name: "Laptop", stock: 10, available: true },
//   { name: "Mouse", stock: 0, available: false },
//   { name: "Keyboard", stock: 5, available: true }
// ]
