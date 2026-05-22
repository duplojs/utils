---
outline: [2, 3]
description: "Evidence représente une preuve de passage métier attachée au type d'une valeur clean ; appendEvidence permet d'ajouter cette marque."
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

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/evidence/tryout.doc.ts"
  majorVersion="v1"
  height="754px"
/>

## Syntaxe

`appendEvidence` est la fonction utilisée pour ajouter une evidence.

### Classique

```typescript
function appendEvidence<
	GenericInput extends C.AppendEvidenceInput, 
	GenericEvidenceName extends string
>(
	input: GenericInput,
	evidenceName: GenericEvidenceName,
): GenericInput & C.Evidence<GenericEvidenceName>
```

### Currifiée

```typescript
function appendEvidence<
	GenericInput extends C.AppendEvidenceInput
	EvidenceName extends string
>(
	evidenceName: GenericEvidenceName,
): (input: GenericInput) => GenericInput & C.Evidence<GenericEvidenceName>
```

## Paramètres

- `input` : valeur clean (primitive, `ConstrainedType`, `NewType` ou `Entity`) à enrichir avec une evidence.
- `evidenceName` : nom métier de l'evidence à attacher (ex. `"validated"`, `"authorized"`, `"loaded"`).

## Valeur de retour

Retourne la même valeur d'entrée, enrichie avec `C.Evidence<evidenceName>` dans son type.

Cette marque peut ensuite être requise par d'autres fonctions pour verrouiller l'ordre d'appel métier.

## Voir aussi

- [`flag`](/fr/v1/api/clean/flag) - Ajoute un flag sur les entités via un handler dédié.
- [`useCase`](/fr/v1/api/clean/useCase) - Orchestre les flux métier où des evidences peuvent être attachées.
- [`chainedFunction`](/fr/v1/api/clean/chainedFunction) - Modélise des actions métier ordonnées, souvent combinées avec des evidences de passage.
