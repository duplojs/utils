import { S } from "@duplojs/utils";

const values = [
	"beta",
	"alpha",
	"gamma",
];

const sorted = [...values].sort((left, right) => S.sortCompare(left, right));
