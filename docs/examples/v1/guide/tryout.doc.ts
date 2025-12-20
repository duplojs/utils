import { C, E, O, pipe, type ExpectType } from "@duplojs/utils";

const payload = {
	id: 12,
	name: "Greg",
	age: 56,
};

const result = pipe(
	payload,
	O.transformProperties({
		id: C.Number.create,
		name: C.String.create,
		age: C.Number.create,
	}),
	E.group,
	E.whenIsRight(
		(groupedPrimitive) => {
			type Check = ExpectType<
				typeof groupedPrimitive,
				{
					id: C.Primitive<number>;
					name: C.Primitive<string>;
					age: C.Primitive<number>;
				},
				"strict"
			>;

			return E.success(groupedPrimitive);
		},
	),
);
