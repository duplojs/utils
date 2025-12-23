---
prev:
  text: "Introduction"
  link: "/en/v1/guide/"
next:
  text: "Currying"
  link: "/en/v1/guide/currying"
---

# Quick Start

[[toc]]

## Installation

::: code-group
```bash [npm]
npm install @duplojs/utils
```
```bash [yarn]
yarn add @duplojs/utils
```
```bash [pnpm]
pnpm add @duplojs/utils
```
:::


## Configuration
Start by setting the right options in your `tsconfig`.

```json
{
	// ...
	"compilerOptions": {
		// ...
		"strict": true,
		"noImplicitAny": true,
		"strictNullChecks": true,
		"strictFunctionTypes": true,
		"strictBindCallApply": true,
		"strictPropertyInitialization": true,
		"noImplicitThis": true,
		"useUnknownInCatchVariables": true,
		"alwaysStrict": true,
		"noImplicitReturns": true,
		"noUncheckedIndexedAccess": true,
		"noImplicitOverride": true
	}
}
```

## Library organization
The library is organized by domains:
- [Common](/en/v1/api/common/) General-purpose functions not tied to a specific type.
- [Array](/en/v1/api/array/) Functions for arrays and tuples.
- [Clean](/en/v1/api/clean/) Tools for defining business structures.
- [DataParser](/en/v1/api/dataParser/) Data validation schema creation.
- [Date](/en/v1/api/date/) Date manipulation utilities.
- [Either](/en/v1/api/either/) Result definition tools.
- [Generator](/en/v1/api/generator/) Helpers for iterables with generators.
- [Number](/en/v1/api/number/) Number utilities.
- [Object](/en/v1/api/object/) Object utilities.
- [Pattern](/en/v1/api/pattern/) Pattern matching tools.
- [String](/en/v1/api/string/) String utilities.

## Import paths
All modules can be imported from the root.
```ts
import { A, C, DPE, D, E, G, N, O, P, S, /* ...common */ } from "@duplojs/utils";
```

### Tree-shaking
You can import different parts of the library like this to optimize your build:
```ts
import * as Common from "@duplojs/utils/common";
import * as A from "@duplojs/utils/array";
import * as C from "@duplojs/utils/clean";
import * as DP from "@duplojs/utils/dataParser";
import * as D from "@duplojs/utils/date";
import * as E from "@duplojs/utils/either";
import * as G from "@duplojs/utils/generator";
import * as N from "@duplojs/utils/number";
import * as O from "@duplojs/utils/object";
import * as P from "@duplojs/utils/pattern";
import * as S from "@duplojs/utils/string";
```

## Enjoy!
<MonacoTSEditor
src="/examples/v1/guide/quickStart/tryout.doc.ts"
majorVersion="v1"
height="700px"
/>
