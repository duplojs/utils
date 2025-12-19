---
outline: [2, 3]
prev:
  text: "addMonths"
  link: "/fr/v1/api/date/addMonths"
next:
  text: "addDays"
  link: "/fr/v1/api/date/addDays"
---

# addWeeks

Ajoute un nombre positif de semaines (multiples de 7 jours) à un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/addWeeks/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function addWeeks<
	GenericInput extends TheDate, 
	GenericWeek extends number
>(
	input: GenericInput,
	week: PositiveNumber<GenericWeek>
): TheDate
```

### Signature currifiée

```typescript
function addWeeks<
	GenericInput extends TheDate, 
	GenericWeek extends number
>(
	week: PositiveNumber<GenericWeek>
): (input: GenericInput) => TheDate
```

## Paramètres

- `week` : Nombre de semaines strictement positif.
- `input` : Date à décaler.

## Valeur de retour

Un `TheDate` avancé du nombre de semaines demandé.

## Voir aussi

- [`addDays`](/fr/v1/api/date/addDays)
- [`subtractWeeks`](/fr/v1/api/date/subtractWeeks)
