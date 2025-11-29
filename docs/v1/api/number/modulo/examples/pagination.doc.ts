import { N, A, pipe } from "@duplojs/utils";

const items = ["A", "B", "C", "D", "E", "F", "G", "H"];
const pageSize = 3;

const result = pipe(
	items,
	A.map(
		(item, { index }) => ({
			item,
			page: pipe(
				index,
				N.divide(pageSize),
				N.floor,
				N.add(1),
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
