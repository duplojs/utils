const collator = new Intl.Collator(
	"en-US-u-kn-true",
	{
		usage: "sort",
		sensitivity: "variant",
		numeric: false,
		ignorePunctuation: false,
	},
);

/**
 * {@include string/sortCompare/index.md}
 */
export function sortCompare(
	valueB: string,
): (valueA: string) => number;

export function sortCompare(
	valueB: string,
	valueA: string
): number;

export function sortCompare(
	...args: [string, string] | [string]
) {
	if (args.length === 1) {
		const [valueB] = args;
		return (valueA: string) => sortCompare(valueA, valueB);
	}

	const [valueA, valueB] = args;
	return collator.compare(valueA, valueB);
}
