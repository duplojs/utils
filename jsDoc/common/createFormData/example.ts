import { DDate, createFormData, TheFormData } from "@scripts";

const created = createFormData(
	{
		profile: {
			name: "Ada",
			tags: ["core", "utils"],
		},
		enabled: true,
		retryCount: 2,
		optionalValue: null,
		createdDate: DDate.createOrThrow(1735689600000),
		createdTime: DDate.createTimeOrThrow(45000000),
	},
);
const flattenedName = created.get("profile/*\\name");
// flattenedName: "Ada"
const flattenedEnabled = created.get("enabled");
// flattenedEnabled: "true"
const flattenedNull = created.get("optionalValue");
// flattenedNull: "null"

const flatEntries = Array.from(
	TheFormData.toFlatEntries({
		tags: ["core", "utils"],
		time: DDate.createTimeOrThrow(31500000),
	}),
);
// flatEntries: [["tags/*\\[0]", "core"], ["tags/*\\[1]", "utils"], ["time", "time31500000+"]]

const rebuilt = TheFormData.fromEntries(
	[
		["profile/*\\name", "Ada"],
		["profile/*\\tags/*\\[0]", "core"],
		["enabled", "true"],
	],
	10,
);
// rebuilt: { profile: { name: "Ada", tags: ["core"] }, enabled: "true" }
