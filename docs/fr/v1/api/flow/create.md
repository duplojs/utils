---
outline: [2, 3]
description: "Crée un objet flow réutilisable à partir d'une fonction de flow."
prev:
  text: "Flow"
  link: "/fr/v1/api/flow/"
next:
  text: "run"
  link: "/fr/v1/api/flow/run"
---

# create

La fonction **`create()`** wrap une fonction de flow basée sur un générateur dans un objet flow réutilisable qui peut ensuite être exécuté avec `F.run()` ou composé avec `F.exec()`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/flow/create/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function create<
	GenericTheFlowFunction extends TheFlowFunction
>(
	theFunction: GenericTheFlowFunction
): TheFlow<GenericTheFlowFunction>
```

## Paramètres

- `theFunction` : La fonction génératrice ou async génératrice qui définit le flow.

## Valeur de retour

Un objet flow qui stocke la fonction fournie et peut être exécuté plusieurs fois avec `F.run()` ou `F.exec()`.

## Voir aussi

- [`run`](/fr/v1/api/flow/run) - Exécute un flow créé
- [`exec`](/fr/v1/api/flow/exec) - Exécute un flow créé dans un autre flow
