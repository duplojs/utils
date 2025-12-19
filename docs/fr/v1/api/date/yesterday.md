---
outline: [2, 3]
prev:
  text: "today"
  link: "/fr/v1/api/date/today"
next:
  text: "tomorrow"
  link: "/fr/v1/api/date/tomorrow"
---

# yesterday

La fonction **`yesterday()`** retourne le début de la journée précédente (minuit UTC) sous forme de `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/yesterday/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function yesterday(): TheDate
```

## Paramètres

Aucun.

## Valeur de retour

Un `TheDate` représentant minuit du jour précédent.

## Voir aussi

- [`today`](/fr/v1/api/date/today)
- [`tomorrow`](/fr/v1/api/date/tomorrow)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
