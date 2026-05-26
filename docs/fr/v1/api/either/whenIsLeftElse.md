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

# whenIsLeftElse

Applique un callback sur les valeurs `Left` et un second callback sur toutes les valeurs non-`Left`.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/either/whenIsLeftElse/tryout.doc.ts"
  majorVersion="v1"
  height="649px"
/>

## Syntaxe

### Signature classique

```typescript
function whenIsLeftElse<
  GenericInput extends unknown,
  GenericOutputLeft,
  GenericOutputElse
>(
  input: GenericInput,
  theFunction: (value: Unwrap<Extract<GenericInput, Left>>) => GenericOutputLeft,
  elseFunction: (value: Extract<GenericInput, Right> | Exclude<GenericInput, Right | Left>) => GenericOutputElse
): GenericOutputLeft | GenericOutputElse;
```

### Signature currifiée

```typescript
function whenIsLeftElse<
  GenericInput extends unknown,
  GenericOutputLeft,
  GenericOutputElse
>(
  theFunction: (value: Unwrap<Extract<GenericInput, Left>>) => GenericOutputLeft,
  elseFunction: (value: Extract<GenericInput, Right> | Exclude<GenericInput, Right | Left>) => GenericOutputElse
): (input: GenericInput) => GenericOutputLeft | GenericOutputElse;
```

## Paramètres

- `theFunction` : Callback exécuté quand l'entrée est `Left` (reçoit le payload unwrap).
- `elseFunction` : Callback exécuté pour les valeurs restantes (`Right` ou non-Either), sans unwrap.
- `input` : Valeur à traiter immédiatement (optionnelle en style currifié).

## Valeur de retour

Renvoie le résultat de `theFunction` pour un `Left`, sinon le résultat de `elseFunction`.

## Voir aussi

- [`whenIsRightElse`](/fr/v1/api/either/whenIsRightElse) - Variante symétrique pour `Right`.
- [`whenIsLeft`](/fr/v1/api/either/whenIsLeft) - Mapping côté Left sans else explicite.
