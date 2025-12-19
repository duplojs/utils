---
outline: [2, 3]
prev:
  text: "getLastDayOfWeek"
  link: "/fr/v1/api/date/getLastDayOfWeek"
next:
  text: "getLastDayOfMonth"
  link: "/fr/v1/api/date/getLastDayOfMonth"
---

# getFirstDayOfMonth

La fonction **`getFirstDayOfMonth()`** renvoie le premier jour du mois (au format `TheDate`) pour la date donnée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/getFirstDayOfMonth/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

```typescript
function getFirstDayOfMonth(
	input: TheDate
): TheDate
```

## Paramètres

- `input` : `TheDate` dont on veut connaître le premier jour du mois.

## Valeur de retour

Un `TheDate` positionné sur le premier jour du mois (à minuit UTC).

## Voir aussi

- [`getLastDayOfMonth`](/fr/v1/api/date/getLastDayOfMonth)
- [`getDayOfMonth`](/fr/v1/api/date/getDayOfMonth)

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
