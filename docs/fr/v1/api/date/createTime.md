---
outline: [2, 3]
prev:
  text: "createOrThrow"
  link: "/fr/v1/api/date/createOrThrow"
next:
  text: "createTimeOrThrow"
  link: "/fr/v1/api/date/createTimeOrThrow"
---

# createTime

La fonction **`createTime()`** construit un `TheTime` à partir d'une valeur en millisecondes, d'un `SerializedTheTime` ou d'un objet de temps structuré. Elle accepte aussi une heure ISO via le champ `value`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/createTime/tryout.doc.ts"
  majorVersion="v1"
  height="502px"
/>

## Syntaxe

```typescript
function createTime(
	input: number & TimeConstraint,
	unit: Units
): TheTime

function createTime<
	GenericInput extends number | TheTime | SpoolingTime | SerializedTheTime
>(
	input: GenericInput
): MayBeTime
```

`TimeConstraint` garantit que l'appel strict `(number, unit)` n'accepte que des valeurs littérales et que celles-ci restent dans les bornes supportées par chaque unité.

:::info
Utilisez cette surcharge stricte pour des constantes connues à l'avance (tests, valeurs par défaut). Pour des valeurs dynamiques, préférez la signature qui renvoie un `MayBeTime`.
:::

## Paramètres

- `input`: Une valeur en millisecondes, un `TheTime`, un `SerializedTheTime` ou un objet `SpoolingTime` (week, day, hour, minute, second, millisecond, value).
- `unit`: Unité requise pour l'entrée numérique avec la surcharge stricte (`"millisecond"`, `"second"`, `"minute"`, `"hour"`, `"day"`, `"week"`).

## Valeur de retour

- `TheTime` quand la fonction est appelée avec `(number, unit)` ou avec un `TheTime` (retourné tel quel).
- `MayBeTime` (Either) quand la fonction est appelée avec un nombre ou un `SpoolingTime`.

## Voir aussi

- [`create`](/fr/v1/api/date/create) – Construit un `TheDate`.
- [`createTimeOrThrow`](/fr/v1/api/date/createTimeOrThrow) – Lance une exception au lieu de renvoyer un `MayBeTime`.
- [`toTimestamp`](/fr/v1/api/date/toTimestamp) – Extrait le timestamp d'un `TheDate`.
