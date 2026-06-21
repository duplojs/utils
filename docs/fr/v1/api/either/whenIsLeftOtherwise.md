---
outline: [2, 3]
description: "Applique un callback sur les valeurs Left et un second callback sur toutes les valeurs non-Left."
prev:
  text: "whenIsLeft"
  link: "/fr/v1/api/either/whenIsLeft"
next:
  text: "unwrapLeft"
  link: "/fr/v1/api/either/unwrapLeft"
---

# whenIsLeftOtherwise

Applique un callback sur les valeurs `Left` et un second callback sur toutes les valeurs non-`Left`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsLeftOtherwise/tryout.doc.ts"
  majorVersion="v1"
  height="649px"
/>

## Syntaxe

### Signature classique

```typescript
function whenIsLeftOtherwise<
  GenericInput extends unknown,
  GenericOutputLeft,
  GenericOutputOtherwise
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<GenericInput, Left>>) => GenericOutputLeft,
  otherwiseFunction: (value: Extract<GenericInput, Right> | Exclude<GenericInput, Right | Left>) => GenericOutputOtherwise
): GenericOutputLeft | GenericOutputOtherwise;
```

### Signature currifiée

```typescript
function whenIsLeftOtherwise<
  GenericInput extends unknown,
  GenericOutputLeft,
  GenericOutputOtherwise
>(
  theFunction: (value: Unwrap<Extract<GenericInput, Left>>) => GenericOutputLeft,
  otherwiseFunction: (value: Extract<GenericInput, Right> | Exclude<GenericInput, Right | Left>) => GenericOutputOtherwise
): (input: GenericInput) => GenericOutputLeft | GenericOutputOtherwise;
```

## Paramètres

- `theFunction` : Callback exécuté quand l'entrée est `Left` (reçoit le payload unwrap).
- `otherwiseFunction` : Callback exécuté pour les valeurs restantes (`Right` ou non-Either), sans unwrap.
- `input` : Valeur à traiter immédiatement (optionnelle en style currifié).

## Valeur de retour

Renvoie le résultat de `theFunction` pour un `Left`, sinon le résultat de `otherwiseFunction`.

## Voir aussi

- [`whenIsRightOtherwise`](/fr/v1/api/either/whenIsRightOtherwise) - Variante symétrique pour `Right`.
- [`whenIsLeft`](/fr/v1/api/either/whenIsLeft) - Mapping côté Left sans branche otherwise explicite.
