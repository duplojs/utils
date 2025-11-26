---
outline: [2, 3]
prev:
  text: "addMilliseconds"
  link: "/v1/api/date/addMilliseconds/fr"
next:
  text: "subtractMonths"
  link: "/v1/api/date/subtractMonths/fr"
---

# subtractYears

Soustrait un nombre positif d'années d'un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/subtractYears/examples/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

### Signature classique

```typescript
function subtractYears<
	GenericInput extends TheDate, 
	GenericYear extends number
>(
	input: GenericInput,
	year: PositiveNumber<GenericYear>
): TheDate
```

### Signature currifiée

```typescript
function subtractYears<
	GenericInput extends TheDate, 
	GenericYear extends number
>(
	year: PositiveNumber<GenericYear>
): (input: GenericInput) => TheDate
```

## Paramètres

- `year` : Nombre d'années à soustraire.
- `input` : Date d'origine.

## Valeur de retour

Un `TheDate` reculé du nombre d'années indiqué.

## Voir aussi

- [`addYears`](/v1/api/date/addYears/fr)
- [`subtractMonths`](/v1/api/date/subtractMonths/fr)
