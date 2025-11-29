import { N, A, pipe, whenElse, createEnum } from "@duplojs/utils";

const ages = [15, 22, 17, 35, 16, 28];
const adultAge = 18;
const labelEnum = createEnum(["adults", "minors"]);

const result = pipe(
	ages,
	A.group((age, { output }) => output(
		whenElse(
			age,
			N.greater(adultAge),
			() => labelEnum.adults,
			() => labelEnum.minors,
		),
		age,
	)),
);

// result: {
//   adults: [22, 35, 28],
//   minors: [15, 17, 16]
// }
