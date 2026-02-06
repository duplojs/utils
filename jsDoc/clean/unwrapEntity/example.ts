import { C, D, DP, toJSON, toNative } from "@scripts";

const Id = C.createNewType("userId", DP.number());
const Name = C.createNewType("userName", DP.string());
const Birth = C.createNewType("userBirth", DP.date());
const TimeSpent = C.createNewType("userTimeSpent", DP.time());

const User = C.createEntity("User", () => ({
	id: Id,
	name: Name,
	birth: Birth,
	timeSpent: TimeSpent,
}));

const entity = User.new({
	id: Id.createOrThrow(1),
	name: Name.createOrThrow("Ada"),
	birth: Birth.createOrThrow(D.create("2024-01-01")),
	timeSpent: TimeSpent.createOrThrow(D.createTime(30, "minute")),
});

const unwrapped = C.unwrapEntity(entity);
// unwrapped.birth: TheDate, unwrapped.timeSpent: TheTime

const asJSON = C.unwrapEntity(entity, { transformer: toJSON });
// asJSON.birth: SerializedTheDate, asJSON.timeSpent: SerializedTheTime

const asNative = C.unwrapEntity(entity, { transformer: toNative });
// asNative.birth: Date, asNative.timeSpent: number
