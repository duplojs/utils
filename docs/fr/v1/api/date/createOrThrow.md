---
outline: [2, 3]
description: "La fonction createOrThrow() construit un TheDate à partir d'un TheDate, d'un Date ou d'un timestamp. Elle lève CreateTheDateError lorsque l'entrée est invalide."
prev:
  text: "create"
  link: "/fr/v1/api/date/create"
next:
  text: "createTime"
  link: "/fr/v1/api/date/createTime"
---

# createOrThrow

La fonction **`createOrThrow()`** construit un `TheDate` à partir d'un `TheDate`, d'un `SerializedTheDate`, d'un `Date` ou d'un timestamp. Elle lève `CreateTheDateError` lorsque l'entrée est invalide.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/createOrThrow/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntaxe

```typescript
function createOrThrow<
	GenericInput extends TheDate | SerializedTheDate | Date | number
>(
	input: GenericInput
): TheDate
```

## Paramètres

- `input` : Une date (`TheDate`), un `SerializedTheDate`, un `Date` JavaScript ou un timestamp.

## Valeur de retour

Un `TheDate` valide. En cas de timestamp hors limites ou de valeur incohérente, une `CreateTheDateError` est lancée.

## Voir aussi

- [`create`](/fr/v1/api/date/create) – Version qui renvoie un `Either`.
- [`isSafeTimestamp`](/fr/v1/api/date/isSafeTimestamp) – Vérifie un timestamp avant conversion.

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
