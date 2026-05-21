---
outline: [2, 3]
description: "chainedFunction déclare un agrégat typé d'actions métier pures qui doivent s'exécuter dans l'ordre. Le use case orchestre ensuite les repositories autour de cet agrégat."
prev:
  text: "UseCase"
  link: "/fr/v1/api/clean/useCase"
next:
  text: "Clean"
  link: "/fr/v1/api/clean/"
---

# chainedFunction

`chainedFunction` répond à un problème de coordination en Clean Architecture : dans un use case, on doit parfois associer des opérations qui mettent à jour des entités différentes. La chained function représente alors l'agrégat qui rend ces opérations solidaires dans une même frontière de cohérence métier.

Elle permet au domaine de déclarer explicitement que plusieurs actions métier pures sont liées. Les fonctions passées à `chainedFunction` ne font pas d'injection de dépendance et n'appellent pas de repository : elles contrôlent uniquement le cycle de vie des entités. Le use case orchestre ensuite l'agrégat, les repositories et les effets techniques.

## Exemple interactif

<MonacoTSEditor
  src="/examples/v1/api/clean/chainedFunction/tryout.doc.ts"
  majorVersion="v1"
  height="1910px"
  :foldLines="[2, 7, 13, 18, 22, 87]"
/>

## Pourquoi l'utiliser ?

Utilisez `chainedFunction` quand un agrégat métier n'est cohérent que si plusieurs opérations nommées se produisent ensemble.

Par exemple, publier un commentaire peut demander :

- de créer l'entité commentaire ;
- de produire une entité commentaire valide ;
- de produire une entité article mise à jour.

La persistance reste dans le use case via le système de repository de la librairie. La chained function modélise seulement le contrat d'agrégat : "créer le commentaire" et "incrémenter le nombre de commentaires de l'article" sont des actions métier liées.

## Garanties

`chainedFunction` apporte ces garanties au niveau du typage :

- les liens sont exposés un par un, dans l'ordre de déclaration ;
- l'implémentation ne peut pas accéder à un lien suivant avant d'avoir appelé le lien courant ;
- le chemin de succès doit terminer avec `chainEnd(...)` ;
- une fonction chaînée peut arrêter le flux en retournant un `Either.Left` ;
- l'implémentation peut aussi retourner directement un `Either.Left`.
- les fonctions chaînées restent des fonctions de domaine pures.

## Syntaxe

### Signature

```typescript
function chainedFunction(
	function1: [name: string, fn: Function, requirements?: C.RequirementsChainedFunction],
	function2: [name: string, fn: Function, requirements?: C.RequirementsChainedFunction],
	...functions: [name: string, fn: Function, requirements?: C.RequirementsChainedFunction][]
): ChainedFunction
```

### Implémentation

```typescript
const aggregate = chainedFunction(...functions);

const result = aggregate(function *(firstLink, { breakIfLeft }) {
	const [value, nextLink] = yield *firstLink(({ functionName }) => functionName(...args));

	return chainEnd(value);
});
```

## Paramètres

- `function1` : première fonction métier pure de la chaîne.
- `function2` : deuxième fonction métier pure de la chaîne.
- `functions` : fonctions métier pures supplémentaires, exécutées dans l'ordre de déclaration.
- `requirements` (élément de tuple optionnel sur chaque fonction) : valeurs requises typées qui doivent être fournies lors de l'appel du link généré pour cette fonction.
- `firstLink` : premier link généré et passé au callback d'implémentation.
- `breakIfLeft` : helper synchrone injecté dans le callback. Il accepte une valeur potentiellement `Either.Left`, stoppe la chaîne si c'est un `Left`, sinon retourne la valeur discriminée sans le `Left`.

## Valeur de retour

`chainedFunction(...)` retourne une fonction d'agrégat chaîné. Son appel retourne :

- la valeur brute passée à `chainEnd(value)` sur le chemin de succès ;
- le `Either.Left` retourné par une fonction chaînée ;
- le `Either.Left` retourné directement par l'implémentation.

## Flux d'erreur

Quand une fonction chaînée retourne un `Either.Left`, le générateur le yield et `chainedFunction` arrête l'implémentation avant d'exécuter les links suivants. Les erreurs métier doivent être représentées avec `Either.Left` ; les exceptions lancées et les promesses rejetées ne sont pas interceptées.

`breakIfLeft` suit la même règle, mais côté callback : il sert à court-circuiter explicitement le flux à partir d'une valeur intermédiaire synchrone (`value | Left`) avant d'appeler le link suivant.

## Requirements et invariants de cycle de vie

Les `requirements` sont un outil de typage pour contrôler le cycle de vie métier. Ils obligent l'appelant à fournir certaines valeurs typées avant d'exécuter un link.

Ces valeurs ne sont pas nécessairement utiles comme arguments runtime de la fonction suivante. Leur rôle principal est de prouver, à la compilation, que des informations préalables ont bien été obtenues dans le flux (validation effectuée, contexte d'autorisation chargé, étape précédente terminée, etc.).

## Exemple requirements

<MonacoTSEditor
  src="/examples/v1/api/clean/chainedFunction/otherExample.doc.ts"
  majorVersion="v1"
  height="1069px"
/>

## Voir aussi

- [`useCase`](/fr/v1/api/clean/useCase) - Appelle une logique applicative avec dépendances.
- [`repository`](/fr/v1/api/clean/repository) - Déclare un contrat de repository.
- [`Either`](/fr/v1/api/either/) - Représente des valeurs explicites de succès et d'erreur.
