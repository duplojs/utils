Wraps a string with the ANSI escape sequence for bold text.

Signature: `Printer.bold(input)` -> returns the bold string

The function prepends the bold code and appends the reset code without altering the input content.

```ts
{@include common/printer/bold/example.ts[3,11]}
```

@see https://utils.duplojs.dev/en/v1/api/common/printer/bold
