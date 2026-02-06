---
outline: [2, 3]
description: "Soustrait un nombre de semaines d'un TheDate."
prev:
 text: "subtractMonths"
 link: "/fr/v1/api/date/subtractMonths"
next:
 text: "subtractDays"
 link: "/fr/v1/api/date/subtractDays"
---

# subtractWeeks

Soustrait un nombre de semaines d'un `TheDate`.

## Exemple interactif

<MonacoTSEditor
 src="/examples/v1/api/date/subtractWeeks/tryout.doc.ts"
 majorVersion="v1"
 height="145px"
/>

## Syntaxe

### Signature classique

```typescript
function subtractWeeks<
	GenericInput extends TheDate | SerializedTheDate,
	GenericWeek extends number
>(
	input: GenericInput,
	week: GenericWeek
): TheDate
```

### Signature currifiée

```typescript
function subtractWeeks<
	GenericInput extends TheDate | SerializedTheDate,
	GenericWeek extends number
>(
	week: GenericWeek
): (input: GenericInput) => TheDate
```

## Paramètres

- `week` : Nombre de semaines à retirer.
- `input` : `TheDate` ou `SerializedTheDate`.

## Valeur de retour

Un `TheDate` reculé du nombre de semaines demandé.

## Voir aussi

- [`subtractDays`](/fr/v1/api/date/subtractDays)
- [`addWeeks`](/fr/v1/api/date/addWeeks)
