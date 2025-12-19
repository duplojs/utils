---
outline: [2, 3]
prev:
  text: "addHours"
  link: "/fr/v1/api/date/addHours"
next:
  text: "addSeconds"
  link: "/fr/v1/api/date/addSeconds"
---

# addMinutes

Ajoute un nombre positif de minutes à un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/addMinutes/tryout.doc.ts"
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

- [`addHours`](/fr/v1/api/date/addHours)
- [`addSeconds`](/fr/v1/api/date/addSeconds)
