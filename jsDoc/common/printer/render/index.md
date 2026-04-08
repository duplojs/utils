Flattens printable values, keeps strings and `true`, then joins the result with a custom separator. Exists in immediate or curried form.

**Supported call styles:**
- Classic: `Printer.render(values, joinCharacter)` -> returns the rendered string
- Curried: `Printer.render(joinCharacter)` -> returns a function waiting for the values array

Nested arrays are flattened recursively. `false`, `null`, and `undefined` are ignored, while `true` is kept as the string `"true"`.
The namespace also exposes two ready-to-use defaults: `Printer.renderLine`, which joins with a space, and `Printer.renderParagraph`, which joins with `Printer.back`.

```ts
{@include common/printer/render/example.ts[3,21]}
```

@see https://utils.duplojs.dev/en/v1/api/common/printer/render
