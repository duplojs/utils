---
outline: [2, 3]
description: "La fonction toNative() convertit un TheDate en Date JavaScript."
prev:
  text: "tomorrow"
  link: "/fr/v1/api/date/tomorrow"
next:
  text: "toTimestamp"
  link: "/fr/v1/api/date/toTimestamp"
---

# toNative

La fonction **`toNative()`** convertit un `TheDate` en `Date` JavaScript.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/toNative/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntaxe

```typescript
function toNative<
	GenericInput extends TheDate
>(
	input: GenericInput
): Date
```

## Paramètres

- `input` : La date immuable `TheDate` à convertir.

## Valeur de retour

Une instance `Date` JavaScript classique.

## Voir aussi

- [`toTimestamp`](/fr/v1/api/date/toTimestamp)
- [`toISOString`](/fr/v1/api/date/toISOString)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
