---
outline: [2, 3]
description: "Evidence représente une preuve de passage métier attachée au type d'une valeur clean ; appendEvidence ajoute cette marque et hasEvidence la vérifie."
prev:
  text: "Flag"
  link: "/fr/v1/api/clean/flag"
next:
  text: "Repository"
  link: "/fr/v1/api/clean/repository"
---

# Evidence

Une `Evidence` est une marque de passage métier attachée au type d'une valeur clean.
Elle sert à prouver qu'une étape précise du flux a déjà été exécutée, sans modifier la valeur métier elle-même.

Concrètement, une fonction peut retourner une entité enrichie avec une evidence, et une fonction suivante peut exiger cette même evidence dans son type d'entrée. Cela garantit, à la compilation, que la première étape a bien été appelée avant la seconde.

`appendEvidence` ajoute une evidence. `hasEvidence` vérifie qu'une evidence est présente et agit comme predicate pour affiner le type.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/evidence/tryout.doc.ts"
  majorVersion="v1"
  height="1006px"
/>

## Syntaxe

### `appendEvidence`

`appendEvidence` est la fonction utilisée pour ajouter une evidence.

#### Classique

```typescript
function appendEvidence<
	GenericInput extends C.AppendEvidenceInput, 
	GenericEvidenceName extends string
>(
	input: GenericInput,
	evidenceName: GenericEvidenceName,
): GenericInput & C.Evidence<GenericEvidenceName>
```

#### Currifiée

```typescript
function appendEvidence<
	GenericInput extends C.AppendEvidenceInput
	EvidenceName extends string
>(
	evidenceName: GenericEvidenceName,
): (input: GenericInput) => GenericInput & C.Evidence<GenericEvidenceName>
```

### `hasEvidence`

`hasEvidence` vérifie la présence d'une evidence et affine le type de l'entrée quand le predicate réussit.

#### Classique

```typescript
function hasEvidence<
	GenericInput,
	GenericEvidenceName
>(
	input: GenericInput,
	evidenceName: GenericEvidenceName | readonly [GenericEvidenceName, ...GenericEvidenceName[]],
): input is Extract<GenericInput, C.Evidence<GenericEvidenceName>>
```

#### Currifiée

```typescript
function hasEvidence<
	GenericInput,
	GenericEvidenceName
>(
	evidenceName: GenericEvidenceName | readonly [GenericEvidenceName, ...GenericEvidenceName[]],
): (input: GenericInput) => input is Extract<GenericInput, C.Evidence<GenericEvidenceName>>
```

## Paramètres

- `input` : valeur clean (primitive, `ConstrainedType`, `NewType` ou `Entity`) à enrichir avec une evidence.
- `evidenceName` : nom métier de l'evidence à attacher ou vérifier (ex. `"validated"`, `"authorized"`, `"loaded"`). Pour `hasEvidence`, il peut aussi s'agir d'un tuple de noms.

## Valeur de retour

`appendEvidence` retourne la même valeur d'entrée, enrichie avec `C.Evidence<evidenceName>` dans son type.

`hasEvidence` retourne un booléen typé comme predicate. Si le résultat est positif, l'entrée est affinée vers la branche qui porte l'evidence demandée.

Cette marque peut ensuite être requise par d'autres fonctions pour verrouiller l'ordre d'appel métier.

## Voir aussi

- [`flag`](/fr/v1/api/clean/flag) - Ajoute un flag sur les entités via un handler dédié.
- [`useCase`](/fr/v1/api/clean/useCase) - Orchestre les flux métier où des evidences peuvent être attachées.
- [`chainedFunction`](/fr/v1/api/clean/chainedFunction) - Modélise des actions métier ordonnées, souvent combinées avec des evidences de passage.
