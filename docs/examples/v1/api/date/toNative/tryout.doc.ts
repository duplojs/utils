import { D } from "@duplojs/utils";

const date = D.toNative(D.create("2023-11-14"));
// date: Date

const time = D.toNative(D.createTime(5400, "millisecond"));
// time: 5400
