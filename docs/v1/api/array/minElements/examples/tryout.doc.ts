import { DArray, pipe } from "@duplojs/utils";

const input = ["login", "dashboard", "settings"] as const;

const result = DArray.minElements(input, 2);
// result: true (input est typé avec ≥ 2 éléments)

const shortList = ["draft"] as const;

const result2 = DArray.minElements(shortList, 2);
// result2: false

const result3 = pipe(
	input,
	DArray.minElements(3),
);
// result3: true
