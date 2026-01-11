---
outline: [2, 3]
description: "La méthode innerPipe() prépare un pipeline synchrone réutilisable : elle retourne une fonction qui appliquera la chaîne de transformations à n'importe quel input compatible."
prev:
  text: "pipeCall"
  link: "/fr/v1/api/common/pipeCall"
next:
  text: "asyncPipe"
  link: "/fr/v1/api/common/asyncPipe"
---

# innerPipe

La méthode **`innerPipe()`** prépare un pipeline synchrone réutilisable : elle retourne une fonction qui appliquera la chaîne de transformations à n'importe quel input compatible.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/innerPipe/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

```typescript
function innerPipe<Input, Output1>(
	pipe1: (input: Input) => Output1
): (input: Input) => Output1

function innerPipe<Input, Output1, Output2>(
	pipe1: (input: Input) => Output1,
	pipe2: (input: Output1) => Output2
): (input: Input) => Output2

// ... surcharges supplémentaires (jusqu'à 15 fonctions)
```

## Paramètres

- `pipe1, pipe2, ...` : Les fonctions appliquées séquentiellement. Chaque sortie est l'entrée de la suivante.

## Valeur de retour

Une fonction qui accepte l'input initial et renvoie le résultat final du pipeline, avec un typage strict sur chaque étape.

## Voir aussi

- [`pipe`](/fr/v1/api/common/pipe) - Version immédiate qui exécute directement le pipeline
- [`asyncInnerPipe`](/fr/v1/api/common/asyncInnerPipe) - Variante asynchrone qui compose des promesses ou FutureEither
