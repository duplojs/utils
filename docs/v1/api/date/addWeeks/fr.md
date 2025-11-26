---
outline: [2, 3]
prev:
  text: "addMonths"
  link: "/v1/api/date/addMonths/fr"
next:
  text: "addDays"
  link: "/v1/api/date/addDays/fr"
---

# addWeeks

Ajoute un nombre positif de semaines (multiples de 7 jours) à un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/addWeeks/examples/tryout.doc.ts"
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

- [`addDays`](/v1/api/date/addDays/fr)
- [`subtractWeeks`](/v1/api/date/subtractWeeks/fr)
