---
outline: [2, 3]
prev:
  text: "addMilliseconds"
  link: "/fr/v1/api/date/addMilliseconds"
next:
  text: "subtractYears"
  link: "/fr/v1/api/date/subtractYears"
---

# addTime

La fonction **`addTime()`** ajoute une durée `TheTime` à un `TheDate` ou à un autre `TheTime`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/addTime/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

### Signature classique

```typescript
function addTime<
	GenericInput extends TheDate | SerializedTheDate
>(
	input: GenericInput,
	time: TheTime | SerializedTheTime
): TheDate

function addTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	input: GenericInput,
	time: TheTime | SerializedTheTime
): TheTime
```

### Signature currifiée

```typescript
function addTime<
	GenericInput extends TheDate | SerializedTheDate
>(
	time: TheTime | SerializedTheTime
): (input: GenericInput) => TheDate

function addTime<
	GenericInput extends TheTime | SerializedTheTime
>(
	time: TheTime | SerializedTheTime
): (input: GenericInput) => TheTime
```

## Paramètres

- `time` : Durée à ajouter sous forme de `TheTime`.
- `input` : `TheDate`, `SerializedTheDate`, `TheTime` ou `SerializedTheTime` à ajuster.

## Valeur de retour

Un `TheDate` ou un `TheTime` avec la durée ajoutée.

## Voir aussi

- [`createTime`](/fr/v1/api/date/createTime)
- [`subtractTime`](/fr/v1/api/date/subtractTime)
