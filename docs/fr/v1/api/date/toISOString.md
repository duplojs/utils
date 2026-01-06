---
outline: [2, 3]
prev:
  text: "applyTimezone"
  link: "/fr/v1/api/date/applyTimezone"
next:
  text: "format"
  link: "/fr/v1/api/date/format"
---

# toISOString

La fonction **`toISOString()`** transforme un `TheDate` en chaîne ISO 8601 (`YYYY-MM-DDTHH:mm:ss.sssZ`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/toISOString/tryout.doc.ts"
  majorVersion="v1"
  height="270px"
/>

## Syntaxe

```typescript
function toISOString<
	GenericInput extends TheDate
	>(
	input: GenericInput
): string
```

## Paramètres

- `input` : La date à convertir.

## Valeur de retour

Une chaîne ISO 8601 représentant la date.

## Voir aussi

- [`toNative`](/fr/v1/api/date/toNative)
- [`toTimestamp`](/fr/v1/api/date/toTimestamp)

## Sources

- [MDN Web Docs - Date.prototype.toISOString()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString)
