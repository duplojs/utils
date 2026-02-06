---
outline: [2, 3]
description: "Ajoute un nombre de millisecondes à un TheDate."
prev:
 text: "addSeconds"
 link: "/fr/v1/api/date/addSeconds"
next:
 text: "addTime"
 link: "/fr/v1/api/date/addTime"
---

# addMilliseconds

Ajoute un nombre de millisecondes à un `TheDate`.

## Exemple interactif

<MonacoTSEditor
 src="/examples/v1/api/date/addMilliseconds/tryout.doc.ts"
 majorVersion="v1"
 height="145px"
/>

## Syntaxe

### Signature classique

```typescript
function addMilliseconds<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericMillisecond extends number
>(
	input: GenericInput,
	millisecond: GenericMillisecond
): TheDate
```

### Signature currifiée

```typescript
function addMilliseconds<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericMillisecond extends number
>(
	millisecond: GenericMillisecond
): (input: GenericInput) => TheDate
```

## Paramètres

- `millisecond` : Nombre de millisecondes .
- `input` : `TheDate` ou `SerializedTheDate`.

## Valeur de retour

Un `TheDate` avancé du nombre de millisecondes demandé.

## Voir aussi

- [`addSeconds`](/fr/v1/api/date/addSeconds)
- [`subtractMilliseconds`](/fr/v1/api/date/subtractMilliseconds)
