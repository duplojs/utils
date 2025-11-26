---
outline: [2, 3]
prev:
  text: "createOrThrow"
  link: "/v1/api/date/createOrThrow/fr"
next:
  text: "today"
  link: "/v1/api/date/today/fr"
---

# now

La fonction **`now()`** retourne l'instant exact courant sous forme de `TheDate` (timestamp Unix positif).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/now/examples/tryout.doc.ts"
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

- [`today`](/v1/api/date/today/fr) – Début de journée.
- [`yesterday`](/v1/api/date/yesterday/fr) – Jour précédent.

## Sources

- [MDN Web Docs - Date.now()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/now)
