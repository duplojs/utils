---
outline: [2, 3]
description: "prepareAsyncPipe() déclare une seule fois les étapes synchrones ou asynchrones d’un pipeline et retourne une fonction réutilisable avec inférence contextuelle de l’entrée."
prev:
  text: "asyncInnerPipe"
  link: "/fr/v1/api/common/asyncInnerPipe"
next:
  text: "forward"
  link: "/fr/v1/api/common/forward"
---

# prepareAsyncPipe

`prepareAsyncPipe()` est l’équivalent asynchrone de `preparePipe()`. Il déclare une seule fois jusqu’à quinze transformations, accepte des étapes synchrones ou retournant une promesse, puis produit une fonction asynchrone réutilisable.

La fonction préparée accepte une entrée directe ou une promesse. Sa signature contextuelle d’entrée-sortie peut piloter l’inférence de l’entrée locale, notamment lorsque le pipeline participe à une fonction asynchrone récursive.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/prepareAsyncPipe/tryout.doc.ts"
  majorVersion="v1"
  height="796px"
/>

## Syntaxe

### Type d’entrée explicite

```typescript
const prepared = prepareAsyncPipe<Input>()(
  pipe1,
  pipe2
);
```

### Type contextuel d’entrée-sortie

```typescript
const prepared: (input: Input) => Promise<Output> = prepareAsyncPipe()(
  pipe1,
  pipe2
);
```

## Paramètres

- `Input` : contrainte supérieure optionnelle de l’entrée directe ou promise.
- `pipe1, pipe2, ...` : une à quinze transformations retournant une valeur ou une promesse.

## Valeur de retour

Une fonction réutilisable acceptant `Input | PromiseLike<Input>` et retournant une promesse de la sortie finale.

## Voir aussi

- [`preparePipe`](/fr/v1/api/common/preparePipe) - Variante préparée synchrone.
- [`asyncInnerPipe`](/fr/v1/api/common/asyncInnerPipe) - Composition asynchrone réutilisable inférée directement depuis ses étapes.
