import { type ExpectType } from "@duplojs/utils";

const product: (Book | Care | Computer)[] = [];

const result = Object.groupBy(
	product,
	(product) => product.type === "book"
		? "book"
		: "other",
);

type check = ExpectType<
	typeof result,
	{
		book?: (Care | Computer | Book)[]; // 💀
		other?: (Care | Computer | Book)[]; // 💀
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
