---
outline: [2, 3]
description: "Vérifie qu'un TheDate est strictement compris entre deux bornes (greater puis less)."
prev:
  text: "lessThan"
  link: "/fr/v1/api/date/lessThan"
next:
  text: "betweenThan"
  link: "/fr/v1/api/date/betweenThan"
---

# between

Vérifie qu'un `TheDate` est strictement compris entre deux bornes (`greater` puis `less`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/between/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

### Signature classique

```typescript
function between<
	GenericInput extends TheDate
>(
	input: GenericInput,
	greater: TheDate,
	less: TheDate
): boolean
```

### Signature currifiée

```typescript
function between<
	GenericInput extends TheDate
>(
	greater: TheDate,
	less: TheDate
): (input: GenericInput) => boolean
```

## Paramètres

- `greater` : Borne inférieure (exclusive).
- `less` : Borne supérieure (exclusive).
- `input` : Date à tester.

## Valeur de retour

`true` si l'entrée se situe strictement entre les deux bornes.

## Voir aussi

- [`betweenThan`](/fr/v1/api/date/betweenThan)
- [`greater`](/fr/v1/api/date/greater)
