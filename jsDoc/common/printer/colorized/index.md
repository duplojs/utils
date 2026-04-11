Wraps a string with the ANSI escape sequence of the selected color. Exists in immediate or curried form.

**Supported call styles:**
- Classic: `Printer.colorized(input, color)` -> returns the colored string
- Curried: `Printer.colorized(color)` -> returns a function waiting for the string

The function only adds the opening color code and the reset code around the input string.

```ts
{@include common/printer/colorized/example.ts[3,14]}
```

@see https://utils.duplojs.dev/en/v1/api/common/printer/colorized
