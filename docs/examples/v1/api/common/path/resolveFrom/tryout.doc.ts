import { Path, pipe } from "@duplojs/utils";

const resolved = Path.resolveFrom(["alpha", "beta"], "gamma");
// resolved: "gamma/beta/alpha"
const withAbsolute = Path.resolveFrom(["alpha", "/root", "beta"], "gamma");
// withAbsolute: "/root/alpha"
const curried = pipe(
	["alpha", "beta"],
	Path.resolveFrom("/root"),
);
// curried: "/root/beta/alpha"
