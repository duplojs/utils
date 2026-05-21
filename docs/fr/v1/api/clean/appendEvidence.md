---
outline: [2, 3]
description: "appendEvidence ajoute un trait d'évidence à une valeur clean pour représenter qu'une étape métier est terminée."
prev:
  text: "Flag"
  link: "/fr/v1/api/clean/flag"
next:
  text: "Repository"
  link: "/fr/v1/api/clean/repository"
---

# appendEvidence

`appendEvidence` ajoute un trait d'évidence à une valeur clean.
C'est utile lorsqu'un flux métier doit marquer qu'une ou plusieurs étapes nommées ont été effectuées, sans changer la valeur métier elle-même.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/appendEvidence/tryout.doc.ts"
  majorVersion="v1"
  height="754px"
/>

## Syntaxe

### Classique

```typescript
function appendEvidence<Input extends C.AppendEvidenceInput, EvidenceName extends string>(
	input: Input,
	evidenceName: EvidenceName,
): Input & C.Evidence<EvidenceName>
```

### Currifiée

```typescript
function appendEvidence<EvidenceName extends string>(
	evidenceName: EvidenceName,
): <Input extends C.AppendEvidenceInput>(input: Input) => Input & C.Evidence<EvidenceName>
```

## Paramètres

- `input` : valeur clean à enrichir avec un trait d'évidence.
- `evidenceName` : nom de l'évidence à attacher.

## Valeur de retour

Retourne la même valeur d'entrée, enrichie avec un trait d'évidence supplémentaire dans son type.

## Voir aussi

- [`flag`](/fr/v1/api/clean/flag) - Ajoute un flag sur les entités via un handler dédié.
- [`useCase`](/fr/v1/api/clean/useCase) - Orchestre les flux métier où des évidences peuvent être attachées.
- [`chainedFunction`](/fr/v1/api/clean/chainedFunction) - Modélise des actions métier ordonnées dans un agrégat.
