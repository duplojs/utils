---
outline: [2, 3]
description: "Ajoute un nombre positif de secondes à un TheDate."
prev:
  text: "addMinutes"
  link: "/fr/v1/api/date/addMinutes"
next:
  text: "addMilliseconds"
  link: "/fr/v1/api/date/addMilliseconds"
---

# addSeconds

Ajoute un nombre positif de secondes à un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/addSeconds/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function addSeconds<
	GenericInput extends TheDate, 
	GenericSecond extends number
>(
	input: GenericInput,
	second: PositiveNumber<GenericSecond>
): TheDate
```

### Signature currifiée

```typescript
function addSeconds<
	GenericInput extends TheDate, 
	GenericSecond extends number
>(
	second: PositiveNumber<GenericSecond>
): (input: GenericInput) => TheDate
```

## Paramètres

- `second` : Nombre de secondes strictement positif.
- `input` : `TheDate` à ajuster.

## Valeur de retour

Un `TheDate` avancé du nombre de secondes demandé.

## Voir aussi

- [`addMinutes`](/fr/v1/api/date/addMinutes)
- [`addMilliseconds`](/fr/v1/api/date/addMilliseconds)
