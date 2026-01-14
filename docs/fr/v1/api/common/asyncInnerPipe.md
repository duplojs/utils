---
outline: [2, 3]
description: "La méthode asyncInnerPipe() construit un pipeline asynchrone réutilisable. Elle retourne une fonction qui accepte une valeur ou une promesse, exécute chaque étape en attendant la précédente, puis renvoie une promesse du résultat final."
prev:
  text: "asyncPipe"
  link: "/fr/v1/api/common/asyncPipe"
next:
  text: "forward"
  link: "/fr/v1/api/common/forward"
---

# asyncInnerPipe

La méthode **`asyncInnerPipe()`** construit un pipeline asynchrone réutilisable. Elle retourne une fonction qui accepte une valeur ou une promesse, exécute chaque étape en attendant la précédente, puis renvoie une promesse du résultat final.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/asyncInnerPipe/tryout.doc.ts"
  majorVersion="v1"
  height="838px"
/>

## Syntaxe

```typescript
function asyncInnerPipe<Input, Output1>(
	pipe1: (input: Input) => PromiseLike<Output1> | Output1
): (input: PromiseLike<Input> | Input) => Promise<Awaited<Output1>>

function asyncInnerPipe<Input, Output1, Output2>(
	pipe1: (input: Input) => PromiseLike<Output1> | Output1,
	pipe2: (input: Output1) => PromiseLike<Output2> | Output2
): (input: PromiseLike<Input> | Input) => Promise<Awaited<Output2>>

// ... surcharges supplémentaires (jusqu'à 15 fonctions)
```

## Paramètres

- `pipe1, pipe2, ...` : Fonctions synchrones ou asynchrones appliquées séquentiellement.

## Valeur de retour

Une fonction asynchrone qui accepte l'input initial (direct ou promis) et renvoie une promesse du résultat final.

## Voir aussi

- [`innerPipe`](/fr/v1/api/common/innerPipe) - Variante synchrone currifiée
- [`asyncPipe`](/fr/v1/api/common/asyncPipe) - Exécution immédiate d'un pipeline asynchrone
