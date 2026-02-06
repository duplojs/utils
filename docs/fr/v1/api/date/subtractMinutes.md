---
outline: [2, 3]
description: "Soustrait un nombre de minutes d'un TheDate."
prev:
 text: "subtractHours"
 link: "/fr/v1/api/date/subtractHours"
next:
 text: "subtractSeconds"
 link: "/fr/v1/api/date/subtractSeconds"
---

# subtractMinutes

Soustrait un nombre de minutes d'un `TheDate`.

## Exemple interactif

<MonacoTSEditor
 src="/examples/v1/api/date/subtractMinutes/tryout.doc.ts"
 majorVersion="v1"
 height="145px"
/>

## Syntaxe

### Signature classique

```typescript
function subtractMinutes<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericMinute extends number
>(
	input: GenericInput,
	minute: GenericMinute
): TheDate
```

### Signature currifiée

```typescript
function subtractMinutes<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericMinute extends number
>(
	minute: GenericMinute
): (input: GenericInput) => TheDate
```

## Paramètres

- `minute` : Minutes à retirer.
- `input` : `TheDate` ou `SerializedTheDate`.

## Valeur de retour

Un `TheDate` reculé du nombre de minutes demandé.

## Voir aussi

- [`subtractSeconds`](/fr/v1/api/date/subtractSeconds)
- [`addMinutes`](/fr/v1/api/date/addMinutes)
