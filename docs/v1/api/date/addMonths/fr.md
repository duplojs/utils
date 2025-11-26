---
outline: [2, 3]
prev:
  text: "addYears"
  link: "/v1/api/date/addYears/fr"
next:
  text: "addWeeks"
  link: "/v1/api/date/addWeeks/fr"
---

# addMonths

La fonction **`addMonths()`** ajoute un nombre positif de mois à un `TheDate`. Les dépassements d'année et les années bissextiles sont gérés automatiquement.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/addMonths/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
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

- [`addWeeks`](/v1/api/date/addWeeks/fr)
- [`subtractMonths`](/v1/api/date/subtractMonths/fr)
