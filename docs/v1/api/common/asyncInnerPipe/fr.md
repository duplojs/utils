---
outline: [2, 3]
prev:
  text: "asyncPipe"
  link: "/v1/api/common/asyncPipe/fr"
next:
  text: "forward"
  link: "/v1/api/common/forward/fr"
---

# asyncInnerPipe

La méthode **`asyncInnerPipe()`** construit un pipeline asynchrone réutilisable. Elle retourne une fonction qui accepte une valeur ou une promesse, exécute chaque étape en attendant la précédente, puis renvoie une promesse du résultat final.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/asyncInnerPipe/examples/tryout.doc.ts"
  majorVersion="v1"
  height="810px"
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

- [`innerPipe`](/v1/api/common/innerPipe/fr) - Variante synchrone currifiée
- [`asyncPipe`](/v1/api/common/asyncPipe/fr) - Exécution immédiate d'un pipeline asynchrone
