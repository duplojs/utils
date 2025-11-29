---
outline: [2, 3]
prev:
  text: "subtractMonths"
  link: "/v1/api/date/subtractMonths/fr"
next:
  text: "subtractDays"
  link: "/v1/api/date/subtractDays/fr"
---

# subtractWeeks

Soustrait un nombre positif de semaines d'un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/subtractWeeks/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function subtractWeeks<
	GenericInput extends TheDate,
	GenericWeek extends number
>(
	input: GenericInput,
	week: PositiveNumber<GenericWeek>
): TheDate
```

### Signature currifiée

```typescript
function subtractWeeks<
	GenericInput extends TheDate,
	GenericWeek extends number
>(
	week: PositiveNumber<GenericWeek>
): (input: GenericInput) => TheDate
```

## Paramètres

- `week` : Nombre de semaines à retirer.
- `input` : Date cible.

## Valeur de retour

Un `TheDate` reculé du nombre de semaines demandé.

## Voir aussi

- [`subtractDays`](/v1/api/date/subtractDays/fr)
- [`addWeeks`](/v1/api/date/addWeeks/fr)
