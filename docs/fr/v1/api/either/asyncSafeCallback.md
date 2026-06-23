---
outline: [2, 3]
description: "Exécute un callback ou une promesse dans un bloc asynchrone sécurisé. Si le callback lève une erreur ou si la promesse rejette, la fonction résout vers un Left safe-callback-error au lieu de propager l'erreur."
prev:
  text: "safeCallback"
  link: "/fr/v1/api/either/safeCallback"
next:
  text: "bool"
  link: "/fr/v1/api/either/bool"
---

# asyncSafeCallback

Exécute un callback ou une promesse dans un bloc asynchrone sécurisé. Si le callback lève une erreur ou si la promesse rejette, la fonction résout vers un `Left` typé `"safe-callback-error"` au lieu de propager l'erreur. Si l'entrée produit un `Either`, il est conservé tel quel. Les autres valeurs résolues sont encapsulées dans un `Right`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/asyncSafeCallback/tryout.doc.ts"
  majorVersion="v1"
  height="544px"
/>

## Syntaxe

```typescript
function asyncSafeCallback<
	const GenericOutput extends unknown
>(
	maybeFunction: (() => GenericOutput) | Promise<GenericOutput>
): Promise<Extract<ComputeSafeCallbackResult<GenericOutput>, any>>;
```

## Paramètres

- `maybeFunction` : Callback ou promesse à exécuter en mode sécurisé. Le résultat peut être une valeur directe, un `Either` ou une promesse de l'un des deux.

## Valeur de retour

Une promesse qui résout selon ces règles :

- Si l'entrée produit un `Left` ou `Right` : l'`Either` est renvoyé tel quel.
- Si l'entrée réussit avec une valeur non `Either` : la valeur est encapsulée dans `SafeCallbackSuccess`.
- Si le callback lève une erreur ou si la promesse rejette : `SafeCallbackError` (`left("safe-callback-error", error)`) est résolu.

## Voir aussi

- [`safeCallback`](/fr/v1/api/either/safeCallback) – Version qui conserve une sortie synchrone quand c'est possible.
- [`left`](/fr/v1/api/either/left) – Construire un `Left` typé.
