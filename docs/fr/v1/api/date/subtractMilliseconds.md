---
outline: [2, 3]
description: "Soustrait un nombre positif de millisecondes d'un TheDate."
prev:
  text: "subtractSeconds"
  link: "/fr/v1/api/date/subtractSeconds"
next:
  text: "subtractTime"
  link: "/fr/v1/api/date/subtractTime"
---

# subtractMilliseconds

Soustrait un nombre positif de millisecondes d'un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/subtractMilliseconds/tryout.doc.ts"
  majorVersion="v1"
  height="145px"
/>

## Syntaxe

### Signature classique

```typescript
function subtractMilliseconds<
	GenericInput extends TheDate, 
	GenericMillisecond extends number
>(
	input: GenericInput,
	millisecond: PositiveNumber<GenericMillisecond>
): TheDate
```

### Signature currifiée

```typescript
function subtractMilliseconds<
	GenericInput extends TheDate, 
	GenericMillisecond extends number
>(
	millisecond: PositiveNumber<GenericMillisecond>
): (input: GenericInput) => TheDate
```

## Paramètres

- `millisecond` : Millisecondes à retirer.
- `input` : Date d'origine.

## Valeur de retour

Un `TheDate` reculé du nombre de millisecondes fourni.

## Voir aussi

- [`subtractSeconds`](/fr/v1/api/date/subtractSeconds)
- [`addMilliseconds`](/fr/v1/api/date/addMilliseconds)
