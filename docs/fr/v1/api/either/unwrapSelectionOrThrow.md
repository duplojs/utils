---
outline: [2, 3]
description: "Unwrap les payloads Either sélectionnés par un sélecteur exhaustif d'informations; sinon lève une HasNotSelectedInformationError."
prev:
  text: "unwrapSelection"
  link: "/fr/v1/api/either/unwrapSelection"
next:
  text: "forwardAssertsSelection"
  link: "/fr/v1/api/either/forwardAssertsSelection"
---

# unwrapSelectionOrThrow

Unwrap les payloads `Either` sélectionnés par un sélecteur exhaustif d'informations; sinon lève une `HasNotSelectedInformationError`.

Le sélecteur associe chaque information possible de l'union d'entrée à `true` ou `false`. Une entrée `true` unwrap le payload correspondant; une entrée `false` est traitée comme un chemin exceptionnel.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/unwrapSelectionOrThrow/tryout.doc.ts"
  majorVersion="v1"
  height="670px"
/>

## Syntaxe

### Signature classique

```typescript
function unwrapSelectionOrThrow<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
>(
  input: GenericInput,
  selector: GenericSelector,
): UnwrappedSelectedInputs
```

### Signature currifiée

```typescript
function unwrapSelectionOrThrow<
  GenericInput extends unknown,
  GenericSelector extends Record<Information, boolean>,
>(
  selector: GenericSelector,
): (input: GenericInput) => UnwrappedSelectedInputs
```

## Paramètres

- `selector` : Objet exhaustif où chaque information possible de l'entrée est associée à `true` ou `false`.
- `input` : Valeur Either à unwrap immédiatement, ou plus tard via la forme currifiée.

## Valeur de retour

Retourne le payload unwrap quand l'information courante est sélectionnée avec `true`. Sinon, la fonction lève `E.HasNotSelectedInformationError`.

Quand une entrée du sélecteur est typée `boolean`, le type de retour inclut le payload unwrap car un `false` runtime lève une erreur.

## Voir aussi

- [`unwrapSelection`](/fr/v1/api/either/unwrapSelection) – Variante non bloquante qui renvoie l'entrée inchangée quand l'information courante n'est pas sélectionnée.
- [`unwrapByInformationOrThrow`](/fr/v1/api/either/unwrapByInformationOrThrow) – Variante bloquante basée sur une string ou un tableau de strings.
- [`matchInformation`](/fr/v1/api/either/matchInformation) – Matching exhaustif par information avec callbacks.
