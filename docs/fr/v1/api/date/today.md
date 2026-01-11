---
outline: [2, 3]
description: "La fonction today() retourne un TheDate fixé au début de la journée courante (minuit UTC)."
prev:
  text: "now"
  link: "/fr/v1/api/date/now"
next:
  text: "yesterday"
  link: "/fr/v1/api/date/yesterday"
---

# today

La fonction **`today()`** retourne un `TheDate` fixé au début de la journée courante (minuit UTC).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/today/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function today(): TheDate
```

## Paramètres

Aucun.

## Valeur de retour

Un `TheDate` représentant minuit (UTC) du jour courant.

## Voir aussi

- [`yesterday`](/fr/v1/api/date/yesterday)
- [`tomorrow`](/fr/v1/api/date/tomorrow)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
