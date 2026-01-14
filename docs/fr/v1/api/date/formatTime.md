---
outline: [2, 3]
description: "La fonction formatTime() formate un TheTime via une chaîne de format personnalisée."
prev:
  text: "format"
  link: "/fr/v1/api/date/format"
next:
  text: "isSafeTimestamp"
  link: "/fr/v1/api/date/isSafeTimestamp"
---

# formatTime

La fonction **`formatTime()`** formate un `TheTime` via une chaîne de format personnalisée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/formatTime/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

### Signature Currifiée

```typescript
function formatTime<
	GenericInput extends TheTime,
	GenericFormat extends string
>(
	formatString: GenericFormat
): (input: GenericInput) => string
```

### Signature classique

```typescript
function formatTime<
	GenericInput extends TheTime,
	GenericFormat extends string
>(
	input: GenericInput,
	formatString: GenericFormat
): string
```

## Paramètres

- `input` : Valeur `TheTime` (uniquement en signature classique).
- `formatString` : Chaîne de format.

## Valeur de retour

Chaîne formatée selon les tokens fournis.

## Tokens disponibles

- `WW` : semaines sur 2 chiffres
- `DD` : jours sur 2 chiffres
- `HH` : heures sur 2 chiffres
- `mm` : minutes sur 2 chiffres
- `ss` : secondes sur 2 chiffres
- `SSS` : millisecondes sur 3 chiffres

## Voir aussi

- [`format`](/fr/v1/api/date/format)
- [`toTimeValue`](/fr/v1/api/date/toTimeValue)
