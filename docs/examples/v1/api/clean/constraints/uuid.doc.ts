import { type ExpectType, C, DP } from "@duplojs/utils";

const ResourceId = C.createNewType("resource-id", DP.string(), C.Uuid);

const uuid = ResourceId.createOrThrow("8e1f2a3b-4c5d-6e7f-8a9b-0c1d2e3f4a5b");

type check = ExpectType<
	typeof uuid,
	C.NewType<"resource-id", "8e1f2a3b-4c5d-6e7f-8a9b-0c1d2e3f4a5b", "uuid">,
	"strict"
>;
