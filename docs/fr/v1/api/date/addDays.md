---
outline: [2, 3]
description: "Ajoute un nombre positif de jours à un TheDate."
prev:
  text: "addWeeks"
  link: "/fr/v1/api/date/addWeeks"
next:
  text: "addHours"
  link: "/fr/v1/api/date/addHours"
---

# addDays

Ajoute un nombre positif de jours à un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/addDays/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntaxe

### Signature classique

```typescript
function addDays<
	GenericInput extends TheDate,
	GenericDay extends number
>(
	input: GenericInput,
	day: PositiveNumber<GenericDay>
): TheDate
```

### Signature currifiée

```typescript
function addDays<
	GenericInput extends TheDate,
	GenericDay extends number
>(
	day: PositiveNumber<GenericDay>
): (input: GenericInput) => TheDate
```

## Paramètres

- `day` : Nombre de jours strictement positif.
- `input` : Date `TheDate`.

## Valeur de retour

Un `TheDate` avancé du nombre de jours indiqué.

## Voir aussi

- [`addWeeks`](/fr/v1/api/date/addWeeks)
- [`subtractDays`](/fr/v1/api/date/subtractDays)
