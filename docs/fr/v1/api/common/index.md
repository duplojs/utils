---
outline: [2, 3]
prev:
  text: "Référence API"
  link: "/fr/v1/api/"
next:
  text: "Array"
  link: "/fr/v1/api/array/"
---

# Common

Utilitaires transversaux pour composer des fonctions, gérer les promesses, manipuler des wrappers/kinds et appliquer des conversions runtime partagées par toute la librairie.

## Comment faire les imports ?

Toutes les fonctions sont exportées depuis l'entrée principale ou via l'import direct (tree-shaking friendly).

```typescript
import { pipe, when, clone } from "@duplojs/utils";
import * as DCommon from "@duplojs/utils/common";
import * as C from "@duplojs/utils/common";
import { pipe, when, clone } from "@duplojs/utils/common";
```

## Composition et piping

### [pipe](/fr/v1/api/common/pipe)
Compose des fonctions synchrones en chaînant un même input.

### [innerPipe](/fr/v1/api/common/innerPipe)
Prépare un pipe réutilisable qui retourne une fonction à appliquer plus tard.

### [asyncPipe](/fr/v1/api/common/asyncPipe)
Compose des promesses ou des `FutureEither` de façon séquentielle en renvoyant un `Promise`.

### [asyncInnerPipe](/fr/v1/api/common/asyncInnerPipe)
Version curried d'`asyncPipe` qui renvoie une fonction prête à accepter une valeur (sync ou async).

### [forward](/fr/v1/api/common/forward)
Fonction identité pratique dans un chainage pour passer la valeur telle quelle.

### [forwardLog](/fr/v1/api/common/forwardLog)
Log la valeur (tap) puis la renvoie pour continuer le flux.

### [justReturn](/fr/v1/api/common/justReturn)
Construit une fonction constante qui renvoie toujours la même valeur.

## Contrôle conditionnel et prédicats

### [when](/fr/v1/api/common/when)
Applique une transformation si le prédicat est vrai (ou si le type guard passe), sinon renvoie l'entrée.

### [whenNot](/fr/v1/api/common/whenNot)
Inverse la condition et exécute une fonction uniquement quand le prédicat échoue.

### [whenElse](/fr/v1/api/common/whenElse)
Deux branches typées (if/else) qui renvoient des sorties distinctes sans perdre le type d'entrée.

### [and](/fr/v1/api/common/and)
Combine plusieurs type guards / prédicats en une intersection.

### [or](/fr/v1/api/common/or)
Combine plusieurs prédicats en une union, pratique pour filtrer des unions discriminées.

### [equal](/fr/v1/api/common/equal)
Compare à une ou plusieurs valeurs littérales avec support des type guards sur les primitives.

### [isType](/fr/v1/api/common/isType)
Type guard basé sur `typeof`, `Array.isArray`, itérables, etc.

### [instanceOf](/fr/v1/api/common/instanceOf)
Type guard basé sur un ou plusieurs constructeurs (`instanceof` typé).

### [hasKinds](/fr/v1/api/common/hasKinds)
Type guard qui vérifie qu'une valeur possède tous les kinds attendus.

### [truthy](/fr/v1/api/common/truthy)
Type guard qui conserve uniquement les valeurs truthy.

### [falsy](/fr/v1/api/common/falsy)
Type guard qui conserve uniquement les valeurs falsy.

## Boucles

### [loop](/fr/v1/api/common/loop)
Boucle contrôlée par callbacks `next` / `exit` avec accès au compteur et à la sortie précédente.

### [asyncLoop](/fr/v1/api/common/asyncLoop)
Version asynchrone de `loop` qui accepte des itérations retournant des promesses.

## Promesses

### [externalPromise](/fr/v1/api/common/externalPromise)
Crée une promesse avec ses méthodes `resolve`/`reject` exposées pour être contrôlée de l'extérieur.

### [promiseObject](/fr/v1/api/common/promiseObject)
Transforme un objet de promesses en promesse d'objet avec des valeurs résolues et typées.

## Autres

### [asyncRetry](/fr/v1/api/common/asyncRetry)
Relance une fonction asynchrone jusqu'à ce qu'une condition soit remplie (max retry, délai, log optionnel).

### [sleep](/fr/v1/api/common/sleep)
Pause asynchrone pour attendre un certain temps.

### [memo](/fr/v1/api/common/memo)
Évalue une fonction une seule fois et réutilise le résultat (memoization lazy).

### [toJSON](/fr/v1/api/common/toJSON)
Prépare une valeur pour la sérialisation JSON.

### [toTransform](/fr/v1/api/common/toTransform)
Applique récursivement les méthodes `toTransform` présentes pour obtenir un modèle prêt à être transporté.

### [toString](/fr/v1/api/common/toString)
Convertit un littéral (number, boolean, bigint, etc.) en template string typée.

### [stringToMillisecond](/fr/v1/api/common/stringToMillisecond)
Parse des durées (`"10s"`, `"2h"`, `"1.5d"`, etc.) en millisecondes, avec erreurs typées.

### [stringToBytes](/fr/v1/api/common/stringToBytes)
Convertit des tailles (`"10mb"`, `"2gb"`, …) en nombre d'octets.

### [escapeRegExp](/fr/v1/api/common/escapeRegExp)
Échappe les caractères spéciaux pour créer une regex depuis une chaîne sûre.

### [interpolation](/fr/v1/api/common/interpolation)
Génère des templates typés avec des placeholders `{id}` et un mapping strict des remplacements.

### [wrapValue](/fr/v1/api/common/wrapValue)
Enveloppe une valeur dans un conteneur marqué pour l'identifier ou éviter les collisions.

### [isWrappedValue](/fr/v1/api/common/isWrappedValue)
Type guard pour vérifier si une valeur est un `WrappedValue`.

### [isRuntimeWrappedValueKey](/fr/v1/api/common/isRuntimeWrappedValueKey)
Vérifie si une clé de chaîne correspond au marqueur runtime d'un `WrappedValue`.

### [toWrappedValue](/fr/v1/api/common/toWrappedValue)
Assure qu'une valeur est wrappée (idempotent si déjà enveloppée).

### [unwrap](/fr/v1/api/common/unwrap)
Récupère la valeur interne d'un wrapper.

### [addWrappedProperties](/fr/v1/api/common/addWrappedProperties)
Ajoute dynamiquement des propriétés dérivées à une valeur wrappée.

### [clone](/fr/v1/api/common/clone)
Clone profond et typé d'une valeur (objets, tableaux, etc.).

### [simpleClone](/fr/v1/api/common/simpleClone)
Clone léger pour dupliquer rapidement une valeur sans logique avancée.

### [createEnum](/fr/v1/api/common/createEnum)
Crée un enum string immuable avec helpers `has` et `toTuple`.

### [globalStore](/fr/v1/api/common/globalStore)
Store global typé (singleton par clé) avec accès lecture/écriture.

### [builder](/fr/v1/api/common/builder)
Helper pour créer des builders immutables avec accumulation typée et vérification des méthodes manquantes.

### [override](/fr/v1/api/common/override)
Définit des overrides nommés (méthodes ou valeurs par défaut) et les applique sur une interface.
