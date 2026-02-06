---
outline: [2, 3]
description: "La fonction serialize() convertit les valeurs immutables TheDate/TheTime vers les formats chaîne SerializedTheDate/SerializedTheTime."
prev:
  text: "isSafeTimestamp"
  link: "/fr/v1/api/date/isSafeTimestamp"
next:
  text: "isSerializedTheDate"
  link: "/fr/v1/api/date/isSerializedTheDate"
---

# serialize

La fonction **`serialize()`** convertit les valeurs de date immuables vers leurs formats chaîne sérialisés :
- `TheDate` -> `SerializedTheDate`
- `TheTime` -> `SerializedTheTime`

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/serialize/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntaxe

```typescript
function serialize(input: TheDate): SerializedTheDate
function serialize(input: TheTime): SerializedTheTime
```

## Paramètres

- `input` : Une valeur `TheDate` ou `TheTime` à sérialiser.

## Valeur de retour

La représentation chaîne sérialisée :
- `SerializedTheDate` pour `TheDate`
- `SerializedTheTime` pour `TheTime`

## Voir aussi

- [`isSerializedTheDate`](/fr/v1/api/date/isSerializedTheDate) - Vérifie les valeurs `SerializedTheDate`
- [`isSerializedTheTime`](/fr/v1/api/date/isSerializedTheTime) - Vérifie les valeurs `SerializedTheTime`
- [`createOrThrow`](/fr/v1/api/date/createOrThrow) - Construit des valeurs immutables depuis des entrées
