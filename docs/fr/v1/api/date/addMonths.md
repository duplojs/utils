---
outline: [2, 3]
description: "La fonction addMonths() ajoute un nombre positif de mois à un TheDate. Les dépassements d'année et les années bissextiles sont gérés automatiquement."
prev:
  text: "addYears"
  link: "/fr/v1/api/date/addYears"
next:
  text: "addWeeks"
  link: "/fr/v1/api/date/addWeeks"
---

# addMonths

La fonction **`addMonths()`** ajoute un nombre positif de mois à un `TheDate`. Les dépassements d'année et les années bissextiles sont gérés automatiquement.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/addMonths/tryout.doc.ts"
  majorVersion="v1"
  height="229px"
/>

## Syntaxe

### Signature classique

```typescript
function addMonths<
	GenericInput extends TheDate,
	GenericMonth extends number
>(
	input: GenericInput,
	month: PositiveNumber<GenericMonth>
): TheDate
```

### Signature currifiée

```typescript
function addMonths<
	GenericInput extends TheDate,
	GenericMonth extends number
>(
	month: PositiveNumber<GenericMonth>
): (input: GenericInput) => TheDate
```

## Paramètres

- `month` : Nombre de mois strictement positif.
- `input` : Date à ajuster (signature classique).

## Valeur de retour

Un `TheDate` avancé du nombre de mois indiqué.

## Voir aussi

- [`addWeeks`](/fr/v1/api/date/addWeeks)
- [`subtractMonths`](/fr/v1/api/date/subtractMonths)
