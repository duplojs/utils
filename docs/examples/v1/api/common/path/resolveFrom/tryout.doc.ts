import { Path, DEither, pipe } from "@duplojs/utils";

const absolute = Path.resolveFrom(["alpha", "beta"], "/root");
// absolute: DEither.success("/root/alpha/beta")
const override = Path.resolveFrom(["alpha", "/root", "beta"], "gamma");
// override: DEither.success("/root/beta")
const relative = Path.resolveFrom(["..", ".."], "alpha");
// relative: DEither.fail()
const curried = pipe(
	["alpha", "beta"],
	Path.resolveFrom("/root"),
);
// curried: DEither.success("/root/alpha/beta")
