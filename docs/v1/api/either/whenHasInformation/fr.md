---
outline: [2, 3]
prev:
  text: "hasInformation"
  link: "/v1/api/either/hasInformation/fr"
next:
  text: "bool"
  link: "/v1/api/either/bool/fr"
---

# whenHasInformation

Pattern matching fonctionnel basé sur l'information littérale d'un `Either`. La fonction n'est exécutée que lorsque l'information (ou l'une des informations) correspond.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/whenHasInformation/examples/tryout.doc.ts"
  majorVersion="v1"
  height="700px"
/>

## Syntaxe

### Signature classique

```ts
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

```ts
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

- [`hasInformation`](/v1/api/either/hasInformation/fr) – Type guard bas niveau.
- [`whenIsRight`](/v1/api/either/whenIsRight/fr) / [`whenIsLeft`](/v1/api/either/whenIsLeft/fr) – Pour opérer uniquement selon le côté.
