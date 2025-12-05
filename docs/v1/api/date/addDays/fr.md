---
outline: [2, 3]
prev:
  text: "addWeeks"
  link: "/v1/api/date/addWeeks/fr"
next:
  text: "addHours"
  link: "/v1/api/date/addHours/fr"
---

# addDays

Ajoute un nombre positif de jours à un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/addDays/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
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

- [`addWeeks`](/v1/api/date/addWeeks/fr)
- [`subtractDays`](/v1/api/date/subtractDays/fr)
