---
outline: [2, 3]
description: "preparePipe() déclare une seule fois les étapes d’un pipeline synchrone et retourne une fonction réutilisable dont l’entrée peut être inférée depuis son contrat contextuel."
prev:
  text: "innerPipe"
  link: "/fr/v1/api/common/innerPipe"
next:
  text: "asyncPipe"
  link: "/fr/v1/api/common/asyncPipe"
---

# preparePipe

`preparePipe()` déclare une seule fois jusqu’à quinze transformations synchrones et retourne la fonction qui les exécute. Réutiliser cette fonction évite de reconstruire la liste des étapes à chaque appel.

Contrairement à un pipe directement inféré, la fonction retournée peut fournir son entrée par une signature contextuelle. `preparePipe()` peut ainsi inférer l’entrée locale et toutes les sorties intermédiaires sans argument générique explicite. Ce pattern est particulièrement utile pour les fonctions récursives, dont le contrat complet entrée-sortie est généralement déclaré en premier.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/common/preparePipe/tryout.doc.ts"
  majorVersion="v1"
  height="691px"
/>

## Syntaxe

### Type d’entrée explicite

```typescript
const prepared = preparePipe<Input>()(
  pipe1,
  pipe2
);
```

### Type contextuel d’entrée-sortie

```typescript
const prepared: (input: Input) => Output = preparePipe()(
  pipe1,
  pipe2
);
```

## Paramètres

- `Input` : contrainte supérieure optionnelle de l’entrée acceptée par la fonction préparée.
- `pipe1, pipe2, ...` : une à quinze transformations. Chacune reçoit la sortie précédente.

Le générique local d’entrée est inféré depuis le type contextuel de la fonction résultante. Il est utilisé par la première étape et par la fonction retournée.

## Valeur de retour

Une fonction réutilisable qui accepte l’entrée inférée et retourne synchroniquement la sortie finale du pipeline.

## Voir aussi

- [`innerPipe`](/fr/v1/api/common/innerPipe) - Construit directement un pipe réutilisable depuis ses étapes.
- [`prepareAsyncPipe`](/fr/v1/api/common/prepareAsyncPipe) - Variante asynchrone compatible avec les promesses.
