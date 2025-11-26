---
outline: [2, 3]
prev:
  text: "subtractSeconds"
  link: "/v1/api/date/subtractSeconds/fr"
next:
  text: "greater"
  link: "/v1/api/date/greater/fr"
---

# subtractMilliseconds

Soustrait un nombre positif de millisecondes d'un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/subtractMilliseconds/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
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

- [`subtractSeconds`](/v1/api/date/subtractSeconds/fr)
- [`addMilliseconds`](/v1/api/date/addMilliseconds/fr)
