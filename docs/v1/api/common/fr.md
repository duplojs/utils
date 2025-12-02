---
outline: [2, 3]
prev:
  text: "Référence API"
  link: "/v1/api/fr"
next:
  text: "String"
  link: "/v1/api/string/fr"
---

# Common

Utilitaires transversaux pour composer des fonctions, gérer les promesses, manipuler des wrappers/kinds et appliquer des conversions runtime partagées par toute la librairie.

## Comment faire les imports ?

Toutes les fonctions sont exportées depuis l'entrée principale ou via l'import direct (tree-shaking friendly).

```ts
import { pipe, when, clone } from "@duplojs/utils";
import * as Common from "@duplojs/utils/common";
```

## Composition et piping

### [pipe](/v1/api/common/pipe/fr)
Compose des fonctions synchrones en chaînant un même input.

### [innerPipe](/v1/api/common/innerPipe/fr)
Prépare un pipe réutilisable qui retourne une fonction à appliquer plus tard.

### [asyncPipe](/v1/api/common/asyncPipe/fr)
Compose des promesses ou des `FutureEither` de façon séquentielle en renvoyant un `Promise`.

### [asyncInnerPipe](/v1/api/common/asyncInnerPipe/fr)
Version curried d'`asyncPipe` qui renvoie une fonction prête à accepter une valeur (sync ou async).

### [forward](/v1/api/common/forward/fr)
Fonction identité pratique dans un chainage pour passer la valeur telle quelle.

### [forwardLog](/v1/api/common/forwardLog/fr)
Log la valeur (tap) puis la renvoie pour continuer le flux.

### [justReturn](/v1/api/common/justReturn/fr)
Construit une fonction constante qui renvoie toujours la même valeur.

## Contrôle conditionnel et prédicats

### [when](/v1/api/common/when/fr)
Applique une transformation si le prédicat est vrai (ou si le type guard passe), sinon renvoie l'entrée.

### [whenNot](/v1/api/common/whenNot/fr)
Inverse la condition et exécute une fonction uniquement quand le prédicat échoue.

### [whenElse](/v1/api/common/whenElse/fr)
Deux branches typées (if/else) qui renvoient des sorties distinctes sans perdre le type d'entrée.

### [and](/v1/api/common/and/fr)
Combine plusieurs type guards / prédicats en une intersection.

### [or](/v1/api/common/or/fr)
Combine plusieurs prédicats en une union, pratique pour filtrer des unions discriminées.

### [not](/v1/api/common/not/fr)
Inverse n'importe quel type guard.

### [equal](/v1/api/common/equal/fr)
Compare à une ou plusieurs valeurs littérales avec support des type guards sur les primitives.

### [isType](/v1/api/common/isType/fr)
Type guard basé sur `typeof`, `Array.isArray`, itérables, etc.

### [instanceOf](/v1/api/common/instanceOf/fr)
Type guard basé sur un ou plusieurs constructeurs (`instanceof` typé).

## Boucles, retry et temporisation

### [loop](/v1/api/common/loop/fr)
Boucle contrôlée par callbacks `next` / `exit` avec accès au compteur et à la sortie précédente.

### [asyncLoop](/v1/api/common/asyncLoop/fr)
Version asynchrone de `loop` qui accepte des itérations retournant des promesses.

### [asyncRetry](/v1/api/common/asyncRetry/fr)
Relance une fonction asynchrone jusqu'à ce qu'une condition soit remplie (max retry, délai, log optionnel).

### [sleep](/v1/api/common/sleep/fr)
Pause asynchrone pour attendre un certain temps.

## Promesses et orchestration

### [externalPromise](/v1/api/common/externalPromise/fr)
Crée une promesse avec ses méthodes `resolve`/`reject` exposées pour être contrôlée de l'extérieur.

### [promiseObject](/v1/api/common/promiseObject/fr)
Transforme un objet de promesses en promesse d'objet avec des valeurs résolues et typées.

### [memo](/v1/api/common/memo/fr)
Évalue une fonction une seule fois et réutilise le résultat (memoization lazy).

## Conversions et formats

### [toJSON](/v1/api/common/toJson/fr)
Prépare une valeur pour la sérialisation JSON.

### [toTransform](/v1/api/common/toTransform/fr)
Applique récursivement les méthodes `toTransform` présentes pour obtenir un modèle prêt à être transporté.

### [toString](/v1/api/common/toString/fr)
Convertit un littéral (number, boolean, bigint, etc.) en template string typée.

### [stringToMillisecond](/v1/api/common/stringToMillisecond/fr)
Parse des durées (`"10s"`, `"2h"`, `"1.5d"`, etc.) en millisecondes, avec erreurs typées.

### [stringToBytes](/v1/api/common/stringToBytes/fr)
Convertit des tailles (`"10mb"`, `"2gb"`, …) en nombre d'octets.

### [escapeRegExp](/v1/api/common/escapeRegExp/fr)
Échappe les caractères spéciaux pour créer une regex depuis une chaîne sûre.

### [interpolation](/v1/api/common/interpolation/fr)
Génère des templates typés avec des placeholders `{id}` et un mapping strict des remplacements.

## Wrappers, clones et valeurs enrichies

### [wrapValue](/v1/api/common/wrapValue/fr)
Enveloppe une valeur dans un conteneur marqué pour l'identifier ou éviter les collisions.

### [toWrappedValue](/v1/api/common/toWrappedValue/fr)
Assure qu'une valeur est wrappée (idempotent si déjà enveloppée).

### [unwrap](/v1/api/common/unwrap/fr)
Récupère la valeur interne d'un wrapper.

### [addWrappedProperties](/v1/api/common/addWrappedProperties/fr)
Ajoute dynamiquement des propriétés dérivées à une valeur wrappée tout en conservant le type.

### [clone](/v1/api/common/clone/fr)
Clone profond et typé d'une valeur (objets, tableaux, etc.).

### [simpleClone](/v1/api/common/simpleClone/fr)
Clone léger pour dupliquer rapidement une valeur sans logique avancée.

## Kinds, enums et métadonnées

### [kind](/v1/api/common/kind/fr)
Crée des tags runtime/type (`createKind`, `createKindNamespace`, `kindHeritage`, helpers de vérification).

### [createEnum](/v1/api/common/createEnum/fr)
Crée un enum string immuable avec helpers `has` et `toTuple`.

## Architecture, état et surcharges

### [globalStore](/v1/api/common/globalStore/fr)
Store global typé (singleton par clé) avec accès lecture/écriture.

### [builder](/v1/api/common/builder/fr)
Helper pour créer des builders immutables avec accumulation typée et vérification des méthodes manquantes.

### [override](/v1/api/common/override/fr)
Définit des overrides nommés (méthodes ou valeurs par défaut) et les applique sur une interface.
