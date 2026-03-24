---
outline: [2, 3]
description: "Crée un initializer qui retourne une valeur et enregistre automatiquement des effets de nettoyage de flow."
prev:
  text: "step"
  link: "/fr/v1/api/flow/step"
next:
  text: "Flow"
  link: "/fr/v1/api/flow/"
---

# createInitializer

La fonction **`createInitializer()`** wrap un initializer et le transforme en générateur compatible avec les flows, capable d'enregistrer automatiquement un callback `defer`, un callback `finalizer`, ou les deux.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/flow/createInitializer/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntaxe

```typescript
function createInitializer<
	GenericArgs extends unknown[],
	GenericOutput extends unknown
>(
	initializer: (...args: GenericArgs) => GenericOutput,
	params: {
		defer?: (output: Awaited<GenericOutput>) => unknown;
		finalizer?: (output: Awaited<GenericOutput>) => unknown;
	}
): (...args: GenericArgs) => Generator | AsyncGenerator
```

## Paramètres

- `initializer` : Fonction qui produit la valeur à exposer dans le flow.
- `params.defer` : Callback de nettoyage optionnel construit à partir de la valeur produite.
- `params.finalizer` : Callback final optionnel construit à partir de la valeur produite.

## Valeur de retour

Une fonction qui retourne un générateur compatible avec `F.run()`. Le générateur retourne le résultat de l'initializer et enregistre les effets de nettoyage configurés.

## Voir aussi

- [`defer`](/fr/v1/api/flow/defer) - Enregistre un callback de nettoyage
- [`finalizer`](/fr/v1/api/flow/finalizer) - Enregistre un callback final
