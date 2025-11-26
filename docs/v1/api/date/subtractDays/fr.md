---
outline: [2, 3]
prev:
  text: "subtractWeeks"
  link: "/v1/api/date/subtractWeeks/fr"
next:
  text: "subtractHours"
  link: "/v1/api/date/subtractHours/fr"
---

# subtractDays

Soustrait un nombre positif de jours d'un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/subtractDays/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
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

- [`subtractWeeks`](/v1/api/date/subtractWeeks/fr)
- [`addDays`](/v1/api/date/addDays/fr)
