import { F } from "@duplojs/utils";

const openSession = F.createInitializer(
	(name: string) => ({ name }),
	{ finalizer: (session) => session.name },
);

const result = F.run(
	function *() {
		return yield *openSession("Ada");
	},
);
// result: { name: "Ada" }
