---
outline: [2, 3]
description: "Variante exclusive de between : vérifie qu'un TheDate se trouve entre deux bornes en excluant les extrêmes."
prev:
  text: "between"
  link: "/fr/v1/api/date/between"
next:
  text: "greaterTime"
  link: "/fr/v1/api/date/greaterTime"
---

# betweenThan

Variante exclusive de [`between`](/fr/v1/api/date/between) : vérifie qu'un `TheDate` se trouve entre deux bornes en excluant les extrêmes.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/betweenThan/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

### Signature classique

```typescript
function betweenThan<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput,
	greater: TheDate | SerializedTheDate,
	less: TheDate | SerializedTheDate
): boolean
```

### Signature currifiée

```typescript
function betweenThan<
	GenericInput extends TheDate | SerializedTheDate
>(
	greater: TheDate | SerializedTheDate,
	less: TheDate | SerializedTheDate
): (input: GenericInput) => boolean
```

## Paramètres

- `greater` : Borne inférieure (exclusive).
- `less` : Borne supérieure (exclusive).
- `input` : `TheDate` ou `SerializedTheDate`.

## Valeur de retour

`true` si la date se situe dans l'intervalle `(greater, less)`.

## Voir aussi

- [`between`](/fr/v1/api/date/between)
- [`greaterThan`](/fr/v1/api/date/greaterThan)
