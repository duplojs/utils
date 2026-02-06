---
outline: [2, 3]
description: "La fonction isSerializedTheTime() vérifie si une chaîne est une valeur SerializedTheTime valide."
prev:
  text: "isSerializedTheDate"
  link: "/fr/v1/api/date/isSerializedTheDate"
next:
  text: "is"
  link: "/fr/v1/api/date/is"
---

# isSerializedTheTime

La fonction **`isSerializedTheTime()`** vérifie si une chaîne est un `SerializedTheTime` valide.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/isSerializedTheTime/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntaxe

```typescript
function isSerializedTheTime(input: string): input is SerializedTheTime
```

## Paramètres

- `input` : Chaîne à valider.

## Valeur de retour

`true` si la valeur correspond à `SerializedTheTime`, sinon `false`.

## Voir aussi

- [`serialize`](/fr/v1/api/date/serialize) - Convertit `TheDate`/`TheTime` vers des formats sérialisés
- [`isSerializedTheDate`](/fr/v1/api/date/isSerializedTheDate) - Vérifie les valeurs sérialisées de date
