---
outline: [2, 3]
prev:
  text: "subtractHours"
  link: "/v1/api/date/subtractHours/fr"
next:
  text: "subtractSeconds"
  link: "/v1/api/date/subtractSeconds/fr"
---

# subtractMinutes

Soustrait un nombre positif de minutes d'un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/subtractMinutes/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function subtractMinutes<
	GenericInput extends TheDate, 
	GenericMinute extends number
>(
	input: GenericInput,
	minute: PositiveNumber<GenericMinute>
): TheDate
```

### Signature currifiée

```typescript
function subtractMinutes<
	GenericInput extends TheDate, 
	GenericMinute extends number
>(
	minute: PositiveNumber<GenericMinute>
): (input: GenericInput) => TheDate
```

## Paramètres

- `minute` : Minutes à retirer.
- `input` : Date cible.

## Valeur de retour

Un `TheDate` reculé du nombre de minutes demandé.

## Voir aussi

- [`subtractSeconds`](/v1/api/date/subtractSeconds/fr)
- [`addMinutes`](/v1/api/date/addMinutes/fr)
