---
outline: [2, 3]
prev:
  text: "pick"
  link: "/v1/api/object/pick/fr"
next:
  text: "assign"
  link: "/v1/api/object/assign/fr"
---

# omit

La méthode **`omit()`** crée un nouvel objet en excluant certaines propriétés.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/object/omit/examples/tryout.doc.ts"
  majorVersion="v1"
  height="200px"
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
	GenericValue extends boolean,
	GenericOmitValue extends Partial<Record<keyof GenericInput, GenericValue>> | readonly (keyof GenericInput)[]
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

- [`pick`](/v1/api/object/pick/fr) - Crée un objet en sélectionnant certaines propriétés
