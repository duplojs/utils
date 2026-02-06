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

Variante exclusive de [`betweenTime`](/fr/v1/api/date/betweenTime) : vérifie qu'un `TheTime` se trouve entre deux bornes en excluant les extrêmes.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/betweenThanTime/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

### Signature classique

```typescript
function betweenThanTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	input: GenericInput,
	greater: TheTime | SerializedTheTime,
	less: TheTime | SerializedTheTime
): boolean
```

### Signature currifiée

```typescript
function betweenThanTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	greater: TheTime | SerializedTheTime,
	less: TheTime | SerializedTheTime
): (input: GenericInput) => boolean
```

## Paramètres

- `greater` : Borne inférieure (exclusive).
- `less` : Borne supérieure (exclusive).
- `input` : `TheTime` ou `SerializedTheTime`.

## Valeur de retour

`true` si la durée se situe dans l'intervalle `(greater, less)`.

## Voir aussi

- [`betweenTime`](/fr/v1/api/date/betweenTime)
- [`greaterThanTime`](/fr/v1/api/date/greaterThanTime)
