---
description: "Un pipe permet d'enchaîner des fonctions en passant la valeur de sortie de l'une comme valeur d'entrée de la suivante."
prev:
  text: "La curryfication"
  link: "/fr/v1/guide/currying"
next:
  text: "Either"
  link: "/fr/v1/guide/either"
---

# Le pipe

[[toc]]

## Le principe

Un **pipe** permet d'enchaîner des fonctions en passant la valeur de sortie de l'une comme valeur d'entrée de la suivante.

Avec `@duplojs/utils`, la fonction `pipe` prend :
- une valeur initiale ;
- puis une suite de fonctions **unaires** (une seule entrée) exécutées dans l'ordre.

```ts
import { pipe } from "@duplojs/utils";

const result = pipe(
	"hello",
	(str) => str.toUpperCase(),
	(str) => `${str}!`,
);
// result === "HELLO!"
```

L'intérêt principal est de **remplacer des appels imbriqués** ou des variables intermédiaires par une lecture “de haut en bas”.

## Comment ça se traduit dans `@duplojs/utils`

La librairie est pensée pour être compatible avec un style fonctionnel : la plupart des fonctions (dans `A`, `O`, `N`, etc.) supportent une forme **classique** et une forme **curryfiée**.

Cette curryfication est importante pour le pipe : un pipeline attend des fonctions de type `(input) => output`, et la forme curryfiée sert précisément à “pré-configurer” une fonction pour qu'elle devienne **unaire**.

### Sans curryfication (moins pratique)

Sans forme curryfiée, tu te retrouves souvent à devoir écrire des wrappers :

```ts
import { A, pipe } from "@duplojs/utils";

const numbers = [2, 12, 7, 42];

const doubled = pipe(
	numbers,
	(input) => A.filter(input, (num) => num > 10),
	(input) => A.map(input, (num) => num * 2),
);
```

### Avec les fonctions curryfiées (recommandé)

Avec `@duplojs/utils`, tu peux pré-configurer chaque étape :

```ts
import { A, N, pipe } from "@duplojs/utils";

const numbers = [2, 12, 7, 42];
const isGreaterThan10 = N.greaterThan(10);

const count = pipe(
	numbers,
	A.filter(isGreaterThan10),
	A.map((num) => num * 2),
	A.length,
);
// count === 2
```

Ici :
- `N.greaterThan(10)` retourne un prédicat `(num) => boolean`
- `A.filter(predicate)` retourne une fonction `(array) => filteredArray`
- `A.map(mapper)` retourne une fonction `(array) => mappedArray`

## Pourquoi ça ressemble à un “builder” (mais sans ses inconvénients)

Un pipeline peut rappeler le *design pattern* **Builder** : on décrit une suite d'étapes, dans un ordre lisible, pour obtenir un résultat final.

La différence, c'est que le pipe repose sur des **fonctions pures importées** :
- côté **tree-shaking**, tu n'importes (et donc ne bundles) que les fonctions réellement utilisées dans ton pipeline, au lieu de dépendre d'un objet “builder” qui expose tout un ensemble de méthodes ;
- côté **personnalisation**, tu peux insérer n'importe quelle fonction (de la librairie ou de ton projet) à n'importe quelle étape, sans devoir étendre une classe, ajouter des méthodes, ou construire un builder générique ;
- côté **typage**, les fonctions curryfiées + le pipe conservent un typage précis à chaque étape, alors que rendre un builder “super personnalisable” avec du typage avancé devient vite plus complexe (surtout quand tu veux que chaque étape influence le type final).

## Gérer des branches conditionnelles (`when`, `whenNot`)

Dans un pipeline, tu vas souvent vouloir faire des étapes **conditionnelles** : appliquer une transformation *uniquement si* une condition est vraie.

`@duplojs/utils` fournit pour ça des helpers comme `when` et `whenNot`.

Le point important (et parfois déroutant au début) : `when` **peut changer la forme du flux**.
Si `when` renvoie parfois “la valeur transformée” et parfois “la valeur d'origine”, le type de sortie peut devenir une **union**, et les étapes suivantes doivent gérer les deux cas.

```ts
import { S, pipe, when } from "@duplojs/utils";

const maybeTokens = pipe(
	"foo,bar",
	when(
		S.includes(","),
		S.split(","),
	),
);
// Type: string | string[]
```

Quand tu veux garder un flux plus simple à lire, une approche est de **normaliser** le flux juste après : par exemple transformer la sortie en tableau quoi qu'il arrive.

```ts
import { S, isType, pipe, when, whenNot } from "@duplojs/utils";

const tokens = pipe(
	"foo,bar",
	when(
		S.includes(","),
		S.split(","),
	),
	whenNot(
		isType("array"),
		(value) => [value],
	),
);
// Type: string[]
```

### Try it (conditionnels)

<MonacoTSEditor
src="/examples/v1/guide/pipe/conditionals.doc.ts"
majorVersion="v1"
height="780px"
/>

Quelques conseils si le “flux” te paraît complexe :
- applique rapidement une étape de **normalisation** (ex: toujours un tableau) quand une étape conditionnelle introduit une union ;
- garde des prédicats et des transformations **nommés** (petites fonctions) ;

## Point-free style

Le **point-free style** (ou “tacite”) consiste à définir une fonction **sans nommer explicitement l'argument** qu'elle reçoit, en ne manipulant que de la composition.

Dans `@duplojs/utils`, `innerPipe` est particulièrement utile : c'est la version “préparée” de `pipe` qui retourne une fonction réutilisable.

```ts
import { A, N, innerPipe } from "@duplojs/utils";

const normalizeNumbers = innerPipe(
	(numbers: number[]) => numbers,
	A.filter(N.greaterThan(10)),
	A.map((num) => num * 2),
);

const result = normalizeNumbers([2, 12, 7, 42]);
```

Le point-free est surtout intéressant quand :
- tu veux **réutiliser** un pipeline à plusieurs endroits ;
- tu veux **nommer** des transformations (petites briques) plutôt que des valeurs intermédiaires.

À l'inverse, si ça nuit à la lisibilité, garde un style plus explicite : l'objectif est d'obtenir un code clair, pas “point-free à tout prix”.

## Astuce : inspecter un pipeline

Quand tu veux “logger au milieu” sans casser le flux, utilise `forwardLog` :

```ts
import { A, N, forwardLog, pipe } from "@duplojs/utils";

const output = pipe(
	[2, 12, 7, 42],
	A.filter(N.greaterThan(10)),
	forwardLog,
	A.map((num) => num * 2),
);
```

## À retenir

- `pipe(input, f1, f2, ...)` exécute immédiatement les fonctions dans l'ordre.
- Les formes **curryfiées** transforment tes utilitaires en fonctions unaires, idéales pour le pipe.
- `innerPipe(f1, f2, ...)` aide à faire du **point-free** en préparant une fonction réutilisable.

## Try it

<MonacoTSEditor
src="/examples/v1/guide/pipe/tryout.doc.ts"
majorVersion="v1"
height="1270px"
/>
