---
outline: [2, 3]
prev:
  text: "betweenThan"
  link: "/v1/api/date/betweenThan/fr"
next:
  text: "each"
  link: "/v1/api/date/each/fr"
---

# round

Arrondit un `TheDate` à l'unité spécifiée (`unit`).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/round/examples/tryout.doc.ts"
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

- [`each`](/v1/api/date/each/fr)
- [`addDays`](/v1/api/date/addDays/fr)
