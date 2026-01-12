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

Exécute un callback dans un bloc sécurisé. Si le callback lève une erreur, la fonction renvoie un `EitherLeft` typé `"callback"` au lieu de propager l'exception.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/safeCallback/tryout.doc.ts"
  majorVersion="v1"
  height="350px"
/>

## Syntaxe

```typescript
function safeCallback<GenericOutput extends unknown>(
  theFunction: () => GenericOutput
): GenericOutput | EitherCallbackError;
```

## Paramètres

- `theFunction` : Callback à exécuter en mode sécurisé.

## Valeur de retour

- Si le callback réussit : la valeur retournée par `theFunction`.
- Si le callback lève une erreur : `EitherCallbackError` (alias de `left("callback", error)`).

## Voir aussi

- [`left`](/fr/v1/api/either/left) – Construire un `Left` typé.
- [`whenHasInformation`](/fr/v1/api/either/whenHasInformation) – Pattern matching sur `"callback"`.
