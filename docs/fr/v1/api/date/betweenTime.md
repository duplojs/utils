---
outline: [2, 3]
prev:
  text: "lessThanTime"
  link: "/fr/v1/api/date/lessThanTime"
next:
  text: "betweenThanTime"
  link: "/fr/v1/api/date/betweenThanTime"
---

# betweenTime

Vérifie qu'un `TheTime` est dans un intervalle inclusif entre deux bornes (`greater` puis `less`).

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/betweenTime/tryout.doc.ts"
  majorVersion="v1"
  height="208px"
/>

## Syntaxe

### Signature classique

```typescript
function betweenTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	input: GenericInput,
	greater: TheTime | SerializedTheTime,
	less: TheTime | SerializedTheTime
): boolean
```

### Signature currifiée

```typescript
function betweenTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	greater: TheTime | SerializedTheTime,
	less: TheTime | SerializedTheTime
): (input: GenericInput) => boolean
```

## Paramètres

- `greater` : Borne inférieure (inclusive).
- `less` : Borne supérieure (inclusive).
- `input` : `TheTime` ou `SerializedTheTime`.

## Valeur de retour

`true` si l'entrée se situe dans l'intervalle [greater, less].

## Voir aussi

- [`betweenThanTime`](/fr/v1/api/date/betweenThanTime)
- [`greaterTime`](/fr/v1/api/date/greaterTime)
