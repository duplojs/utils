---
outline: [2, 3]
prev:
  text: "betweenTime"
  link: "/fr/v1/api/date/betweenTime"
next:
  text: "sort"
  link: "/fr/v1/api/date/sort"
---

# betweenThanTime

Variante inclusive de [`betweenTime`](/fr/v1/api/date/betweenTime) : vérifie qu'un `TheTime` se trouve entre deux bornes en incluant les extrêmes.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/betweenThanTime/tryout.doc.ts"
  majorVersion="v1"
  height="320px"
/>

## Syntaxe

### Signature classique

```typescript
function betweenThanTime<
	GenericInput extends TheTime
>(
	input: GenericInput,
	greater: TheTime,
	less: TheTime
): boolean
```

### Signature currifiée

```typescript
function betweenThanTime<
	GenericInput extends TheTime
>(
	greater: TheTime,
	less: TheTime
): (input: GenericInput) => boolean
```

## Paramètres

- `greater` : Borne inférieure (inclusive).
- `less` : Borne supérieure (inclusive).
- `input` : Durée testée.

## Valeur de retour

`true` si la durée se situe dans l'intervalle `[greater, less]`.

## Voir aussi

- [`betweenTime`](/fr/v1/api/date/betweenTime)
- [`greaterThanTime`](/fr/v1/api/date/greaterThanTime)
