---
outline: [2, 3]
description: "Evidence représente une preuve de passage métier attachée au type d'une valeur objet ; appendEvidence ajoute cette marque, hasEvidence la vérifie, evidenceResult crée un Result prouvé et GetEvidenceResult récupère le résultat associé."
prev:
  text: "Flag"
  link: "/fr/v1/api/clean/flag"
next:
  text: "Repository"
  link: "/fr/v1/api/clean/repository"
---

# Evidence

Une `Evidence` est une marque de passage métier attachée au type d'une valeur objet.
Elle sert à prouver qu'une étape précise du flux a déjà été exécutée, sans modifier la valeur métier elle-même.

Concrètement, une fonction peut retourner une valeur clean, une entité ou un objet résultat composé enrichi avec une evidence, et une fonction suivante peut exiger cette même evidence dans son type d'entrée. Cela garantit, à la compilation, que la première étape a bien été appelée avant la seconde.

`appendEvidence` ajoute une evidence. `hasEvidence` vérifie qu'une evidence est présente et agit comme predicate pour affiner le type.
`evidenceResult` crée un `Either.Result` tout en ajoutant l'evidence correspondante à la valeur de succès.
`GetEvidenceResult` récupère le résultat d'une fonction qui porte une evidence donnée, même si ce résultat est enveloppé dans une promesse ou dans un `Either`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/evidence/tryout.doc.ts"
  majorVersion="v1"
  height="1363px"
/>

## Syntaxe

### `appendEvidence`

`appendEvidence` est la fonction utilisée pour ajouter une evidence.

#### Classique

```typescript
function appendEvidence<
	GenericInput extends object,
	GenericEvidenceName extends string
>(
	input: GenericInput,
	evidenceName: GenericEvidenceName,
): GenericInput & C.Evidence<GenericEvidenceName>
```

#### Currifiée

```typescript
function appendEvidence<
	GenericInput extends object,
	GenericEvidenceName extends string
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

### `evidenceResult`

`evidenceResult` crée un `Either.Result` avec l'information fournie et ajoute cette même information comme evidence sur la valeur enveloppée.

```typescript
function evidenceResult<
	GenericInformation extends string,
	GenericValue extends object
>(
	information: GenericInformation,
	value: GenericValue,
): C.EvidenceResult<GenericInformation, GenericValue>
```

<MonacoTSEditor
  src="/examples/v1/api/clean/evidence/evidenceResult.doc.ts"
  majorVersion="v1"
  height="628px"
/>

### `GetEvidenceResult`

`GetEvidenceResult` est un type utilitaire qui récupère, depuis le retour d'une fonction, la branche de résultat associée à une evidence.

Il traverse automatiquement les promesses avec `Awaited` et lit la valeur portée par un `Either.Left` ou un `Either.Right`. Cela permet de typer le paramètre d'une fonction à partir du résultat prouvé d'une autre, sans recopier manuellement le type final.

<MonacoTSEditor
  src="/examples/v1/api/clean/evidence/getEvidenceResult.doc.ts"
  majorVersion="v1"
  height="523px"
/>

## Paramètres

- `input` : valeur objet à enrichir avec une evidence. Il peut s'agir d'une valeur clean, d'une entité ou d'un objet composé dont les propriétés ont été calculées ensemble.
- `evidenceName` : nom métier de l'evidence à attacher ou vérifier (ex. `"validated"`, `"authorized"`, `"loaded"`). Pour `hasEvidence`, il peut aussi s'agir d'un tuple de noms.
- `information` : information du `Either.Result` à créer. Pour `evidenceResult`, cette information devient aussi le nom de l'evidence ajoutée à la valeur.
- `value` : valeur objet à placer dans le `Either.Result` et à enrichir avec l'evidence issue de `information`.
- `GenericFunction` : fonction dont le type de retour contient, directement ou via une promesse / un `Either`, une valeur objet portant une evidence.
- `EvidenceName` : nom d'evidence disponible dans le résultat de `GenericFunction`. Le type est contraint par les evidences réellement présentes dans ce résultat.

## Valeur de retour

`appendEvidence` retourne une copie superficielle de l'entrée, enrichie avec `C.Evidence<evidenceName>` dans son type et avec la marque d'evidence attachée au runtime.

`hasEvidence` retourne un booléen typé comme predicate. Si le résultat est positif, l'entrée est affinée vers la branche qui porte l'evidence demandée.

`evidenceResult` retourne un `C.EvidenceResult<information, value>`, c'est-à-dire un `Either.Result` dont la valeur de succès porte `C.Evidence<information>`.

`GetEvidenceResult` retourne uniquement la branche du résultat de fonction qui porte `C.Evidence<EvidenceName>`. Si la fonction retourne un `Promise`, le type résolu est utilisé ; si elle retourne un `Either.Left` ou un `Either.Right`, la valeur enveloppée est utilisée.

Cette marque peut ensuite être requise par d'autres fonctions pour verrouiller l'ordre d'appel métier.

## Voir aussi

- [`flag`](/fr/v1/api/clean/flag) - Ajoute un flag sur les entités via un handler dédié.
- [`useCase`](/fr/v1/api/clean/useCase) - Orchestre les flux métier où des evidences peuvent être attachées.
- [`chainedFunction`](/fr/v1/api/clean/chainedFunction) - Modélise des actions métier ordonnées, souvent combinées avec des evidences de passage.
