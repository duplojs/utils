---
outline: [2, 3]
prev:
  text: "today"
  link: "/v1/api/date/today/fr"
next:
  text: "tomorrow"
  link: "/v1/api/date/tomorrow/fr"
---

# yesterday

La fonction **`yesterday()`** retourne le début de la journée précédente (minuit UTC) sous forme de `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/yesterday/examples/tryout.doc.ts"
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

- [`today`](/v1/api/date/today/fr)
- [`tomorrow`](/v1/api/date/tomorrow/fr)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
