---
outline: [2, 3]
description: "La fonction getLastDayOfMonth() renvoie le dernier jour du mois correspondant au TheDate fourni."
prev:
  text: "getFirstDayOfMonth"
  link: "/fr/v1/api/date/getFirstDayOfMonth"
next:
  text: "addYears"
  link: "/fr/v1/api/date/addYears"
---

# getLastDayOfMonth

La fonction **`getLastDayOfMonth()`** renvoie le dernier jour du mois correspondant au `TheDate` fourni.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/getLastDayOfMonth/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntaxe

```typescript
function getLastDayOfMonth(
	input: TheDate
): TheDate
```

## Paramètres

- `input` : Date `TheDate` à analyser.

## Valeur de retour

Un `TheDate` positionné sur le dernier jour du même mois (minuit UTC).

## Voir aussi

- [`getFirstDayOfMonth`](/fr/v1/api/date/getFirstDayOfMonth)
- [`addMonths`](/fr/v1/api/date/addMonths)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
