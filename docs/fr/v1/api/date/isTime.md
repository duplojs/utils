---
outline: [2, 3]
prev:
  text: "is"
  link: "/fr/v1/api/date/is"
next:
  text: "getYear"
  link: "/fr/v1/api/date/getYear"
---

# isTime

La fonction **`isTime()`** vérifie qu'une valeur est une instance de `TheTime`. Elle agit comme un type guard.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/isTime/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntaxe

```typescript
function isTime(input: unknown): input is TheTime
```

## Paramètres

- `input` : Valeur à tester.

## Valeur de retour

`true` si la valeur est une instance de `TheTime`, sinon `false`.

## Voir aussi

- [`createTime`](/fr/v1/api/date/createTime) - Construit un `TheTime` à partir de valeurs natives
- [`is`](/fr/v1/api/date/is) - Vérifie qu'une valeur est un `TheDate`
