---
outline: [2, 3]
prev:
  text: "now"
  link: "/v1/api/date/now/fr"
next:
  text: "yesterday"
  link: "/v1/api/date/yesterday/fr"
---

# today

La fonction **`today()`** retourne un `TheDate` fixé au début de la journée courante (minuit UTC).

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/today/examples/tryout.doc.ts"
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

- [`yesterday`](/v1/api/date/yesterday/fr)
- [`tomorrow`](/v1/api/date/tomorrow/fr)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
