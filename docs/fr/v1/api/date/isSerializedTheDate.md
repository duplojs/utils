---
outline: [2, 3]
description: "La fonction isSerializedTheDate() vérifie si une chaîne est une valeur SerializedTheDate valide."
prev:
  text: "serialize"
  link: "/fr/v1/api/date/serialize"
next:
  text: "isSerializedTheTime"
  link: "/fr/v1/api/date/isSerializedTheTime"
---

# isSerializedTheDate

La fonction **`isSerializedTheDate()`** vérifie si une chaîne est un `SerializedTheDate` valide.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/isSerializedTheDate/tryout.doc.ts"
  majorVersion="v1"
  height="313px"
/>

## Syntaxe

```typescript
function isSerializedTheDate(input: string): input is SerializedTheDate
```

## Paramètres

- `input` : Chaîne à valider.

## Valeur de retour

`true` si la valeur correspond à `SerializedTheDate`, sinon `false`.

## Voir aussi

- [`serialize`](/fr/v1/api/date/serialize) - Convertit `TheDate`/`TheTime` vers des formats sérialisés
- [`isSerializedTheTime`](/fr/v1/api/date/isSerializedTheTime) - Vérifie les valeurs sérialisées de temps
