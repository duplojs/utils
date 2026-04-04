---
outline: [2, 3]
description: "Exécute un flow imbriqué dans le flow courant."
prev:
  text: "run"
  link: "/fr/v1/api/flow/run"
next:
  text: "calledByNext"
  link: "/fr/v1/api/flow/calledByNext"
---

# exec

La fonction **`exec()`** exécute un flow imbriqué depuis le flow courant. Elle permet de composer plusieurs flows tout en propageant les steps, exits, finalizers et injections de dépendances vers le runner externe.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/flow/exec/tryout.doc.ts"
  majorVersion="v1"
  height="334px"
/>

## Syntaxe

```typescript
function exec<
	GenericFlow extends TheFlowFunction | TheFlow | TheFlowGenerator
>(
	theFlow: GenericFlow,
	params?: {
		input?: unknown;
		dependencies?: Record<string, unknown>;
	}
): Generator | AsyncGenerator
```

## Paramètres

- `theFlow` : Une fonction de flow, un flow créé, ou un générateur existant à exécuter.
- `params.input` : Input optionnel transmis au flow imbriqué.
- `params.dependencies` : Overrides optionnels de dépendances pour l'exécution imbriquée.

## Valeur de retour

Un générateur compatible avec le flow courant. Quand le flow imbriqué fait un break, `exec()` retourne localement la valeur du break. Les autres effets supportés continuent à remonter vers l'extérieur.

## Voir aussi

- [`run`](/fr/v1/api/flow/run) - Exécute le flow racine
- [`create`](/fr/v1/api/flow/create) - Crée un flow réutilisable
- [`exitIf`](/fr/v1/api/flow/exitIf) - Quitte un flow depuis n'importe quelle profondeur
