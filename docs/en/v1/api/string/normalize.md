---
outline: [2, 3]
prev:
  text: "toUpperCase"
  link: "/en/v1/api/string/toUpperCase"
next:
  text: "repeat"
  link: "/en/v1/api/string/repeat"
---

# normalize

The **`normalize()`** method returns a new string normalized according to the specified Unicode form.

## Interactive example

<MonacoTSEditor
  src="/examples/v1/api/string/normalize/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
/>

## Syntax

```typescript
type NormalizeForm = "NFC" | "NFD" | "NFKC" | "NFKD";
```

### Classic signature

```typescript
function normalize<
	GenericInput extends string
>(
	input: GenericInput, 
	form: NormalizeForm
): string;
```

### Curried signature

```typescript
function normalize<
	GenericInput extends string
>(
	form: NormalizeForm
): (input: GenericInput) => string;
```

## Parameters

- `input`: The string to normalize.
- `form`: The Unicode normalization form to use. Options are:
  - `"NFC"` (Normalization Form C): Composed, where accented characters are represented by a single code point.
  - `"NFD"` (Normalization Form D): Decomposed, where accented characters are represented by a base letter followed by separate diacritic characters.
  - `"NFKC"` (Normalization Form KC): Composed and compatibility, similar to NFC but with additional transformations for compatibility.
  - `"NFKD"` (Normalization Form KD): Decomposed and compatibility, similar to NFD but with additional transformations for compatibility.

## Return value

A new string normalized according to the specified form.

## See also

- [toUpperCase](/en/v1/api/string/toUpperCase): Converts the entire string to uppercase.
- [toLowerCase](/en/v1/api/string/toLowerCase): Converts the entire string to lowercase.
- [repeat](/en/v1/api/string/repeat): Repeats a string a specified number of times.
- [trim](/en/v1/api/string/trim): Removes whitespace at the start and end of a string.

## Sources

- [MDN Web Docs - String.prototype.normalize()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
