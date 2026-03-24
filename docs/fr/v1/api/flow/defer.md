---
outline: [2, 3]
description: "Enregistre un callback de nettoyage exécuté quand le flow se termine."
prev:
  text: "exitIf"
  link: "/fr/v1/api/flow/exitIf"
next:
  text: "finalizer"
  link: "/fr/v1/api/flow/finalizer"
---

# defer

La fonction **`defer()`** enregistre un callback de nettoyage que le runtime de flow exécute après la fin du flow. Elle est utile pour libérer des ressources ou lancer des effets de bord après un retour ou un break.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/flow/defer/tryout.doc.ts"
  majorVersion="v1"
  height="292px"
/>

## Syntaxe

```typescript
function defer<
	GenericOutput extends unknown
>(
	theFunction: () => GenericOutput
): Generator<Defer<GenericOutput>, undefined>
```

## Paramètres

- `theFunction` : Callback de nettoyage à exécuter quand le flow se termine.

## Valeur de retour

Un générateur qui émet un effet de defer. Le résultat du callback n'est pas lui-même retourné par le flow.

## Voir aussi

- [`finalizer`](/fr/v1/api/flow/finalizer) - Enregistre un autre callback de fin de flow
- [`run`](/fr/v1/api/flow/run) - Exécute les callbacks différés à la fin du flow
