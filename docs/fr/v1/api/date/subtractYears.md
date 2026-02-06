---
outline: [2, 3]
description: "Soustrait un nombre d'années d'un TheDate."
prev:
 text: "addTime"
 link: "/fr/v1/api/date/addTime"
next:
 text: "subtractMonths"
 link: "/fr/v1/api/date/subtractMonths"
---

# subtractYears

Soustrait un nombre d'années d'un `TheDate`.

## Exemple interactif

<MonacoTSEditor
 src="/examples/v1/api/date/subtractYears/tryout.doc.ts"
 majorVersion="v1"
 height="145px"
/>

## Syntaxe

### Signature classique

```typescript
function subtractYears<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericYear extends number
>(
	input: GenericInput,
	year: GenericYear
): TheDate
```

### Signature currifiée

```typescript
function subtractYears<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericYear extends number
>(
	year: GenericYear
): (input: GenericInput) => TheDate
```

## Paramètres

- `year` : Nombre d'années à soustraire.
- `input` : `TheDate` ou `SerializedTheDate`.

## Valeur de retour

Un `TheDate` reculé du nombre d'années indiqué.

## Voir aussi

- [`addYears`](/fr/v1/api/date/addYears)
- [`subtractMonths`](/fr/v1/api/date/subtractMonths)
