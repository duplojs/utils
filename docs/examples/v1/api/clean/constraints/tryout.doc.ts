import { C, DP } from "@duplojs/utils";

const SlugContraint = C.createConstraint(
	"slugContraint",
	C.String,
	DP.checkerStringRegex(/^[a-z0-9-]+$/),
);
type SlugContraint = C.GetConstraint<typeof SlugContraint>;

const UserSlug = C.createNewType("Slug", DP.string(), SlugContraint);

function catchSlug(input: SlugContraint) {
	// ...
}

void catchSlug(UserSlug.createOrThrow("super-slug"));

// @ts-expect-error not-slug
void catchSlug(C.String.createOrThrow("not-slug"));

void catchSlug(SlugContraint.createOrThrow("slug"));
