---
outline: [2, 3]
description: "Vérifie qu'un TheDate est dans un intervalle inclusif entre deux bornes (greater puis less)."
prev:
  text: "lessThan"
  link: "/fr/v1/api/date/lessThan"
next:
  text: "betweenThan"
  link: "/fr/v1/api/date/betweenThan"
---

# between

Vérifie qu'un `TheDate` est dans un intervalle inclusif entre deux bornes (`greater` puis `less`).

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
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput,
	greater: TheDate | SerializedTheDate,
	less: TheDate | SerializedTheDate
): boolean
```

### Signature currifiée

```typescript
function between<
	GenericInput extends TheDate | SerializedTheDate
>(
	greater: TheDate | SerializedTheDate,
	less: TheDate | SerializedTheDate
): (input: GenericInput) => boolean
```

## Paramètres

- `greater` : Borne inférieure (inclusive).
- `less` : Borne supérieure (inclusive).
- `input` : `TheDate` ou `SerializedTheDate`.

## Valeur de retour

`true` si l'entrée se situe dans l'intervalle [greater, less].

## Voir aussi

- [`betweenThan`](/fr/v1/api/date/betweenThan)
- [`greater`](/fr/v1/api/date/greater)
