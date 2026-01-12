---
outline: [2, 3]
description: "La méthode omit() crée un nouvel objet en excluant certaines propriétés."
prev:
  text: "pick"
  link: "/fr/v1/api/object/pick"
next:
  text: "assign"
  link: "/fr/v1/api/object/assign"
---

# omit

La méthode **`omit()`** crée un nouvel objet en excluant certaines propriétés.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/object/omit/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Syntaxe

### Signature classique

```typescript
function omit<
	GenericInput extends object,
	GenericOmitValue extends Partial<Record<keyof GenericInput, boolean>> | readonly (keyof GenericInput)[]
>(
	input: GenericInput,
	omitValue: GenericOmitValue
): SimplifyTopLevel<Omit<GenericInput, ...>>
```

### Signature currifiee

```typescript
function omit<
	GenericInput extends object,
	GenericOmitValue extends Partial<Record<keyof GenericInput, boolean>> | readonly (keyof GenericInput)[]
>(
	omitValue: GenericOmitValue
): (input: GenericInput) => SimplifyTopLevel<Omit<GenericInput, ...>>
```

## Paramètres

- `input` : L'objet source.
- `omitValue` : Les clés à exclure (tableau de clés ou objet avec valeurs booléennes).

## Valeur de retour

Un nouvel objet sans les propriétés exclues.

## Voir aussi

- [`pick`](/fr/v1/api/object/pick) - Crée un objet en sélectionnant certaines propriétés
