---
outline: [2, 3]
description: "Pattern matching fonctionnel basé sur l'information littérale d'un Either. La fonction n'est exécutée que lorsque l'information (ou l'une des informations) correspond."
prev:
  text: "hasInformation"
  link: "/fr/v1/api/either/hasInformation"
next:
  text: "safeCallback"
  link: "/fr/v1/api/either/safeCallback"
---

# whenHasInformation

Pattern matching fonctionnel basé sur l'information littérale d'un `Either`. La fonction n'est exécutée que lorsque l'information (ou l'une des informations) correspond.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/whenHasInformation/tryout.doc.ts"
  majorVersion="v1"
  height="733px"
/>

## Syntaxe

### Signature classique

```typescript
function whenHasInformation<
  const GenericInput extends unknown,
  GenericInformation extends ReturnType<typeof eitherInformationKind.getValue<GenericInput>>,
  const GenericOutput extends AnyValue
>(
  input: GenericInput,
  information: GenericInformation | GenericInformation[],
  theFunction: (value: Unwrap<Extract<GenericInput, Kind<typeof eitherInformationKind.definition, GenericInformation> & WrappedValue>>) => GenericOutput
): GenericOutput | Exclude<GenericInput, Kind<typeof eitherInformationKind.definition, GenericInformation>>;
```

### Signature currifiée

```typescript
function whenHasInformation<
  const GenericInput extends unknown,
  GenericInformation extends ReturnType<typeof eitherInformationKind.getValue<GenericInput>>,
  const GenericOutput extends AnyValue
>(
  information: GenericInformation | GenericInformation[],
  theFunction: (value: Unwrap<Extract<GenericInput, Kind<typeof eitherInformationKind.definition, GenericInformation> & WrappedValue>>) => GenericOutput
): (input: GenericInput) => GenericOutput | Exclude<GenericInput, Kind<typeof eitherInformationKind.definition, GenericInformation>>;
```

## Paramètres

- `information` : Littéral ou tableau de littéraux acceptés.
- `theFunction` : Callback invoqué uniquement lorsque l'information correspond.
- `input` : Valeur à traiter immédiatement (sinon utilisez la version currifiée dans vos pipes).

## Valeur de retour

- Signature classique : retourne soit le résultat du callback, soit la valeur initiale (si aucune info ne correspond).
- Signature currifiée : retourne une fonction prête à composer.

## Cas d'usage

- Écrire du pattern matching exhaustif sans `switch` ni `if` imbriqués.
- Factoriser les traitements communs à plusieurs succès/erreurs (`information` accepte un tableau).
- Réagir finement à des états métier décrits via `E.right`/`E.left`.

## Voir aussi

- [`hasInformation`](/fr/v1/api/either/hasInformation) – Type guard bas niveau.
- [`whenIsRight`](/fr/v1/api/either/whenIsRight) / [`whenIsLeft`](/fr/v1/api/either/whenIsLeft) – Pour opérer uniquement selon le côté.
