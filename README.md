# @duplojs/utils
[![NPM version](https://img.shields.io/npm/v/@duplojs/utils)](https://www.npmjs.com/package/@duplojs/utils)

`@duplojs/utils` is the TypeScript utility toolbox used across the DuploJS ecosystem. It focuses on **strong typing**, **god DX**, and **small composable primitives** that scale from simple helpers to full validation pipelines.

## What’s inside?

- **Common functional utilities**: `pipe`/`asyncPipe`, `when`, `memo`, `clone`, `escapeRegExp`, etc.
- **Typed runtime tagging**: `kind` helpers to discriminate data without polluting public shapes.
- **Either**: a typed success/error container with mandatory “information” for precise pattern matching.
- **DataParser**: schema-based validation with checkers, coercion (`DP.coerce.*`), transforms, async support, and a fluent “extended” API (`DPE`).
- **Clean-domain building blocks**: `newType`, `entity`, constraints, repositories, and use-cases.
- **Pure helpers by domain**: `array`, `object`, `string`, `number`, `date`, `generator`, `pattern` (match/exhaustive).

## Documentation
- https://utils.duplojs.dev/v1/en

## Install

```bash
npm install @duplojs/utils
```
