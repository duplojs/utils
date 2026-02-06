---
outline: [2, 3]
description: "La fonction is() vérifie qu'une valeur est une instance de TheDate. Elle agit comme un type guard."
prev:
  text: "isSerializedTheTime"
  link: "/fr/v1/api/date/isSerializedTheTime"
next:
  text: "isTime"
  link: "/fr/v1/api/date/isTime"
---

# is

La fonction **`is()`** vérifie qu'une valeur est une instance de `TheDate`. Elle agit comme un type guard.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/is/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntaxe

```typescript
function is(input: unknown): input is TheDate
```

## Paramètres

- `input` : Valeur à tester.

## Valeur de retour

`true` si la valeur est une instance de `TheDate`, sinon `false`.

## Voir aussi

- [`create`](/fr/v1/api/date/create) - Construit un `TheDate` à partir de valeurs natives
- [`isSafeTimestamp`](/fr/v1/api/date/isSafeTimestamp) - Vérifie la plage des timestamps
