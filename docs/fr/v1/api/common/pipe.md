---
outline: [2, 3]
description: "La méthode pipe() enchaîne jusqu'à 15 fonctions synchrones en passant la sortie de l'une comme entrée de la suivante. Elle renvoie la dernière valeur calculée et reste entièrement typée à chaque étape."
prev:
  text: "Common"
  link: "/fr/v1/api/common/"
next:
  text: "pipeCall"
  link: "/fr/v1/api/common/pipeCall"
---

# pipe

La méthode **`pipe()`** enchaîne jusqu'à 15 fonctions synchrones en passant la sortie de l'une comme entrée de la suivante. Elle renvoie la dernière valeur calculée et reste entièrement typée à chaque étape.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/pipe/tryout.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Syntaxe

```typescript
function pipe<Input, Output1>(
	input: Input,
	pipe1: (input: Input) => Output1
): Output1

function pipe<Input, Output1, Output2>(
	input: Input,
	pipe1: (input: Input) => Output1,
	pipe2: (input: Output1) => Output2
): Output2

// ... surcharges supplémentaires (jusqu'à 15 fonctions)
```

## Paramètres

- `input` : La valeur initiale à transformer.
- `pipe1, pipe2, ...` : Les fonctions appliquées séquentiellement. Chacune reçoit la sortie de la précédente.

## Valeur de retour

La valeur retournée par la dernière fonction de la chaîne, avec un typage précis basé sur le chaînage.

## Exemples

### Exemple avec les fonctions de la librairie

<MonacoTSEditor
  src="/examples/v1/api/common/pipe/withCurriedFunctions.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Voir aussi

- [`innerPipe`](/fr/v1/api/common/innerPipe) - Version currifiée qui retourne une fonction réutilisable
- [`asyncPipe`](/fr/v1/api/common/asyncPipe) - Pipe asynchrone qui compose des promesses
