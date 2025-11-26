---
outline: [2, 3]
prev:
  text: "yesterday"
  link: "/v1/api/date/yesterday/fr"
next:
  text: "toNative"
  link: "/v1/api/date/toNative/fr"
---

# tomorrow

La fonction **`tomorrow()`** retourne le début de la journée suivante (minuit UTC) sous forme de `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/tomorrow/examples/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function tomorrow(): TheDate
```

## Paramètres

Aucun.

## Valeur de retour

Un `TheDate` représentant minuit du jour suivant.

## Voir aussi

- [`today`](/v1/api/date/today/fr)
- [`yesterday`](/v1/api/date/yesterday/fr)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
