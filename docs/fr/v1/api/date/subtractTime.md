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
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput,
	time: TheTime | SerializedTheTime
): TheDate

function subtractTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	input: GenericInput,
	time: TheTime | SerializedTheTime
): TheTime
```

### Signature currifiée

```typescript
function subtractTime<
	GenericInput extends TheDate | SerializedTheDate
>(
	time: TheTime | SerializedTheTime
): (input: GenericInput) => TheDate

function subtractTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	time: TheTime | SerializedTheTime
): (input: GenericInput) => TheTime
```

## Paramètres

- `time` : Durée à soustraire sous forme de `TheTime`.
- `input` : `TheDate`, `SerializedTheDate`, `TheTime` ou `SerializedTheTime` à ajuster.

## Valeur de retour

Un `TheDate` ou un `TheTime` avec la durée retirée.

## Voir aussi

- [`addTime`](/fr/v1/api/date/addTime)
- [`createTime`](/fr/v1/api/date/createTime)
