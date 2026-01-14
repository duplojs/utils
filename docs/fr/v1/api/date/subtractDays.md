---
outline: [2, 3]
description: "Soustrait un nombre positif de jours d'un TheDate."
prev:
  text: "subtractWeeks"
  link: "/fr/v1/api/date/subtractWeeks"
next:
  text: "subtractHours"
  link: "/fr/v1/api/date/subtractHours"
---

# subtractDays

Soustrait un nombre positif de jours d'un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/subtractDays/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntaxe

### Signature classique

```typescript
function subtractDays<
	GenericInput extends TheDate, 
	GenericDay extends number
>(
	input: GenericInput,
	day: PositiveNumber<GenericDay>
): TheDate
```

### Signature currifiée

```typescript
function subtractDays<
	GenericInput extends TheDate,
	GenericDay extends number
>(
	day: PositiveNumber<GenericDay>
): (input: GenericInput) => TheDate
```

## Paramètres

- `day` : Nombre de jours à retirer.
- `input` : Date source.

## Valeur de retour

Un `TheDate` reculé du nombre de jours demandé.

## Voir aussi

- [`subtractWeeks`](/fr/v1/api/date/subtractWeeks)
- [`addDays`](/fr/v1/api/date/addDays)
