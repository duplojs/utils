---
outline: [2, 3]
prev:
  text: "forwardLog"
  link: "/v1/api/common/forwardLog/fr"
next:
  text: "when"
  link: "/v1/api/common/when/fr"
---

# justReturn

La fonction **`justReturn()`** construit une fonction constante : elle ignore son argument et renvoie toujours la même valeur. Elle existe aussi sous forme directe pour retourner immédiatement cette valeur.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/common/justReturn/examples/tryout.doc.ts"
  majorVersion="v1"
  height="730px"
/>

## Syntaxe

### Signature classique

```typescript
function justReturn<
	GenericInput extends unknown, 
	GenericValue extends AnyValue
>(
	input: GenericInput, 
	value: GenericValue
): GenericValue;
```

### Signature currifiée

```typescript
function justReturn<
	GenericInput extends unknown, 
	GenericValue extends AnyValue
>(
	value: GenericValue
): (input: GenericInput) => GenericValue;
```

## Paramètres

- `value` : La valeur constante à renvoyer.
- `input` (surcharge directe) : Une valeur ignorée, utile pour rester compatible avec des callbacks.

## Valeur de retour

- Surcharge currifiée : une fonction qui renvoie toujours `value` quel que soit l'argument reçu.
- Surcharge directe : la valeur `value`.

## Voir aussi

- [`forward`](/v1/api/common/forward/fr) - Identité simple
- [`pipe`](/v1/api/common/pipe/fr) - Chaîner des transformations et insérer `justReturn` comme fallback
