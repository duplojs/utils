import { type ExpectType, C, DP } from "@duplojs/utils";

const Website = C.createNewType("website", DP.string(), C.Url);

const url = Website.createOrThrow("https://docs.duplojs.dev");

type check = ExpectType<
	typeof url,
	C.NewType<"website", "https://docs.duplojs.dev", "url">,
	"strict"
>;
