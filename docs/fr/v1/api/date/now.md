---
outline: [2, 3]
prev:
  text: "createTimeOrThrow"
  link: "/fr/v1/api/date/createTimeOrThrow"
next:
  text: "today"
  link: "/fr/v1/api/date/today"
---

# now

La fonction **`now()`** retourne l'instant exact courant sous forme de `TheDate` (timestamp Unix positif).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/now/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function now(): TheDate
```

## Paramètres

Aucun.

## Valeur de retour

Un `TheDate` représentant le moment courant.

## Voir aussi

- [`today`](/fr/v1/api/date/today) – Début de journée.
- [`yesterday`](/fr/v1/api/date/yesterday) – Jour précédent.

## Sources

- [MDN Web Docs - Date.now()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/now)
