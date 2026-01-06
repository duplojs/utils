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

La fonction **`isTime()`** vérifie qu'une chaîne correspond au format `TheTime` (`time<timestamp><"-" | "+">`). Elle agit comme un type guard.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/isTime/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function isTime(input: string): input is TheTime
```

## Paramètres

- `input` : Chaîne à valider.

## Valeur de retour

`true` si la chaîne respecte le format `TheTime`, sinon `false`. En cas de `true`, TypeScript affine le type de `input` vers `TheTime`.

## Voir aussi

- [`createTime`](/fr/v1/api/date/createTime) - Construit un `TheTime` à partir de valeurs natives
- [`is`](/fr/v1/api/date/is) - Vérifie le format `TheDate`
