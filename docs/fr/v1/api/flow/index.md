---
outline: [2, 3]
description: "Helpers de contrôle de flux basés sur des générateurs pour composer des workflows synchrones et asynchrones avec effets typés, étapes, sorties, breaks et injection de dépendances."
prev:
  text: 'Either'
  link: '/fr/v1/api/either/'
next:
  text: 'Generator'
  link: '/fr/v1/api/generator/'
---

# Flow

Helpers de contrôle de flux basés sur des générateurs pour composer des workflows synchrones et asynchrones avec effets typés, étapes, sorties, breaks et injection de dépendances.

## Comment faire les imports ?

La bibliothèque expose les namespaces `DFlow` et `F` depuis l'entrée principale **ou** en import direct (tree-shaking friendly), ce qui permet de ne charger que ce dont vous avez besoin.

```typescript
import { DFlow, F } from "@duplojs/utils";
import * as DFlow from "@duplojs/utils/flow";
import * as F from "@duplojs/utils/flow";
```

## Création et exécution de flow

### [create](/fr/v1/api/flow/create)
Créer un flow réutilisable à partir d'une fonction de flow.

### [run](/fr/v1/api/flow/run)
Exécute un flow et retourne sa valeur finale.

### [exec](/fr/v1/api/flow/exec)
Exécute un flow imbriqué dans le flow courant.

## Contrôle de flux

### [breakIf](/fr/v1/api/flow/breakIf)
Arrête la branche courante du flow quand un prédicat correspond.

### [exitIf](/fr/v1/api/flow/exitIf)
Quitte le flow en cours quand un prédicat correspond, même depuis un flow imbriqué.

### [step](/fr/v1/api/flow/step)
Enregistre une étape nommée et peut optionnellement calculer une valeur.

## Cycle de vie et nettoyage

### [defer](/fr/v1/api/flow/defer)
Enregistre un callback de nettoyage exécuté quand le flow se termine.

### [finalizer](/fr/v1/api/flow/finalizer)
Enregistre un callback final géré par le runner de flow.

### [createInitializer](/fr/v1/api/flow/createInitializer)
Crée un initializer qui retourne une valeur et enregistre automatiquement des effets de nettoyage.

## Dépendances

### [createDependence](/fr/v1/api/flow/createDependence)
Crée un descripteur de dépendance typé pour le système de flow.

### [inject](/fr/v1/api/flow/inject)
Demande une dépendance au runner de flow.
