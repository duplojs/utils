---
outline: [2, 3]
prev:
  text: "subtractDays"
  link: "/v1/api/date/subtractDays/fr"
next:
  text: "subtractMinutes"
  link: "/v1/api/date/subtractMinutes/fr"
---

# subtractHours

Soustrait un nombre positif d'heures d'un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/subtractHours/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function subtractHours<
	GenericInput extends TheDate, 
	GenericHour extends number
>(
	input: GenericInput,
	hour: PositiveNumber<GenericHour>
): TheDate
```

### Signature currifiée

```typescript
function subtractHours<
	GenericInput extends TheDate, 
	GenericHour extends number
>(
	hour: PositiveNumber<GenericHour>
): (input: GenericInput) => TheDate
```

## Paramètres

- `hour` : Heures à retirer.
- `input` : Date cible.

## Valeur de retour

Un `TheDate` reculé du nombre d'heures demandé.

## Voir aussi

- [`subtractMinutes`](/v1/api/date/subtractMinutes/fr)
- [`addHours`](/v1/api/date/addHours/fr)
