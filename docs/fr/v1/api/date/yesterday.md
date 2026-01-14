---
outline: [2, 3]
description: "La fonction yesterday() retourne le début de la journée précédente (minuit UTC) sous forme de TheDate."
prev:
  text: "today"
  link: "/fr/v1/api/date/today"
next:
  text: "tomorrow"
  link: "/fr/v1/api/date/tomorrow"
---

# yesterday

La fonction **`yesterday()`** retourne `now()` - 1 jour sous forme de `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/yesterday/tryout.doc.ts"
  majorVersion="v1"
  height="124px"
/>

## Syntaxe

```typescript
function yesterday(): TheDate
```

## Paramètres

Aucun.

## Valeur de retour

Un `TheDate` représentant le jour précédent a la même heure.

## Voir aussi

- [`today`](/fr/v1/api/date/today)
- [`tomorrow`](/fr/v1/api/date/tomorrow)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
