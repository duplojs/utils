import { DArray, DString, pipe, DPattern } from "@duplojs/utils";

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
		DArray.reduceFrom<{
			h1: string | null;
			h2: string[];
			h3: string[];
		}>({
			h1: null,
			h2: [],
			h3: [],
		}),
		({ element, lastValue, nextWithObject }) => nextWithObject(
			lastValue,
			pipe(
				element,
				DPattern.when(
					DString.startsWith("###"),
					(value) => ({
						h3: DArray.push(
							lastValue.h3,
							DString.replace(value, /^###\s*/, ""),
						),
					}),
				),
				DPattern.when(
					DString.startsWith("##"),
					(value) => ({
						h2: DArray.push(
							lastValue.h2,
							DString.replace(value, /^##\s*/, ""),
						),
					}),
				),
				DPattern.when(
					DString.startsWith("#"),
					(value) => ({
						h1: DString.replace(value, /^#\s*/, ""),
					}),
				),
				DPattern.otherwise(() => ({})),
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
