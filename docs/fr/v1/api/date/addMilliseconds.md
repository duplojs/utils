---
outline: [2, 3]
description: "Ajoute un nombre positif de millisecondes à un TheDate."
prev:
  text: "addSeconds"
  link: "/fr/v1/api/date/addSeconds"
next:
  text: "addTime"
  link: "/fr/v1/api/date/addTime"
---

# addMilliseconds

Ajoute un nombre positif de millisecondes à un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/addMilliseconds/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function addMilliseconds<
	GenericInput extends TheDate, 
	GenericMillisecond extends number
>(
	input: GenericInput,
	millisecond: PositiveNumber<GenericMillisecond>
): TheDate
```

### Signature currifiée

```typescript
function addMilliseconds<
	GenericInput extends TheDate, 
	GenericMillisecond extends number
>(
	millisecond: PositiveNumber<GenericMillisecond>
): (input: GenericInput) => TheDate
```

## Paramètres

- `millisecond` : Nombre de millisecondes strictement positif.
- `input` : `TheDate` à ajuster.

## Valeur de retour

Un `TheDate` avancé du nombre de millisecondes demandé.

## Voir aussi

- [`addSeconds`](/fr/v1/api/date/addSeconds)
- [`subtractMilliseconds`](/fr/v1/api/date/subtractMilliseconds)
