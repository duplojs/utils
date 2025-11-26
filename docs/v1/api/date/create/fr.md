---
outline: [2, 3]
prev:
  text: "Date"
  link: "/v1/api/date/fr"
next:
  text: "createOrThrow"
  link: "/v1/api/date/createOrThrow/fr"
---

# create

La fonction **`create()`** construit un `TheDate` à partir d'un `Date`, d'un timestamp ou d'une partition littérale (`YYYY-MM-DD`). Elle renvoie un `Either` (`MayBe`) qui contient soit la date valide, soit une erreur typée.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/date/create/examples/tryout.doc.ts"
  majorVersion="v1"
  height="360px"
/>

## Syntaxe

```typescript
function create<
	GenericInput extends TheDate | Date | number
>(
	input: GenericInput
): MayBe

function create<
	GenericInput extends `${"-" | ""}${number}-${MonthWithDay}`
>(
	input: GenericInput & LeapYearConstraint,
	params?: { hour?: Hour; minute?: Minute; second?: Second; millisecond?: Millisecond }
): TheDate
```

`LeapYearConstraint` garantit qu'un 29 février n'est accepté que si l'année est bissextile.

## Paramètres

- `input` : Date d'origine (`TheDate`, `Date`, timestamp ou chaîne). Les chaînes respectent le format `YYYY-MM-DD` (préfixe négatif accepté pour les années BC).
- `params` : Optionnel. Permet de fournir directement les composantes horaires (`hour`, `minute`, `second`, `millisecond`).

## Valeur de retour

- Dans la signature générique : `EitherRight<"date-created", TheDate>` en cas de succès ou `EitherLeft<"date-created-error", null>` en cas d'échec.
- Dans la signature littérale : retourne directement un `TheDate` si la date est valide, sinon une erreur de type compile-time.

## Voir aussi

- [`createOrThrow`](/v1/api/date/createOrThrow/fr) – Version qui lève une exception au lieu d'un `Either`.
- [`isSafeTimestamp`](/v1/api/date/isSafeTimestamp/fr) – Vérifie qu'un timestamp est exploitable.

## Sources

- [MDN Web Docs - Date](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date)
