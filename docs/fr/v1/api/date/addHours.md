---
outline: [2, 3]
description: "Ajoute un nombre positif d'heures à un TheDate sans manipuler directement les millisecondes."
prev:
  text: "addDays"
  link: "/fr/v1/api/date/addDays"
next:
  text: "addMinutes"
  link: "/fr/v1/api/date/addMinutes"
---

# addHours

Ajoute un nombre positif d'heures à un `TheDate` sans manipuler directement les millisecondes.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/addHours/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntaxe

### Signature classique

```typescript
function addHours<
	GenericInput extends TheDate, 
	GenericHour extends number
>(
	input: GenericInput,
	hour: PositiveNumber<GenericHour>
): TheDate
```

### Signature currifiée

```typescript
function addHours<
	GenericInput extends TheDate, 
	GenericHour extends number
>(
	hour: PositiveNumber<GenericHour>
): (input: GenericInput) => TheDate
```

## Paramètres

- `hour` : Nombre d'heures strictement positif.
- `input` : `TheDate` à décaler.

## Valeur de retour

Un `TheDate` avancé du nombre d'heures demandé.

## Voir aussi

- [`addMinutes`](/fr/v1/api/date/addMinutes)
- [`subtractHours`](/fr/v1/api/date/subtractHours)
