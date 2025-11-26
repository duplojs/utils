---
outline: [2, 3]
prev:
  text: "addDays"
  link: "/v1/api/date/addDays/fr"
next:
  text: "addMinutes"
  link: "/v1/api/date/addMinutes/fr"
---

# addHours

Ajoute un nombre positif d'heures à un `TheDate` sans manipuler directement les millisecondes.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/addHours/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function addHours<GenericInput extends TheDate, GenericHour extends number>(
	input: GenericInput,
	hour: PositiveNumber<GenericHour>
): TheDate
```

### Signature currifiée

```typescript
function addHours<GenericInput extends TheDate, GenericHour extends number>(
	hour: PositiveNumber<GenericHour>
): (input: GenericInput) => TheDate
```

## Paramètres

- `hour` : Nombre d'heures strictement positif.
- `input` : `TheDate` à décaler.

## Valeur de retour

Un `TheDate` avancé du nombre d'heures demandé.

## Voir aussi

- [`addMinutes`](/v1/api/date/addMinutes/fr)
- [`subtractHours`](/v1/api/date/subtractHours/fr)
