---
outline: [2, 3]
prev:
  text: "getFirstDayOfMonth"
  link: "/v1/api/date/getFirstDayOfMonth/fr"
next:
  text: "addYears"
  link: "/v1/api/date/addYears/fr"
---

# getLastDayOfMonth

La fonction **`getLastDayOfMonth()`** renvoie le dernier jour du mois correspondant au `TheDate` fourni.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/getLastDayOfMonth/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
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

- [`getFirstDayOfMonth`](/v1/api/date/getFirstDayOfMonth/fr)
- [`addMonths`](/v1/api/date/addMonths/fr)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
