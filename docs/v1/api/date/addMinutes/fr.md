---
outline: [2, 3]
prev:
  text: "addHours"
  link: "/v1/api/date/addHours/fr"
next:
  text: "addSeconds"
  link: "/v1/api/date/addSeconds/fr"
---

# addMinutes

Ajoute un nombre positif de minutes à un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/addMinutes/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function addMinutes<GenericInput extends TheDate, GenericMinute extends number>(
	input: GenericInput,
	minute: PositiveNumber<GenericMinute>
): TheDate
```

### Signature currifiée

```typescript
function addMinutes<GenericInput extends TheDate, GenericMinute extends number>(
	minute: PositiveNumber<GenericMinute>
): (input: GenericInput) => TheDate
```

## Paramètres

- `minute` : Nombre de minutes strictement positif.
- `input` : `TheDate` à modifier.

## Valeur de retour

Un `TheDate` avancé du nombre de minutes demandé.

## Voir aussi

- [`addHours`](/v1/api/date/addHours/fr)
- [`addSeconds`](/v1/api/date/addSeconds/fr)
