import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

const items = ["A", "B", "C", "D", "E", "F", "G", "H"];
const pageSize = 3;

const result = pipe(
	items,
	DArray.map(
		(item, { index }) => ({
			item,
			page: pipe(
				index,
				DNumber.divide(pageSize),
				DNumber.floor,
				DNumber.add(1),
			),
		}),
	),
);

// result: [
//   { item: "A", page: 1 },
//   { item: "B", page: 1 },
//   { item: "C", page: 1 },
//   { item: "D", page: 2 },
//   { item: "E", page: 2 },
//   { item: "F", page: 2 },
//   { item: "G", page: 3 },
//   { item: "H", page: 3 }
// ]
