---
outline: [2, 3]
prev:
  text: "isRight"
  link: "/fr/v1/api/either/isRight"
next:
  text: "isLeft"
  link: "/fr/v1/api/either/isLeft"
---

# whenIsRight

Applique une fonction uniquement quand l'entrée est un `EitherRight`. Sinon, la valeur originale est renvoyée telle quelle.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsRight/tryout.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Syntaxe

### Signature classique

```typescript
function whenIsRight<
	const GenericInput extends unknown, 
	const GenericOutput
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<GenericInput, EitherRight>>) => GenericOutput
): Exclude<GenericInput, EitherRight> | GenericOutput;
```

### Signature currifiée

```typescript
function whenIsRight<
	const GenericInput extends unknown, 
	const GenericOutput
>(
  theFunction: (value: Unwrap<Extract<GenericInput, EitherRight>>) => GenericOutput
): (input: GenericInput) => Exclude<GenericInput, EitherRight> | GenericOutput;
```

## Paramètres

- `theFunction` : Callback exécuté uniquement sur la partie `Right`.
- `input` *(surcharge 2)* : Valeur à traiter immédiatement (sinon la fonction retournée attend un `Either`).

## Valeur de retour

- Surcharge curry : retourne une fonction prête à être utilisée dans un pipeline.
- Surcharge directe : retourne soit le résultat du callback (si `Right`), soit la valeur initiale.

## Cas d'usage

- Enrichir un `Right` (logging, transformation) sans toucher aux `Left`.
- Injecter `whenIsRight` dans `pipe` pour garder un flux fluide.
- Remplacer des `if (E.isRight(...))` répétitifs par une API fonctionnelle.

## Voir aussi

- [`isRight`](/fr/v1/api/either/isRight) – Teste manuellement le type avant d'agir.
- [`whenIsLeft`](/fr/v1/api/either/whenIsLeft) – Pendant côté erreur.
- [`whenHasInformation`](/fr/v1/api/either/whenHasInformation) – Pattern matching basé sur l'information littérale.
