Applies a color and bold formatting to a string by combining `Printer.colorized()` and `Printer.bold()`. Exists in immediate or curried form.

**Supported call styles:**
- Classic: `Printer.colorizedBold(input, color)` -> returns the formatted string
- Curried: `Printer.colorizedBold(color)` -> returns a function waiting for the string

The produced string contains the bold ANSI code, then the colorized content, and finally the reset codes.

```ts
{@include common/printer/colorizedBold/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/common/printer/colorizedBold
