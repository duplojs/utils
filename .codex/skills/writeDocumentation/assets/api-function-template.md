---
outline: [2, 3]
prev:
  text: "previous"
  link: "/fr/v1/api/<namespace>/<previous>"
next:
  text: "next"
  link: "/fr/v1/api/<namespace>/<next>"
description: "Short description of the function."
---

# <function>

Short description of the function.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/<namespace>/<function>/tryout.doc.ts"
  majorVersion="v1"
  height="300px"
/>

## Syntaxe

### Signature classique

```typescript
function <function>(
  ...
): ...
```

### Signature currifiee

```typescript
function <function>(
  ...
): (input: ...) => ...
```

## Parametres

- `paramName` : Description du parametre.

## Valeur de retour

Description de la valeur de retour.

## Voir aussi

- [`related`](/fr/v1/api/<namespace>/<related>) - Short description

## Sources

- [Reference name](https://example.com)
