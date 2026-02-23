---
outline: [2, 3]
description: "La fonction getDifference() retourne la différence entre deux dates sous forme de durée TheTime."
prev:
  text: "toTimestamp"
  link: "/fr/v1/api/date/toTimestamp"
next:
  text: "toTimeValue"
  link: "/fr/v1/api/date/toTimeValue"
---

# getDifference

La fonction **`getDifference()`** retourne la différence de temps entre deux dates sous forme de `TheTime`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/getDifference/tryout.doc.ts"
  majorVersion="v1"
  height="355px"
/>

## Syntaxe

### Signature classique

```typescript
function getDifference(
	input: TheDate | SerializedTheDate,
	reference: TheDate | SerializedTheDate
): TheTime
```

### Signature currifiée

```typescript
function getDifference(
	reference: TheDate | SerializedTheDate
): (input: TheDate | SerializedTheDate) => TheTime
```

## Paramètres

- `input` : Date à comparer (`TheDate` ou `SerializedTheDate`).
- `reference` : Date de référence (`TheDate` ou `SerializedTheDate`).

## Valeur de retour

Un `TheTime` contenant `input - reference` en millisecondes.

## Voir aussi

- [`toTimestamp`](/fr/v1/api/date/toTimestamp)
- [`toTimeValue`](/fr/v1/api/date/toTimeValue)
- [`TheTime`](/fr/v1/api/date/theTime)
