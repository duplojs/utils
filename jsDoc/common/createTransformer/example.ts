import { createTransformer, toJSON, toNative, D } from "@scripts";

const input = {
	date: D.create("2024-01-01"),
	duration: D.createTime(90, "minute"),
	list: [D.create("2024-01-02")],
};

const nativeValues = toNative(input);
// nativeValues: { date: Date; duration: number; list: Date[] }

const jsonValues = toJSON(input);
// jsonValues: { date: SerializedTheDate; duration: SerializedTheTime; list: SerializedTheDate[] }

const toStringTree = createTransformer("toString");
const stringValues = toStringTree(input);
// stringValues: string-based recursive projection
