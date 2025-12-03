---
outline: [2, 3]
prev:
  text: "rightAsyncPipe"
  link: "/v1/api/either/rightAsyncPipe/fr"
next:
  text: "whenHasInformation"
  link: "/v1/api/either/whenHasInformation/fr"
---

# hasInformation

Type guard basé sur l'information littérale stockée dans l'Either. Permet de cibler précisément un cas métier sans introspection supplémentaire.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/hasInformation/examples/tryout.doc.ts"
  majorVersion="v1"
  height="500px"
/>

## Syntaxe
lo
```typescript
function hasInformation<
  const GenericInput extends unknown,
  GenericInformation extends ReturnType<typeof eitherInformationKind.getValue<GenericInput>>
>(
  input: GenericInput,
  information: GenericInformation
): input is Extract<GenericInput, Kind<typeof eitherInformationKind.definition, GenericInformation>>;

function hasInformation<
  const GenericInput extends unknown,
  GenericInformation extends ReturnType<typeof eitherInformationKind.getValue<GenericInput>>
>(
  information: GenericInformation
): (input: GenericInput) => input is Extract<GenericInput, Kind<typeof eitherInformationKind.definition, GenericInformation>>;
```

## Paramètres

- `information` : String littérale attendue (`"user.created"`, `"user.invalid"`, etc.).
- `input` *(optionnel dans la signature curry)* : Valeur sur laquelle effectuer le contrôle.

## Valeur de retour

Un booléen, mais surtout un type guard : lorsque le résultat est `true`, TypeScript sait que l'Either porte l'information demandée (côté `Right` ou `Left`).

## Cas d'usage

- Différencier plusieurs erreurs/succès dans un même `Either`.
- Simplifier des switch/case en s'appuyant sur les littéraux.
- Chaîner avec `E.whenHasInformation` pour déclencher une action ciblée.

## Voir aussi

- [`whenHasInformation`](/v1/api/either/whenHasInformation/fr) – Variante avec callback.
- [`right`](/v1/api/either/right/fr) / [`left`](/v1/api/either/left/fr) – Constructeurs qui imposent cette information littérale.
