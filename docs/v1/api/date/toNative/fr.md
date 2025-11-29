---
outline: [2, 3]
prev:
  text: "tomorrow"
  link: "/v1/api/date/tomorrow/fr"
next:
  text: "toTimestamp"
  link: "/v1/api/date/toTimestamp/fr"
---

# toNative

La fonction **`toNative()`** convertit un `TheDate` en `Date` JavaScript.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/toNative/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
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

- [`toTimestamp`](/v1/api/date/toTimestamp/fr)
- [`toISOString`](/v1/api/date/toISOString/fr)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
