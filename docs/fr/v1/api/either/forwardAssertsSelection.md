---
outline: [2, 3]
description: "Transmet sans modification les Either sélectionnés par un sélecteur exhaustif d'informations et lève une erreur pour les autres."
prev:
  text: "unwrapSelectionOrThrow"
  link: "/fr/v1/api/either/unwrapSelectionOrThrow"
next:
  text: "expect"
  link: "/fr/v1/api/either/expect"
---

# forwardAssertsSelection

Transmet sans modification les `Either` sélectionnés par un sélecteur exhaustif d'informations et lève une erreur pour les autres.

Le sélecteur associe chaque information possible de l'union d'entrée à `true` ou `false`. Un `Either` associé à `true` est retourné intact, tandis qu'un `Either` associé à `false` lève une `ForwardAssertsSelectionError`. Toute valeur qui n'est pas un `Either` traverse la fonction sans modification.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/forwardAssertsSelection/tryout.doc.ts"
  majorVersion="v1"
  height="859px"
/>

## Syntaxe

### Signature classique

```typescript
function forwardAssertsSelection<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
>(
  input: GenericInput,
  selector: GenericSelector,
): SelectedInput
```

### Signature currifiée

```typescript
function forwardAssertsSelection<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
>(
  selector: GenericSelector,
): (input: GenericInput) => SelectedInput
```

## Paramètres

- `selector` : Objet exhaustif où chaque information `Either` possible de l'entrée est associée à `true` ou `false`.
- `input` : Valeur à vérifier immédiatement, ou plus tard avec la forme currifiée.

## Valeur de retour

Retourne l'entrée intacte lorsqu'elle n'est pas un `Either` ou lorsque son information est sélectionnée avec `true`. Si l'information d'un `Either` est associée à `false`, la fonction lève `E.ForwardAssertsSelectionError`.

Le type de retour exclut les branches explicitement associées à `false`. Une entrée du sélecteur typée `boolean` conserve sa branche dans le type de retour, car elle peut valoir `true` à l'exécution.

## Voir aussi

- [`unwrapSelectionOrThrow`](/fr/v1/api/either/unwrapSelectionOrThrow) – Sélection exhaustive qui unwrap les payloads autorisés.
- [`unwrapSelection`](/fr/v1/api/either/unwrapSelection) – Sélection exhaustive non bloquante qui unwrap les branches autorisées.
- [`forwardAsserts`](/fr/v1/api/common/forwardAsserts) – Assertion générique qui transmet la valeur validée.
