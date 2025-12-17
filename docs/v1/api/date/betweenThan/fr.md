---
outline: [2, 3]
prev:
  text: "between"
  link: "/v1/api/date/between/fr"
next:
  text: "sort"
  link: "/v1/api/date/sort/fr"
---

# betweenThan

Variante inclusive de [`between`](/v1/api/date/between/fr) : vérifie qu'un `TheDate` se trouve entre deux bornes en incluant les extrêmes.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/betweenThan/examples/tryout.doc.ts"
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

- [`between`](/v1/api/date/between/fr)
- [`greaterThan`](/v1/api/date/greaterThan/fr)
