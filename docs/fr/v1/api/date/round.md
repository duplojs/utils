---
outline: [2, 3]
description: "Arrondit un TheDate à l'unité spécifiée (unit)."
prev:
  text: "min"
  link: "/fr/v1/api/date/min"
next:
  text: "each"
  link: "/fr/v1/api/date/each"
---

# round

Arrondit un `TheDate` à l'unité spécifiée (`unit`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/round/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

```typescript
function round(
	input: TheDate,
	unit?: RoundUnit
): TheDate
```

`RoundUnit` correspond à `Unit` sans l'option `millisecond` (jour, semaine, mois, année, etc.).

## Paramètres

- `input` : Date à arrondir.
- `unit` : Unité cible (`day` par défaut).

## Valeur de retour

Un `TheDate` arrondi à l'unité demandée.

## Voir aussi

- [`each`](/fr/v1/api/date/each)
- [`addDays`](/fr/v1/api/date/addDays)
