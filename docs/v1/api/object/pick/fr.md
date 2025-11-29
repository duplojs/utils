---
outline: [2, 3]
prev:
  text: "getDeepProperty"
  link: "/v1/api/object/getDeepProperty/fr"
next:
  text: "omit"
  link: "/v1/api/object/omit/fr"
---

# pick

La méthode **`pick()`** crée un nouvel objet en sélectionnant uniquement certaines propriétés.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/object/pick/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
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
	GenericValue extends boolean,
	GenericPickValue extends Partial<Record<keyof GenericInput, GenericValue>> | readonly (keyof GenericInput)[]
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

- [`omit`](/v1/api/object/omit/fr) - Crée un objet en excluant certaines propriétés
