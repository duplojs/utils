---
outline: [2, 3]
description: "La fonction create() construit un TheDate à partir d'un Date, d'un timestamp ou d'une partition littérale (YYYY-MM-DD). Elle renvoie un Either (MayBe) qui contient soit la date valide, soit une erreur typée."
prev:
  text: "Date"
  link: "/fr/v1/api/date/"
next:
  text: "createOrThrow"
  link: "/fr/v1/api/date/createOrThrow"
---

# create

La fonction **`create()`** construit un `TheDate` à partir d'un `Date`, d'un timestamp ou d'une partition littérale (`YYYY-MM-DD`). Elle peut aussi assembler un `SpoolingDate` (source + overrides + timezone). Elle renvoie un `Either` (`MayBe`) qui contient soit la date valide, soit une erreur typée.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/date/create/tryout.doc.ts"
  majorVersion="v1"
  height="740px"
/>

## Syntaxe

```typescript
function create<
	GenericInput extends TheDate | Date | number
>(
	input: GenericInput
): MayBe

function create<
	GenericInput extends SpoolingDate
>(
	input: GenericInput
): MayBe

function create<
	GenericInput extends `${number}-${MonthWithDay}`
>(
	input: GenericInput & YearConstraint,
	params?: { hour?: Hour; minute?: Minute; second?: Second; millisecond?: Millisecond }
): TheDate
```

`YearConstraint` garantit qu'un 29 février n'est accepté que si l'année est bissextile et également que l'année définie respecte les limites supportées.

:::info
La seconde déclaration sert uniquement à déclarer des dates constantes connues à l'avance. Très utile pour des tests unitaires ou des valeurs par défaut.
:::

## Paramètres

- `input` : Date d'origine. Accepte un `TheDate`, un `Date`, un timestamp, une chaîne `YYYY-MM-DD` (préfixe négatif accepté pour les années BC) ou un `SpoolingDate` (`value` en `Date`/timestamp/`TheDate`/ISO `YYYY-MM-DD` optionnellement horodaté) avec des overrides (`year`, `month`, `day`, `hour`, `minute`, `second`, `millisecond`) et une `timezone` si nécessaire.
- `params` : Optionnel. Permet de fournir directement les composantes horaires (`hour`, `minute`, `second`, `millisecond`).

## Valeur de retour

- Dans la signature générique : `EitherRight<"date-created", TheDate>` en cas de succès ou `EitherLeft<"date-created-error", null>` en cas d'échec.
- Dans la signature littérale : retourne directement un `TheDate` si la date est valide, sinon une erreur de type compile-time.
- Avec `SpoolingDate` : retourne un `MayBe` après application éventuelle de la timezone et des overrides.

## Formats supportés

- `Date` natif
- Timestamp (`number`)
- `TheDate` (`date{timestamp}{+|-}`)
- Chaîne `YYYY-MM-DD` (optionnellement horodatée en ISO pour `SpoolingDate`)
- `SpoolingDate` avec `timezone` et overrides sur les composantes de date/heure

## Voir aussi

- [`createOrThrow`](/fr/v1/api/date/createOrThrow) – Version qui lève une exception au lieu d'un `Either`.
- [`isSafeTimestamp`](/fr/v1/api/date/isSafeTimestamp) – Vérifie qu'un timestamp est exploitable.

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
