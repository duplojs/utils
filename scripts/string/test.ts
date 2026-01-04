/**
 * {@include string/test/index.md}
 */
export function test<
	GenericInput extends string,
>(regExp: RegExp): (input: GenericInput) => boolean;

export function test<
	GenericInput extends string,
>(input: GenericInput, regExp: RegExp): boolean;

export function test(
	...args: [RegExp] | [string, RegExp]
) {
	if (args.length === 1) {
		const [regExp] = args;

		return (input: string) => test(input, regExp);
	}

	const [input, regExp] = args;

	return regExp.test(input);
}
