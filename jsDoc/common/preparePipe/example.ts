import { N, pipe, preparePipe, S } from "@scripts";

const formatPrice = preparePipe<number>()(
	N.multiply(2),
	S.to,
);

formatPrice(10); // "20"
formatPrice(15); // "30"

const numberToString: (input: number) => string = preparePipe()(
	S.to,
);

numberToString(42); // "42"

const normalizeName = preparePipe<string>()(
	(value) => value.trim(),
	(value) => value.toUpperCase(),
);

pipe(
	"  Ada  ",
	normalizeName,
); // "ADA"
