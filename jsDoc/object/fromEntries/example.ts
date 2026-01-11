import { O } from "@scripts";

O.fromEntries(
	[
		[
			"name",
			"Ada",
		],
		[
			"age",
			36,
		],
	],
); // { name: "Ada", age: 36 }

O.fromEntries(
	[
		[
			"active",
			true,
		],
	],
); // { active: true }
