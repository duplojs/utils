import { Path } from "@duplojs/utils";

const absolute = Path.resolveFrom("/root", ["alpha", "beta"]);
// absolute: "/root/alpha/beta"
const override = Path.resolveFrom("gamma", ["alpha", "/root", "beta"]);
// override: "/root/beta"
const relative = Path.resolveFrom("alpha", ["..", ".."]);
// relative: null
const blocked = Path.resolveFrom("/root", ["..", "etc"], {
	stayInOrigin: true,
});
// blocked: null
