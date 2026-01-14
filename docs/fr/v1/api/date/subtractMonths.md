---
outline: [2, 3]
description: "Soustrait un nombre positif de mois d'un TheDate."
prev:
  text: "subtractYears"
  link: "/fr/v1/api/date/subtractYears"
next:
  text: "subtractWeeks"
  link: "/fr/v1/api/date/subtractWeeks"
---

# subtractMonths

Soustrait un nombre positif de mois d'un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/subtractMonths/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntaxe

### Signature classique

```typescript
function subtractMonths<
	GenericInput extends TheDate, 
	GenericMonth extends number
>(
	input: GenericInput,
	month: PositiveNumber<GenericMonth>
): TheDate
```

### Signature currifiée

```typescript
function subtractMonths<
	GenericInput extends TheDate, 
	GenericMonth extends number
>(
	month: PositiveNumber<GenericMonth>
): (input: GenericInput) => TheDate
```

## Paramètres

- `month` : Nombre de mois à soustraire.
- `input` : Date source.

## Valeur de retour

Un `TheDate` reculé du nombre de mois indiqué.

## Voir aussi

- [`addMonths`](/fr/v1/api/date/addMonths)
- [`subtractWeeks`](/fr/v1/api/date/subtractWeeks)
