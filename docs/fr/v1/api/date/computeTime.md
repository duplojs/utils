---
outline: [2, 3]
description: "La fonction computeTime() convertit un TheTime ou SerializedTheTime dans l'unité demandée."
prev:
  text: "toTimeValue"
  link: "/fr/v1/api/date/toTimeValue"
next:
  text: "isSafeTimeValue"
  link: "/fr/v1/api/date/isSafeTimeValue"
---

# computeTime

La fonction **`computeTime()`** convertit un `TheTime` ou `SerializedTheTime` en valeur numérique dans l'unité demandée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/computeTime/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntaxe

### Signature classique

```typescript
function computeTime(
	input: TheTime | SerializedTheTime,
	unit: "week" | "day" | "hour" | "minute" | "second" | "millisecond"
): number
```

### Signature currifiée

```typescript
function computeTime(
	unit: "week" | "day" | "hour" | "minute" | "second" | "millisecond"
): (input: TheTime | SerializedTheTime) => number
```

## Paramètres

- `input` : Valeur de durée (`TheTime` ou `SerializedTheTime`).
- `unit` : Unité cible.

## Valeur de retour

Une valeur numérique convertie dans l'unité demandée.

## Voir aussi

- [`toTimeValue`](/fr/v1/api/date/toTimeValue)
- [`TheTime`](/fr/v1/api/date/theTime)
- [`createTime`](/fr/v1/api/date/createTime)
