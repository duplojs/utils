---
outline: [2, 3]
description: "Enregistre une étape nommée et peut optionnellement calculer une valeur."
prev:
  text: "inject"
  link: "/fr/v1/api/flow/inject"
next:
  text: "createInitializer"
  link: "/fr/v1/api/flow/createInitializer"
---

# step

La fonction **`step()`** enregistre une étape nommée dans un flow. Quand `includeDetails` est activé dans `F.run()`, les noms d'étapes collectés sont retournés avec le résultat final.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/flow/step/tryout.doc.ts"
  majorVersion="v1"
  height="250px"
/>

## Syntaxe

```typescript
function step<
	GenericName extends string,
	GenericOutput extends unknown = void
>(
	name: GenericName,
	theFunction?: () => GenericOutput
): Generator | AsyncGenerator
```

## Paramètres

- `name` : Label d'étape stocké dans les détails d'exécution.
- `theFunction` : Callback optionnel exécuté après l'émission du step. Son résultat devient la valeur de retour de `step()`.

## Valeur de retour

Un générateur qui émet un effet de step. Il retourne `undefined` quand aucun callback n'est fourni, sinon retourne le résultat du callback.

## Voir aussi

- [`run`](/fr/v1/api/flow/run) - Collecte les noms d'étapes quand `includeDetails` est activé
- [`exec`](/fr/v1/api/flow/exec) - Propage les effets de step depuis des flows imbriqués
