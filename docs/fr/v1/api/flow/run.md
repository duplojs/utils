---
outline: [2, 3]
description: "Exécute un flow et retourne sa valeur finale."
prev:
  text: "create"
  link: "/fr/v1/api/flow/create"
next:
  text: "exec"
  link: "/fr/v1/api/flow/exec"
---

# run

La fonction **`run()`** est le point d'entrée du système de flow. Elle exécute un flow synchrone ou asynchrone, gère les effets comme les breaks, exits, finalizers, steps et injections, puis retourne la valeur finale.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/flow/run/tryout.doc.ts"
  majorVersion="v1"
  height="271px"
/>

## Syntaxe

```typescript
function run<
	GenericFlow extends TheFlowFunction | TheFlow
>(
	theFlow: GenericFlow,
	params?: {
		input?: unknown;
		includeDetails?: boolean;
		dependencies?: Record<string, unknown>;
	}
): unknown
```

## Paramètres

- `theFlow` : La fonction de flow ou le flow créé à exécuter.
- `params.input` : Input optionnel transmis au flow.
- `params.includeDetails` : Quand `true`, retourne un objet avec le résultat final et les noms d'étapes collectés.
- `params.dependencies` : Sac de dépendances utilisé pour satisfaire les demandes `F.inject()`.

## Valeur de retour

Le résultat final du flow, ou une `Promise` quand le flow exécuté est asynchrone. Quand `includeDetails` est activé, la valeur de retour devient `{ result, steps }`.

## Voir aussi

- [`create`](/fr/v1/api/flow/create) - Crée un flow réutilisable
- [`exec`](/fr/v1/api/flow/exec) - Exécute un flow imbriqué depuis un autre flow
- [`inject`](/fr/v1/api/flow/inject) - Demande une dépendance au runner
