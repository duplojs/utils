---
outline: [2, 3]
prev:
  text: "Clean"
  link: "/fr/v1/api/clean/"
next:
  text: "Contraintes"
  link: "/fr/v1/api/clean/constraints"
---

# Primitives

Les primitives métier sont une alternative aux string et number bruts de TypeScript.

Plutôt que de manipuler des valeurs nues, chaque primitive est wrappée dans un container.
Résultat : des données plus sûres, plus explicites et mieux alignées avec le domaine.

## Exemple

une page sélectionnée n’est pas un simple number, mais une primitive dédiée, indépendante de toute entité métier.

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/first.doc.ts"
  majorVersion="v1"
  height="250px"
/>

Les primitives ont deux objectifs :

Sécuriser les données en évitant l’usage de valeurs brutes.

Unifier les types : lorsque plusieurs NewTypes interagissent, leur point commun retombe sur une primitive simple (number, string, etc.).

<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/second.doc.ts"
  majorVersion="v1"
  height="320px"
/>

👉 En bref : des types plus propres, plus lisibles et plus robustes, sans complexité inutile

## Primitives disponibles
 
<MonacoTSEditor
  src="/examples/v1/api/clean/primitives/tryout.doc.ts"
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

Correspond au [dataParser](/fr/v1/api/dataParser/) qui valide la primitive.

## Opérateurs

### [equal](/fr/v1/api/clean/primitives/operators/equal)
Compare deux primitives wrappées (ou une primitive et une valeur brute) avec un type guard.

### [add](/fr/v1/api/clean/primitives/operators/add)
Additionne deux `Number` (supporte la version currifiée).

### [subtract](/fr/v1/api/clean/primitives/operators/subtract)
Soustrait un nombre à un `Number` (supporte la version currifiée).

### [multiply](/fr/v1/api/clean/primitives/operators/multiply)
Multiplie un `Number` (supporte la version currifiée).

### [divide](/fr/v1/api/clean/primitives/operators/divide)
Divise un `Number` (supporte la version currifiée).

### [min](/fr/v1/api/clean/primitives/operators/min)
Retourne le minimum d'un tuple de `Number`.

### [max](/fr/v1/api/clean/primitives/operators/max)
Retourne le maximum d'un tuple de `Number`.

### [greaterThan](/fr/v1/api/clean/primitives/operators/greaterThan)
Teste si un `Number` est strictement supérieur à un seuil.

### [lessThan](/fr/v1/api/clean/primitives/operators/lessThan)
Teste si un `Number` est strictement inférieur à un seuil.

### [concat](/fr/v1/api/clean/primitives/operators/concat)
Concatène des `String` (supporte la version currifiée).

### [length](/fr/v1/api/clean/primitives/operators/length)
Retourne la longueur d'un `String` sous forme de `Number`.

### [lengthEqual](/fr/v1/api/clean/primitives/operators/lengthEqual)
Teste si la longueur d'un `String` est égale à une valeur.

### [lengthGreaterThan](/fr/v1/api/clean/primitives/operators/lengthGreaterThan)
Teste si la longueur d'un `String` est supérieure à une valeur.

### [lengthLessThan](/fr/v1/api/clean/primitives/operators/lengthLessThan)
Teste si la longueur d'un `String` est inférieure à une valeur.

### [dateGreaterThan](/fr/v1/api/clean/primitives/operators/dateGreaterThan)
Teste si une `Date` est postérieure à un seuil.

### [dateLessThan](/fr/v1/api/clean/primitives/operators/dateLessThan)
Teste si une `Date` est antérieure à un seuil.

### [dateAddTime](/fr/v1/api/clean/primitives/operators/dateAddTime)
Ajoute une durée à une `Date`.

### [dateSubtractTime](/fr/v1/api/clean/primitives/operators/dateSubtractTime)
Soustrait une durée à une `Date`.

### [dateMin](/fr/v1/api/clean/primitives/operators/dateMin)
Retourne la plus petite date d'une liste.

### [dateMax](/fr/v1/api/clean/primitives/operators/dateMax)
Retourne la plus grande date d'une liste.

### [timeGreaterThan](/fr/v1/api/clean/primitives/operators/timeGreaterThan)
Teste si un `Time` est strictement supérieur à un seuil.

### [timeLessThan](/fr/v1/api/clean/primitives/operators/timeLessThan)
Teste si un `Time` est strictement inférieur à un seuil.

### [timeMin](/fr/v1/api/clean/primitives/operators/timeMin)
Retourne la plus petite durée d'une liste.

### [timeMax](/fr/v1/api/clean/primitives/operators/timeMax)
Retourne la plus grande durée d'une liste.

### [sort](/fr/v1/api/clean/primitives/operators/sort)
Trie un tableau de primitives (`String`, `Number`, `Date` ou `Time`) en `"ASC"` / `"DSC"`.
