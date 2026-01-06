---
outline: [2, 3]
prev:
  text: "createOrThrow"
  link: "/fr/v1/api/date/createOrThrow"
next:
  text: "now"
  link: "/fr/v1/api/date/now"
---

# createTime

La fonction **`createTime()`** construit un `TheTime` à partir d'une valeur en millisecondes ou d'un objet de temps structuré. Elle accepte aussi une heure ISO via le champ `value`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/createTime/tryout.doc.ts"
  majorVersion="v1"
  height="260px"
/>

## Syntaxe

```typescript
function createTime(
	input: number,
	unit?: keyof SpoolingTime
): TheTime

function createTime<
	GenericInput extends SpoolingTime
>(
	input: GenericInput
): TheTime
```

## Paramètres

- `input`: Une valeur en millisecondes ou un objet `SpoolingTime` (week, day, hour, minute, second, millisecond, value).
- `unit`: Unité optionnelle pour l'entrée numérique. Par défaut `"millisecond"`.

## Valeur de retour

Une chaîne `TheTime` représentant la durée calculée.

## Voir aussi

- [`create`](/fr/v1/api/date/create) – Construit un `TheDate`.
- [`toTimestamp`](/fr/v1/api/date/toTimestamp) – Extrait le timestamp d'un `TheDate`.
