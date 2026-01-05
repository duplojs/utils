---
outline: [2, 3]
description: "La méthode pick() crée un nouvel objet en sélectionnant uniquement certaines propriétés."
prev:
  text: "getDeepProperty"
  link: "/fr/v1/api/object/getDeepProperty"
next:
  text: "omit"
  link: "/fr/v1/api/object/omit"
---

# pick

La méthode **`pick()`** crée un nouvel objet en sélectionnant uniquement certaines propriétés.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/object/pick/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

### Signature classique

```typescript
function pick<
	GenericInput extends object,
	GenericPickValue extends Partial<Record<keyof GenericInput, boolean>> | readonly (keyof GenericInput)[]
>(
	input: GenericInput,
	pickValue: GenericPickValue
): SimplifyTopLevel<Pick<GenericInput, ...>>
```

### Signature currifiee

```typescript
function pick<
	GenericInput extends object,
	GenericPickValue extends Partial<Record<keyof GenericInput, boolean>> | readonly (keyof GenericInput)[]
>(
	pickValue: GenericPickValue
): (input: GenericInput) => SimplifyTopLevel<Pick<GenericInput, ...>>
```

## Paramètres

- `input` : L'objet source.
- `pickValue` : Les clés à conserver (tableau de clés ou objet avec valeurs booléennes).

## Valeur de retour

Un nouvel objet contenant uniquement les propriétés sélectionnées.

## Voir aussi

- [`omit`](/fr/v1/api/object/omit) - Crée un objet en excluant certaines propriétés
