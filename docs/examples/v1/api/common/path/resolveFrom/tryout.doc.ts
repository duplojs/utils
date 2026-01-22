import { Path, type ExpectType, type E } from "@duplojs/utils";

const absolute = Path.resolveFrom("/root", ["alpha", "beta"]);
// absolute: DEither.success("/root/alpha/beta")
const override = Path.resolveFrom("gamma", ["alpha", "/root", "beta"]);
// override: DEither.success("/root/beta")
const relative = Path.resolveFrom("alpha", ["..", ".."]);
// relative: DEither.fail()

type check = ExpectType<
	typeof relative,
	E.EitherFail | E.EitherSuccess<string>,
	"strict"
>;
