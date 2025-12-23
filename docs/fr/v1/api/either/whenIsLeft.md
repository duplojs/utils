---
outline: [2, 3]
prev:
  text: "isLeft"
  link: "/fr/v1/api/either/isLeft"
next:
  text: "rightPipe"
  link: "/fr/v1/api/either/rightPipe"
---

# whenIsLeft

Exécute une fonction uniquement lorsque l'entrée est un `EitherLeft`. Sinon, la valeur d'origine est renvoyée telle quelle.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsLeft/tryout.doc.ts"
  majorVersion="v1"
  height="340px"
/>

## Syntaxe

### Signature classique

```typescript
function whenIsLeft<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<GenericInput, EitherLeft>>) => GenericOutput
): Exclude<GenericInput, EitherLeft> | GenericOutput;
```

### Signature currifiée

```typescript
function whenIsLeft<
  const GenericInput extends unknown,
  const GenericOutput extends AnyValue | EscapeVoid
>(
  theFunction: (value: Unwrap<Extract<GenericInput, EitherLeft>>) => GenericOutput
): (input: GenericInput) => Exclude<GenericInput, EitherLeft> | GenericOutput;
```

## Paramètres

- `theFunction` : Callback déclenché uniquement sur la partie `Left`.
- `input` *(surcharge classique)* : Valeur à traiter immédiatement. Sans cet argument, la fonction retourne une version curry adaptée aux pipelines.

## Valeur de retour

- Signature classique : retourne soit la valeur transformée (si `Left`), soit la valeur initiale.
- Signature currifiée : retourne une fonction prête à être utilisée dans `pipe`, `map`, etc.

## Cas d'usage

- Logger ou transformer une erreur sans toucher au `Right`.
- Convertir un `Left` en un autre type (ex. `EitherLeft` -> `string`).
- Simplifier des blocs `if (E.isLeft(...))` répétitifs dans un style fonctionnel.

## Voir aussi

- [`whenIsRight`](/fr/v1/api/either/whenIsRight) – Pendant côté succès.
- [`isLeft`](/fr/v1/api/either/isLeft) – Type guard manuel.
- [`whenHasInformation`](/fr/v1/api/either/whenHasInformation) – Pattern matching sur l'information littérale.
