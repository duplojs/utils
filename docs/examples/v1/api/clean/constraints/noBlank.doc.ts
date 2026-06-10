import { type ExpectType, C, DP } from "@duplojs/utils";

const Slug = C.createNewType("slug", DP.string(), C.NoBlank);

const slug = Slug.createOrThrow("release-v1");

type check = ExpectType<
	typeof slug,
	C.NewType<"slug", "release-v1", "no-blank">,
	"strict"
>;
