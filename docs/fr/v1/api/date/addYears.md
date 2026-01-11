---
outline: [2, 3]
description: "La fonction addYears() ajoute un nombre positif d'années à un TheDate. Elle accepte une signature currifiée pour composer des transformations."
prev:
  text: "getLastDayOfMonth"
  link: "/fr/v1/api/date/getLastDayOfMonth"
next:
  text: "addMonths"
  link: "/fr/v1/api/date/addMonths"
---

# addYears

La fonction **`addYears()`** ajoute un nombre positif d'années à un `TheDate`. Elle accepte une signature currifiée pour composer des transformations.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/addYears/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

### Signature classique

```typescript
function addYears<
	GenericInput extends TheDate,
	GenericYear extends number
>(
	input: GenericInput,
	year: PositiveNumber<GenericYear>
): TheDate
```

### Signature currifiée

```typescript
function addYears<
	GenericInput extends TheDate,
	GenericYear extends number
>(
	year: PositiveNumber<GenericYear>
): (input: GenericInput) => TheDate
```

## Paramètres

- `year` : Nombre d'années strictement positif (`PositiveNumber`).
- `input` : Date `TheDate` à modifier (dans la version classique).

## Valeur de retour

Un nouveau `TheDate` incrémenté du nombre d'années demandé.

## Voir aussi

- [`addMonths`](/fr/v1/api/date/addMonths)
- [`subtractYears`](/fr/v1/api/date/subtractYears)

## Sources

- [MDN Web Docs - Date.prototype.setUTCFullYear()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear)
