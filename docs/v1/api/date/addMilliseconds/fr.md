---
outline: [2, 3]
prev:
  text: "addSeconds"
  link: "/v1/api/date/addSeconds/fr"
next:
  text: "subtractYears"
  link: "/v1/api/date/subtractYears/fr"
---

# addMilliseconds

Ajoute un nombre positif de millisecondes à un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/addMilliseconds/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function addMilliseconds<GenericInput extends TheDate, GenericMillisecond extends number>(
	input: GenericInput,
	millisecond: PositiveNumber<GenericMillisecond>
): TheDate
```

### Signature currifiée

```typescript
function addMilliseconds<GenericInput extends TheDate, GenericMillisecond extends number>(
	millisecond: PositiveNumber<GenericMillisecond>
): (input: GenericInput) => TheDate
```

## Paramètres

- `millisecond` : Nombre de millisecondes strictement positif.
- `input` : `TheDate` à ajuster.

## Valeur de retour

Un `TheDate` avancé du nombre de millisecondes demandé.

## Voir aussi

- [`addSeconds`](/v1/api/date/addSeconds/fr)
- [`subtractMilliseconds`](/v1/api/date/subtractMilliseconds/fr)
