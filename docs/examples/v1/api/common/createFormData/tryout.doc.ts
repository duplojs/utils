import { createFormData, type TheFormData, type ExpectType } from "@duplojs/utils";

const created = createFormData({
	profile: {
		name: "Ada",
		tags: ["core", "utils"],
	},
});

type check = ExpectType<
	typeof created,
	TheFormData<{
		profile: {
			name: string;
			tags: string[];
		};
	}>,
	"strict"
>;
