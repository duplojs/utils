---
outline: [2, 3]
description: "La fonction addYears() ajoute un nombre d'années à un TheDate. Elle accepte une signature currifiée pour composer des transformations."
prev:
 text: "getLastDayOfMonth"
 link: "/fr/v1/api/date/getLastDayOfMonth"
next:
 text: "addMonths"
 link: "/fr/v1/api/date/addMonths"
---

# addYears

La fonction **`addYears()`** ajoute un nombre d'années à un `TheDate`. Elle accepte une signature currifiée pour composer des transformations.

## Exemple interactif

<MonacoTSEditor
 src="/examples/v1/api/date/addYears/tryout.doc.ts"
 majorVersion="v1"
 height="229px"
/>

## Syntaxe

### Signature classique

```typescript
function addYears<
	GenericInput extends TheDate | SerializedTheDate,
	GenericYear extends number
>(
	input: GenericInput,
	year: GenericYear
): TheDate
```

### Signature currifiée

```typescript
function addYears<
	GenericInput extends TheDate | SerializedTheDate,
	GenericYear extends number
>(
	year: GenericYear
): (input: GenericInput) => TheDate
```

## Paramètres

- `year` : Nombre d'années.
- `input` : `TheDate` ou `SerializedTheDate`.

## Valeur de retour

Un nouveau `TheDate` incrémenté du nombre d'années demandé.

## Voir aussi

- [`addMonths`](/fr/v1/api/date/addMonths)
- [`subtractYears`](/fr/v1/api/date/subtractYears)

## Sources

- [MDN Web Docs - Date.prototype.setUTCFullYear()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear)
