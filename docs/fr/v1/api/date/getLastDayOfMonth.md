---
outline: [2, 3]
description: "La fonction getLastDayOfMonth() renvoie le dernier jour du mois pour un TheDate ou un SerializedTheDate."
prev:
  text: "getFirstDayOfMonth"
  link: "/fr/v1/api/date/getFirstDayOfMonth"
next:
  text: "addYears"
  link: "/fr/v1/api/date/addYears"
---

# getLastDayOfMonth

La fonction **`getLastDayOfMonth()`** renvoie le dernier jour du mois correspondant au `TheDate` ou `SerializedTheDate` fourni.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/getLastDayOfMonth/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntaxe

```typescript
function getLastDayOfMonth<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput
): TheDate
```

## Paramètres

- `input` : `TheDate` ou `SerializedTheDate`.

## Valeur de retour

Un `TheDate` positionné sur le dernier jour du même mois, normalisé à `23:59:59.999` en UTC.

## Voir aussi

- [`getFirstDayOfMonth`](/fr/v1/api/date/getFirstDayOfMonth)
- [`addMonths`](/fr/v1/api/date/addMonths)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
