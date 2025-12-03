---
outline: [2, 3]
prev:
  text: "isRight"
  link: "/v1/api/either/isRight/fr"
next:
  text: "isLeft"
  link: "/v1/api/either/isLeft/fr"
---

# whenIsRight

Applique une fonction uniquement quand l'entrée est un `EitherRight`. Sinon, la valeur originale est renvoyée telle quelle.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/either/whenIsRight/examples/tryout.doc.ts"
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

- [`isRight`](/v1/api/either/isRight/fr) – Teste manuellement le type avant d'agir.
- [`whenIsLeft`](/v1/api/either/whenIsLeft/fr) – Pendant côté erreur.
- [`whenHasInformation`](/v1/api/either/whenHasInformation/fr) – Pattern matching basé sur l'information littérale.
