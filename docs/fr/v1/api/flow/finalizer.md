---
outline: [2, 3]
description: "Enregistre un callback final géré par le runner de flow."
prev:
  text: "defer"
  link: "/fr/v1/api/flow/defer"
next:
  text: "createDependence"
  link: "/fr/v1/api/flow/createDependence"
---

# finalizer

La fonction **`finalizer()`** enregistre un callback final collecté par le runner de flow. Elle est pensée pour de la logique de fin de flow qui doit rester dans le système d'effets du flow.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/flow/finalizer/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntaxe

```typescript
function finalizer<
	GenericOutput extends unknown
>(
	theFunction: () => GenericOutput
): Generator<Finalizer<GenericOutput>, undefined>
```

## Paramètres

- `theFunction` : Callback collecté par le runner et exécuté quand le flow se termine.

## Valeur de retour

Un générateur qui émet un effet de finalizer. Le résultat du callback est géré par le runner, pas par le corps du flow.

## Voir aussi

- [`defer`](/fr/v1/api/flow/defer) - Enregistre un callback de nettoyage
- [`run`](/fr/v1/api/flow/run) - Collecte et exécute les finalizers
