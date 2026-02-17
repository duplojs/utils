import { createFormData, TheFormData } from "@scripts";

const created = createFormData(
	{
		profile: {
			name: "Ada",
			tags: ["core", "utils"],
		},
	},
);
const flattenedName = created.get("profile/*\\name");
// flattenedName: "Ada"

const flatEntries = Array.from(
	TheFormData.toFlatEntries({
		tags: ["core", "utils"],
	}),
);
// flatEntries: [["tags/*\\[0]", "core"], ["tags/*\\[1]", "utils"]]

const rebuilt = TheFormData.fromEntries(
	[
		["profile/*\\name", "Ada"],
		["profile/*\\tags/*\\[0]", "core"],
	],
	10,
);
// rebuilt: { profile: { name: "Ada", tags: ["core"] } }
