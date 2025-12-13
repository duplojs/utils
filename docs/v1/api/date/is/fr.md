---
outline: [2, 3]
prev:
  text: "isSafeTimestamp"
  link: "/v1/api/date/isSafeTimestamp/fr"
next:
  text: "getYear"
  link: "/v1/api/date/getYear/fr"
---

# is

La fonction **`is()`** vérifie qu'une chaîne correspond au format `TheDate` (`date<timestamp><"-" | "+">`). Elle agit comme un type guard.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/is/examples/tryout.doc.ts"
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

- [`create`](/v1/api/date/create/fr) - Construit un `TheDate` à partir de valeurs natives
- [`isSafeTimestamp`](/v1/api/date/isSafeTimestamp/fr) - Vérifie la plage des timestamps
