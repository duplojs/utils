---
outline: [2, 3]
description: "Soustrait un nombre de secondes d'un TheDate."
prev:
 text: "subtractMinutes"
 link: "/fr/v1/api/date/subtractMinutes"
next:
 text: "subtractMilliseconds"
 link: "/fr/v1/api/date/subtractMilliseconds"
---

# subtractSeconds

Soustrait un nombre de secondes d'un `TheDate`.

## Exemple interactif

<MonacoTSEditor
 src="/examples/v1/api/date/subtractSeconds/tryout.doc.ts"
 majorVersion="v1"
 height="145px"
/>

## Syntaxe

### Signature classique

```typescript
function subtractSeconds<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericSecond extends number
>(
	input: GenericInput,
	second: GenericSecond
): TheDate
```

### Signature currifiée

```typescript
function subtractSeconds<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericSecond extends number
>(
	second: GenericSecond
): (input: GenericInput) => TheDate
```

## Paramètres

- `second` : Secondes à retirer.
- `input` : `TheDate` ou `SerializedTheDate`.

## Valeur de retour

Un `TheDate` reculé du nombre de secondes indiqué.

## Voir aussi

- [`subtractMilliseconds`](/fr/v1/api/date/subtractMilliseconds)
- [`addSeconds`](/fr/v1/api/date/addSeconds)
