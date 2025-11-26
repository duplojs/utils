---
outline: [2, 3]
prev:
  text: "subtractMinutes"
  link: "/v1/api/date/subtractMinutes/fr"
next:
  text: "subtractMilliseconds"
  link: "/v1/api/date/subtractMilliseconds/fr"
---

# subtractSeconds

Soustrait un nombre positif de secondes d'un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/subtractSeconds/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function subtractSeconds<
	GenericInput extends TheDate, 
	GenericSecond extends number
>(
	input: GenericInput,
	second: PositiveNumber<GenericSecond>
): TheDate
```

### Signature currifiée

```typescript
function subtractSeconds<
	GenericInput extends TheDate, 
	GenericSecond extends number
>(
	second: PositiveNumber<GenericSecond>
): (input: GenericInput) => TheDate
```

## Paramètres

- `second` : Secondes à retirer.
- `input` : Date d'origine.

## Valeur de retour

Un `TheDate` reculé du nombre de secondes indiqué.

## Voir aussi

- [`subtractMilliseconds`](/v1/api/date/subtractMilliseconds/fr)
- [`addSeconds`](/v1/api/date/addSeconds/fr)
