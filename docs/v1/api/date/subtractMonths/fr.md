---
outline: [2, 3]
prev:
  text: "subtractYears"
  link: "/v1/api/date/subtractYears/fr"
next:
  text: "subtractWeeks"
  link: "/v1/api/date/subtractWeeks/fr"
---

# subtractMonths

Soustrait un nombre positif de mois d'un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/subtractMonths/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
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

- [`addMonths`](/v1/api/date/addMonths/fr)
- [`subtractWeeks`](/v1/api/date/subtractWeeks/fr)
