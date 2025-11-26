---
outline: [2, 3]
prev:
  text: "create"
  link: "/v1/api/date/create/fr"
next:
  text: "now"
  link: "/v1/api/date/now/fr"
---

# createOrThrow

La fonction **`createOrThrow()`** construit un `TheDate` à partir d'un `TheDate`, d'un `Date` ou d'un timestamp. Elle lève `CreateTheDateError` lorsque l'entrée est invalide.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/createOrThrow/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

```typescript
function createOrThrow<
	GenericInput extends TheDate | Date | number
>(
	input: GenericInput
): TheDate
```

## Paramètres

- `input` : Une date (`TheDate`), un `Date` JavaScript ou un timestamp.

## Valeur de retour

Un `TheDate` valide. En cas de timestamp hors limites ou de valeur incohérente, une `CreateTheDateError` est lancée.

## Voir aussi

- [`create`](/v1/api/date/create/fr) – Version qui renvoie un `Either`.
- [`isSafeTimestamp`](/v1/api/date/isSafeTimestamp/fr) – Vérifie un timestamp avant conversion.

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
