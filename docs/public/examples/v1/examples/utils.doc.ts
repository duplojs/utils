import { A, type ExpectType } from "@duplojs/utils";

const product: (Book | Care | Computer)[] = [];

const result = A.group(
	product,
	(product, { output }) => product.type === "book"
		? output(product.type, product)
		: output("other", product),
);

type check = ExpectType<
	typeof result,
	{
		book?: Book[]; // 🤩
		other?: (Care | Computer)[]; // 🤩
	},
	"strict"
>;

interface Book {
	type: "book";
	title: "superBook";
	pageQuantity: number;
}

interface Care {
	type: "car";
	model: string;
	wheel: number;
}

interface Computer {
	type: "computer";
	screens: number;
}
