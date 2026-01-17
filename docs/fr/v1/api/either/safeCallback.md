---
outline: [2, 3]
description: "Exécute un callback dans un bloc sécurisé. Si le callback lève une erreur, la fonction renvoie un EitherLeft typé \"callback\" au lieu de propager l'exception."
prev:
  text: "whenHasInformation"
  link: "/fr/v1/api/either/whenHasInformation"
next:
  text: "bool"
  link: "/fr/v1/api/either/bool"
---

# safeCallback

Exécute un callback dans un bloc sécurisé. Si le callback lève une erreur, la fonction renvoie un `EitherLeft` typé `"callback"` au lieu de propager l'exception. Si le callback retourne un `Either`, il est conservé tel quel.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/safeCallback/tryout.doc.ts"
  majorVersion="v1"
  height="376px"
/>

## Syntaxe

```typescript
function safeCallback<
	GenericOutput extends unknown
>(
	theFunction: () => GenericOutput
): ComputeSafeCallbackResult<GenericOutput> | EitherCallbackError;
```

## Paramètres

- `theFunction` : Callback à exécuter en mode sécurisé.

## Valeur de retour

- Si le callback retourne un `EitherLeft` ou `EitherRight` : l'`Either` est renvoyé tel quel.
- Si le callback réussit avec une valeur non `Either` : la valeur est encapsulée dans `EitherCallbackSuccess`.
- Si le callback lève une erreur : `EitherCallbackError` (alias de `left("callback", error)`).

## Voir aussi

- [`left`](/fr/v1/api/either/left) – Construire un `Left` typé.
- [`whenHasInformation`](/fr/v1/api/either/whenHasInformation) – Pattern matching sur `"callback"`.
