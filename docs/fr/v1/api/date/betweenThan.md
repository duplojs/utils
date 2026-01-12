---
outline: [2, 3]
description: "Variante inclusive de between : vérifie qu'un TheDate se trouve entre deux bornes en incluant les extrêmes."
prev:
  text: "between"
  link: "/fr/v1/api/date/between"
next:
  text: "greaterTime"
  link: "/fr/v1/api/date/greaterTime"
---

# betweenThan

Variante inclusive de [`between`](/fr/v1/api/date/between) : vérifie qu'un `TheDate` se trouve entre deux bornes en incluant les extrêmes.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/betweenThan/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

### Signature classique

```typescript
function betweenThan<
	GenericInput extends TheDate
>(
	input: GenericInput,
	greater: TheDate,
	less: TheDate
): boolean
```

### Signature currifiée

```typescript
function betweenThan<
	GenericInput extends TheDate
>(
	greater: TheDate,
	less: TheDate
): (input: GenericInput) => boolean
```

## Paramètres

- `greater` : Borne inférieure (inclusive).
- `less` : Borne supérieure (inclusive).
- `input` : Date testée.

## Valeur de retour

`true` si la date se situe dans l'intervalle `[greater, less]`.

## Voir aussi

- [`between`](/fr/v1/api/date/between)
- [`greaterThan`](/fr/v1/api/date/greaterThan)
