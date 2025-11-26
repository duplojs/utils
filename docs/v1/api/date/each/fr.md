---
outline: [2, 3]
prev:
  text: "round"
  link: "/v1/api/date/round/fr"
next:
  text: "closestTo"
  link: "/v1/api/date/closestTo/fr"
---

# each

Génère un itérateur sur toutes les dates comprises entre deux bornes inclusives, suivant une granularité (`Unit`).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/each/examples/tryout.doc.ts"
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

- [`addDays`](/v1/api/date/addDays/fr)
- [`closestTo`](/v1/api/date/closestTo/fr)
