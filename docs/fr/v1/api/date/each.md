---
outline: [2, 3]
prev:
  text: "round"
  link: "/fr/v1/api/date/round"
next:
  text: "closestTo"
  link: "/fr/v1/api/date/closestTo"
---

# each

Génère un itérateur sur toutes les dates comprises entre deux bornes inclusives, suivant une granularité (`Unit`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/each/tryout.doc.ts"
  majorVersion="v1"
  height="340px"
/>

## Syntaxe

```typescript
function each(
	range: { start: TheDate; end: TheDate },
	unit?: Unit
): Generator<TheDate>
```

## Paramètres

- `range.start` / `range.end` : Bornes du parcours (`TheDate`).
- `unit` : Unité (`day` par défaut).

## Valeur de retour

Un générateur qui émet chaque `TheDate` selon l'unité spécifiée.

## Voir aussi

- [`addDays`](/fr/v1/api/date/addDays)
- [`closestTo`](/fr/v1/api/date/closestTo)
