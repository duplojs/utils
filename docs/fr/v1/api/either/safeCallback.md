---
outline: [2, 3]
description: "Exécute un callback dans un bloc sécurisé. Si le callback lève une erreur ou retourne une promesse rejetée, la fonction renvoie ou résout vers un Left safe-callback-error au lieu de propager l'erreur."
prev:
  text: "expect"
  link: "/fr/v1/api/either/expect"
next:
  text: "asyncSafeCallback"
  link: "/fr/v1/api/either/asyncSafeCallback"
---

# safeCallback

Exécute un callback dans un bloc sécurisé. Si le callback lève une erreur ou retourne une promesse rejetée, la fonction renvoie ou résout vers un `Left` typé `"safe-callback-error"` au lieu de propager l'erreur. Si le callback retourne un `Either`, il est conservé tel quel. Les résultats de promesse suivent les mêmes règles après résolution.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/safeCallback/tryout.doc.ts"
  majorVersion="v1"
  height="565px"
/>

## Syntaxe

```typescript
function safeCallback<
	const GenericOutput extends unknown
>(
	theFunction: () => GenericOutput
): Extract<ComputeSafeCallbackResult<GenericOutput>, any>;
```

## Paramètres

- `theFunction` : Callback à exécuter en mode sécurisé. Il peut retourner une valeur directe, un `Either` ou une promesse de l'un des deux.

## Valeur de retour

- Si le callback retourne un `Left` ou `Right` : l'`Either` est renvoyé tel quel.
- Si le callback réussit avec une valeur non `Either` : la valeur est encapsulée dans `SafeCallbackSuccess`.
- Si le callback retourne une promesse : la valeur résolue suit les mêmes règles.
- Si le callback lève une erreur ou si la promesse rejette : `SafeCallbackError` (`left("safe-callback-error", error)`) est renvoyé ou résolu.

## Voir aussi

- [`left`](/fr/v1/api/either/left) – Construire un `Left` typé.
- [`whenHasInformation`](/fr/v1/api/either/whenHasInformation) – Pattern matching sur `"safe-callback-error"`.
