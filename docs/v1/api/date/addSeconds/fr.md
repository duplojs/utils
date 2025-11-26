---
outline: [2, 3]
prev:
  text: "addMinutes"
  link: "/v1/api/date/addMinutes/fr"
next:
  text: "addMilliseconds"
  link: "/v1/api/date/addMilliseconds/fr"
---

# addSeconds

Ajoute un nombre positif de secondes à un `TheDate`.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/addSeconds/examples/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function addSeconds<GenericInput extends TheDate, GenericSecond extends number>(
	input: GenericInput,
	second: PositiveNumber<GenericSecond>
): TheDate
```

### Signature currifiée

```typescript
function addSeconds<GenericInput extends TheDate, GenericSecond extends number>(
	second: PositiveNumber<GenericSecond>
): (input: GenericInput) => TheDate
```

## Paramètres

- `second` : Nombre de secondes strictement positif.
- `input` : `TheDate` à ajuster.

## Valeur de retour

Un `TheDate` avancé du nombre de secondes demandé.

## Voir aussi

- [`addMinutes`](/v1/api/date/addMinutes/fr)
- [`addMilliseconds`](/v1/api/date/addMilliseconds/fr)
