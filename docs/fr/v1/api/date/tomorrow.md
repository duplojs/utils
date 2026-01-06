---
outline: [2, 3]
prev:
  text: "yesterday"
  link: "/fr/v1/api/date/yesterday"
next:
  text: "toNative"
  link: "/fr/v1/api/date/toNative"
---

# tomorrow

La fonction **`tomorrow()`** retourne `now()` + 1 jour sous forme de `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/tomorrow/tryout.doc.ts"
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

Un `TheDate` représentant le jour suivant a la même heure.

## Voir aussi

- [`today`](/fr/v1/api/date/today)
- [`yesterday`](/fr/v1/api/date/yesterday)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
