---
outline: [2, 3]
description: "Soustrait un nombre de millisecondes d'un TheDate."
prev:
 text: "subtractSeconds"
 link: "/fr/v1/api/date/subtractSeconds"
next:
 text: "subtractTime"
 link: "/fr/v1/api/date/subtractTime"
---

# subtractMilliseconds

Soustrait un nombre de millisecondes d'un `TheDate`.

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
	GenericInput extends TheDate | SerializedTheDate, 
	GenericMillisecond extends number
>(
	input: GenericInput,
	millisecond: GenericMillisecond
): TheDate
```

### Signature currifiée

```typescript
function subtractMilliseconds<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericMillisecond extends number
>(
	millisecond: GenericMillisecond
): (input: GenericInput) => TheDate
```

## Paramètres

- `millisecond` : Millisecondes à retirer.
- `input` : `TheDate` ou `SerializedTheDate`.

## Valeur de retour

Un `TheDate` reculé du nombre de millisecondes fourni.

## Voir aussi

- [`subtractSeconds`](/fr/v1/api/date/subtractSeconds)
- [`addMilliseconds`](/fr/v1/api/date/addMilliseconds)
