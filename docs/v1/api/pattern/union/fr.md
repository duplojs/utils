---
outline: [2, 3]
prev:
  text: "isMatch"
  link: "/v1/api/pattern/isMatch/fr"
next:
  text: "Pattern"
  link: "/v1/api/pattern/fr"
---

# union

`union()` compose plusieurs motifs en un seul `ToolPattern` réutilisable. Pratique pour partager des motifs entre `match`, `when`, `isMatch`, ou tout autre endroit où un motif est attendu.

## Exemple interactif

<MonacoTSEditor
  src="/v1/api/pattern/union/examples/tryout.doc.ts"
  majorVersion="v1"
  height="650px"
/>

## Syntaxe

```ts
function union<
	GenericInput extends unknown, 
	const GenericPatterns extends readonly [
    	Pattern<GenericInput extends infer InferredInput ? InferredInput : never>,
    	...Pattern<GenericInput extends infer InferredInput ? InferredInput : never>[]
	]
>(
	...patterns: FixDeepFunctionInfer<
		readonly [Pattern<GenericInput>, ...Pattern<GenericInput>[]], 
		GenericPatterns
	>
): ToolPattern<
	GenericInput, 
	GenericPatterns[number] extends infer InferredPattern ? InferredPattern : never
>;
```

## Paramètres

- `patterns` : motifs à combiner (littéraux, objets partiels, tuples, prédicats, autres `ToolPattern`).

## Valeur de retour

Un `ToolPattern` qui matche si au moins un des motifs fournis correspond. Vous pouvez le passer à `match`, `when`, `isMatch`, ou le composer dans d'autres `union`.

## Bonnes pratiques

- Regroupez vos motifs métiers (ex: types d'événements, rôles utilisateurs) dans un `union` partagé pour éviter les répétitions.
- Combinez avec `isMatch` pour obtenir un type guard réutilisable : `const isWrite = P.isMatch(P.union("POST", "PUT"))`.
- Les motifs sont évalués dans l'ordre fourni ; placez les plus spécifiques en premier si un calcul de prédicat coûteux est présent.

## Voir aussi

- [`isMatch`](/v1/api/pattern/isMatch/fr)
- [`match`](/v1/api/pattern/match/fr)
- [`when`](/v1/api/pattern/when/fr)
