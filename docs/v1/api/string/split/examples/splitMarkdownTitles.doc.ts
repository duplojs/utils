import { DArray, DString, pipe, DPattern, innerPipe } from "@duplojs/utils";

const input = `
# Getting Started

Welcome to our guide.

## Installation

How to install the module.

### Using npm

npm installation instructions.

### Using yarn

yarn installation instructions.

## Usage

How to use the library.
`;

const result = pipe(
	input,
	DString.split("\n"),
	DArray.reduce(
		({ from }) => from<{
			h1: string | null;
			h2: string[];
			h3: string[];
		}>({
			h1: null,
			h2: [],
			h3: [],
		}),
		innerPipe(
			DPattern.when(
				({ element }) => DString.startsWith(element, "###"),
				({ element, lastValue, nextWithObject }) => nextWithObject(
					lastValue,
					{
						h3: DArray.push(
							lastValue.h3,
							DString.replace(element, /^###\s*/, ""),
						),
					},
				),
			),
			DPattern.when(
				({ element }) => DString.startsWith(element, "##"),
				({ element, lastValue, nextWithObject }) => nextWithObject(
					lastValue,
					{
						h2: DArray.push(
							lastValue.h2,
							DString.replace(element, /^##\s*/, ""),
						),
					},
				),
			),
			DPattern.when(
				({ element }) => DString.startsWith(element, "#"),
				({ element, lastValue, nextWithObject }) => nextWithObject(
					lastValue,
					{
						h1: DString.replace(element, /^#\s*/, ""),
					},
				),
			),
			DPattern.otherwise(
				({ lastValue, nextWithObject }) => nextWithObject(lastValue, {}),
			),
		),
	),
);

/**
 * result: {
 *  h1: "Getting Started",
 *  h2: ["Installation", "Usage"],
 *  h3: ["Using npm", "Using yarn"]
 * }
 */
