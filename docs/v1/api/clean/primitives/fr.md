---
outline: [2, 3]
prev:
  text: "Clean"
  link: "/v1/api/clean/fr"
next:
  text: "Contraintes"
  link: "/v1/api/clean/constraints/fr"
---

# Primitives

Les primitives métier sont une alternative aux string et number bruts de TypeScript.

Plutôt que de manipuler des valeurs nues, chaque primitive est wrappée dans un container.
Résultat : des données plus sûres, plus explicites et mieux alignées avec le domaine.

## Exemple

une page sélectionnée n’est pas un simple number, mais une primitive dédiée, indépendante de toute entité métier.

<MonacoTSEditor
  src="/v1/api/clean/primitives/examples/first.doc.ts"
  majorVersion="v1"
  height="250px"
/>

Les primitives ont deux objectifs :

Sécuriser les données en évitant l’usage de valeurs brutes.

Unifier les types : lorsque plusieurs NewTypes interagissent, leur point commun retombe sur une primitive simple (number, string, etc.).

<MonacoTSEditor
  src="/v1/api/clean/primitives/examples/second.doc.ts"
  majorVersion="v1"
  height="320px"
/>

👉 En bref : des types plus propres, plus lisibles et plus robustes, sans complexité inutile

## Primitives disponibles
 
<MonacoTSEditor
  src="/v1/api/clean/primitives/examples/tryout.doc.ts"
  majorVersion="v1"
  height="400px"
/>

## Méthodes et Propriétés

### Méthodes

#### `create()`

```typescript
function create(
	value: RawType
): EitherRight<Primitive<RawType>> | EitherLeft<ParseError>
```

#### `createOrThrow()`

```typescript
function createOrThrow(
	value: RawType
): Primitive<RawType>
```

#### `createWithUnknown()`

```typescript
function createWithUnknown(
	value: unknown
): EitherRight<Primitive<RawType>> | EitherLeft<ParseError>
```

#### `createWithUnknownOrThrow()`

```typescript
function createWithUnknownOrThrow(
	value: unknown
): Primitive<RawType>
```

#### `is()`

```typescript
function is(
	value: unknown
): value is Primitive<RawType>
```

### Propriétés

#### `dataParser`

Correspond au [dataParser](/v1/api/dataParser/fr) qui valide la primitive.

## Opérateurs

### [equal](/v1/api/clean/primitives/operators/equal/fr)
Compare deux primitives wrappées (ou une primitive et une valeur brute) avec un type guard.

### [add](/v1/api/clean/primitives/operators/add/fr)
Additionne deux `Number` (supporte la version currifiée).

### [subtract](/v1/api/clean/primitives/operators/subtract/fr)
Soustrait un nombre à un `Number` (supporte la version currifiée).

### [multiply](/v1/api/clean/primitives/operators/multiply/fr)
Multiplie un `Number` (supporte la version currifiée).

### [divide](/v1/api/clean/primitives/operators/divide/fr)
Divise un `Number` (supporte la version currifiée).

### [min](/v1/api/clean/primitives/operators/min/fr)
Retourne le minimum d'un tuple de `Number`.

### [max](/v1/api/clean/primitives/operators/max/fr)
Retourne le maximum d'un tuple de `Number`.

### [greaterThan](/v1/api/clean/primitives/operators/greaterThan/fr)
Teste si un `Number` est strictement supérieur à un seuil.

### [lessThan](/v1/api/clean/primitives/operators/lessThan/fr)
Teste si un `Number` est strictement inférieur à un seuil.

### [concat](/v1/api/clean/primitives/operators/concat/fr)
Concatène des `String` (supporte la version currifiée).

### [length](/v1/api/clean/primitives/operators/length/fr)
Retourne la longueur d'un `String` sous forme de `Number`.

### [lengthEqual](/v1/api/clean/primitives/operators/lengthEqual/fr)
Teste si la longueur d'un `String` est égale à une valeur.

### [lengthGreaterThan](/v1/api/clean/primitives/operators/lengthGreaterThan/fr)
Teste si la longueur d'un `String` est supérieure à une valeur.

### [lengthLessThan](/v1/api/clean/primitives/operators/lengthLessThan/fr)
Teste si la longueur d'un `String` est inférieure à une valeur.

### [dateGreaterThan](/v1/api/clean/primitives/operators/dateGreaterThan/fr)
Teste si une `Date` est postérieure à un seuil.

### [dateLessThan](/v1/api/clean/primitives/operators/dateLessThan/fr)
Teste si une `Date` est antérieure à un seuil.

### [dateMin](/v1/api/clean/primitives/operators/dateMin/fr)
Retourne la plus petite date d'une liste.

### [dateMax](/v1/api/clean/primitives/operators/dateMax/fr)
Retourne la plus grande date d'une liste.

### [sort](/v1/api/clean/primitives/operators/sort/fr)
Trie un tableau de primitives (`String`, `Number` ou `Date`) en `"ASC"` / `"DSC"`.
