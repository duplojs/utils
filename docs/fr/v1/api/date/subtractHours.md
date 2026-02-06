---
outline: [2, 3]
description: "Soustrait un nombre d'heures d'un TheDate."
prev:
 text: "subtractDays"
 link: "/fr/v1/api/date/subtractDays"
next:
 text: "subtractMinutes"
 link: "/fr/v1/api/date/subtractMinutes"
---

# subtractHours

Soustrait un nombre d'heures d'un `TheDate`.

## Exemple interactif

<MonacoTSEditor
 src="/examples/v1/api/date/subtractHours/tryout.doc.ts"
 majorVersion="v1"
 height="145px"
/>

## Syntaxe

### Signature classique

```typescript
function subtractHours<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericHour extends number
>(
	input: GenericInput,
	hour: GenericHour
): TheDate
```

### Signature currifiée

```typescript
function subtractHours<
	GenericInput extends TheDate | SerializedTheDate, 
	GenericHour extends number
>(
	hour: GenericHour
): (input: GenericInput) => TheDate
```

## Paramètres

- `hour` : Heures à retirer.
- `input` : `TheDate` ou `SerializedTheDate`.

## Valeur de retour

Un `TheDate` reculé du nombre d'heures demandé.

## Voir aussi

- [`subtractMinutes`](/fr/v1/api/date/subtractMinutes)
- [`addHours`](/fr/v1/api/date/addHours)
