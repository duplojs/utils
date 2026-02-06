---
outline: [2, 3]
description: "Ajoute un nombre de minutes à un TheDate."
prev:
 text: "addHours"
 link: "/fr/v1/api/date/addHours"
next:
 text: "addSeconds"
 link: "/fr/v1/api/date/addSeconds"
---

# addMinutes

Ajoute un nombre de minutes à un `TheDate`.

## Exemple interactif

<MonacoTSEditor
 src="/examples/v1/api/date/addMinutes/tryout.doc.ts"
 majorVersion="v1"
 height="145px"
/>

## Syntaxe

### Signature classique

```typescript
function addMinutes<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericMinute extends number
>(
	input: GenericInput,
	minute: GenericMinute
): TheDate
```

### Signature currifiée

```typescript
function addMinutes<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericMinute extends number
>(
	minute: GenericMinute
): (input: GenericInput) => TheDate
```

## Paramètres

- `minute` : Nombre de minutes .
- `input` : `TheDate` ou `SerializedTheDate`.

## Valeur de retour

Un `TheDate` avancé du nombre de minutes demandé.

## Voir aussi

- [`addHours`](/fr/v1/api/date/addHours)
- [`addSeconds`](/fr/v1/api/date/addSeconds)
