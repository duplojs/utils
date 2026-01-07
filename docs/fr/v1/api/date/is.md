---
outline: [2, 3]
prev:
  text: "isSafeTimestamp"
  link: "/fr/v1/api/date/isSafeTimestamp"
next:
  text: "isTime"
  link: "/fr/v1/api/date/isTime"
---

# is

La fonction **`is()`** vérifie qu'une chaîne correspond au format `TheDate` (`date<timestamp><"-" | "+">`). Elle agit comme un type guard.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/is/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function is(input: string): input is TheDate
```

## Paramètres

- `input` : Chaîne à valider.

## Valeur de retour

`true` si la chaîne respecte le format `TheDate`, sinon `false`. En cas de `true`, TypeScript affine le type de `input` vers `TheDate`.

## Voir aussi

- [`create`](/fr/v1/api/date/create) - Construit un `TheDate` à partir de valeurs natives
- [`isSafeTimestamp`](/fr/v1/api/date/isSafeTimestamp) - Vérifie la plage des timestamps
