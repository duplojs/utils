---
outline: [2, 3]
prev:
  text: "subtractMilliseconds"
  link: "/fr/v1/api/date/subtractMilliseconds"
next:
  text: "greater"
  link: "/fr/v1/api/date/greater"
---

# subtractTime

La fonction **`subtractTime()`** soustrait une durée `TheTime` à un `TheDate` ou à un autre `TheTime`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/subtractTime/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

### Signature classique

```typescript
function subtractTime<
	GenericInput extends TheDate
>(
	input: GenericInput,
	time: TheTime
): TheDate

function subtractTime<
	GenericInput extends TheTime
>(
	input: GenericInput,
	time: TheTime
): TheTime
```

### Signature currifiée

```typescript
function subtractTime<
	GenericInput extends TheDate
>(
	time: TheTime
): (input: GenericInput) => TheDate

function subtractTime<
	GenericInput extends TheTime
>(
	time: TheTime
): (input: GenericInput) => TheTime
```

## Paramètres

- `time` : Durée à soustraire sous forme de `TheTime`.
- `input` : `TheDate` ou `TheTime` à ajuster.

## Valeur de retour

Un `TheDate` ou un `TheTime` avec la durée retirée.

## Voir aussi

- [`addTime`](/fr/v1/api/date/addTime)
- [`createTime`](/fr/v1/api/date/createTime)
