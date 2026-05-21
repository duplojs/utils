import { type AnyFunction, type Kind, type IsEqual, type MaybePromise, type MaybeAsyncGenerator, type GetKindValue, type ComputedTypeError, type AnyTuple } from "../common";
import * as EE from "../either";
export declare const requirementsChainedFunctionKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsClean/requirements-chained-function", unknown>>;
export interface RequirementsChainedFunction<GenericRequirements extends AnyTuple<unknown> = AnyTuple<unknown>> extends Kind<typeof requirementsChainedFunctionKind.definition, GenericRequirements> {
}
export type FunctionOfChain = [string, AnyFunction, RequirementsChainedFunction?];
export type FunctionChain = [
    FunctionOfChain,
    FunctionOfChain,
    ...FunctionOfChain[]
];
export declare const chainEndKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsClean/chain-end", unknown>>;
export interface ChainEnd<GenericValue extends unknown = unknown> extends Kind<typeof chainEndKind.definition, GenericValue> {
}
export interface CreateChainEnd {
    (): ChainEnd<void>;
    <GenericValue extends unknown>(value: GenericValue): ChainEnd<GenericValue>;
}
export type Link<GenericFunction extends FunctionOfChain = FunctionOfChain, GenericNext extends (Link | CreateChainEnd) = any> = <GenericOutput extends ReturnType<GenericFunction[1]>>(theFunction: (theFunction: {
    [Prop in GenericFunction[0]]: GenericFunction[1];
}) => GenericOutput, ...args: GenericFunction[2] extends RequirementsChainedFunction ? [
    requirements: GetKindValue<typeof requirementsChainedFunctionKind, GenericFunction[2]>
] : []) => ((Extract<GenericOutput, Promise<unknown>> extends infer InferredPromise ? IsEqual<InferredPromise, never> extends true ? never : Awaited<InferredPromise> extends infer InferredValue extends unknown ? AsyncGenerator<Extract<InferredValue, EE.Left>, [
    Exclude<InferredValue, EE.Left>,
    GenericNext
]> : never : never) | (Exclude<GenericOutput, Promise<unknown>> extends infer InferredValue ? IsEqual<InferredValue, never> extends true ? never : Generator<Extract<InferredValue, EE.Left>, [
    Exclude<InferredValue, EE.Left>,
    GenericNext
]> : never));
export type Chain<GenericFunctionChain extends readonly FunctionOfChain[]> = GenericFunctionChain extends readonly [] ? CreateChainEnd : GenericFunctionChain extends [
    infer InferredFirst extends FunctionOfChain,
    ...infer InferredRest extends readonly FunctionOfChain[]
] ? Chain<InferredRest> extends infer InferredRestResult extends (Link<any, any> | CreateChainEnd) ? Link<InferredFirst, InferredRestResult> : never : never;
type OutputMustContainChainEnd<GenericGenerator extends MaybeAsyncGenerator> = IsEqual<GenericGenerator extends MaybeAsyncGenerator<any, infer InferredReturnValue> ? InferredReturnValue extends ChainEnd ? InferredReturnValue : never : never, never> extends true ? ComputedTypeError<"Output must contain a chainEnd"> : unknown;
type ComputeResult<GenericGenerator extends MaybeAsyncGenerator> = GenericGenerator extends Generator<infer InferredIterateValue, infer InferredReturnValue> ? (InferredIterateValue | InferredReturnValue) extends infer InferredResult ? InferredResult extends ChainEnd ? GetKindValue<typeof chainEndKind, InferredResult> : InferredResult : never : GenericGenerator extends AsyncGenerator<infer InferredIterateValue, infer InferredReturnValue> ? Promise<Awaited<InferredIterateValue | InferredReturnValue> extends infer InferredResult ? InferredResult extends ChainEnd ? GetKindValue<typeof chainEndKind, InferredResult> : InferredResult : never> : never;
declare function breakIfLeft<GenericValue extends unknown>(value: GenericValue): Generator<Extract<GenericValue, EE.Left>, Exclude<GenericValue, EE.Left>>;
export interface ChainedFunctionParams {
    breakIfLeft: typeof breakIfLeft;
}
export interface ChainedFunction<GenericValue extends FunctionChain = FunctionChain> {
    <GenericGenerator extends MaybeAsyncGenerator<MaybePromise<EE.Left>, MaybePromise<EE.Left | ChainEnd>>>(callback: (firstLink: Chain<GenericValue>, params: ChainedFunctionParams) => (GenericGenerator & OutputMustContainChainEnd<GenericGenerator>)): ComputeResult<GenericGenerator>;
    /**
     * @deprecated use this only for the tests.
     */
    functions: {
        [Entry in GenericValue[number] as Entry[0]]: Entry[1];
    };
}
/**
 * Declares a typed aggregate of pure linked business actions that must run in order.
 * 
 * **Supported call styles:**
 * - Classic: `chainedFunction(firstFunction, secondFunction, ...functions)` -> returns an implementation function driven by generator links
 * 
 * Use it inside a Clean Architecture use case when several pure domain operations that update different entities must belong to the same business consistency boundary. Each link exposes exactly one named action, yields `Left` values to short-circuit the implementation, and provides the next link until the last step returns `chainEnd(value)`. Repository calls stay in the use case through the library repository system; functions passed to `chainedFunction` remain pure domain functions.
 * 
 * You can also declare typed `requirements` on a link (`C.chainedFunction.requirements<[...args]>()`). These values are mandatory when calling that link, not to feed runtime computation directly, but to prove that prerequisite lifecycle information was obtained earlier in the flow.
 * 
 * ```ts
 * const CommentPublicationAggregate = C.chainedFunction(
 * 	[
 * 		"createComment",
 * 		(draft: CommentDraft): Comment | E.Fail => draft.content.trim()
 * 			? {
 * 				id: 1,
 * 				articleId: draft.articleId,
 * 				content: draft.content.trim(),
 * 			}
 * 			: E.fail(),
 * 	],
 * 	[
 * 		"incrementArticleCommentCount",
 * 		(article: Article): Article => ({
 * 			...article,
 * 			commentCount: article.commentCount + 1,
 * 		}),
 * 	],
 * );
 * 
 * const PublishCommentUseCase = C.createUseCase(
 * 	{
 * 		CommentRepository,
 * 		ArticleRepository,
 * 	},
 * 	({
 * 		commentRepository,
 * 		articleRepository,
 * 	}) => (draft: CommentDraft) => CommentPublicationAggregate(function *(link1, { breakIfLeft }) {
 * 		const [comment, link2] = yield *link1(({ createComment }) => createComment(draft));
 * 
 * 		const savedComment = yield *breakIfLeft(commentRepository.save(comment));
 * 
 * 		const article = yield *breakIfLeft(articleRepository.findById(savedComment.articleId));
 * 
 * 		const [updatedArticle, chainEnd] = yield *link2(
 * 			({ incrementArticleCommentCount }) => incrementArticleCommentCount(article),
 * 		);
 * 
 * 		const savedArticle = yield *breakIfLeft(articleRepository.save(updatedArticle));
 * 
 * 		return chainEnd({
 * 			comment: savedComment,
 * 			article: savedArticle,
 * 		});
 * 	}),
 * );
 * 
 * const publishComment = PublishCommentUseCase.getUseCase({
 * 	commentRepository: CommentRepository.createImplementation({
 * 		save: (comment) => comment,
 * 	}),
 * 	articleRepository: ArticleRepository.createImplementation({
 * 		findById: (articleId) => ({
 * 			id: articleId,
 * 			commentCount: 11,
 * 		}),
 * 		save: (article) => article,
 * 	}),
 * });
 * 
 * const publishedComment = publishComment({
 * 	articleId: 12,
 * 	content: " New comment ",
 * });
 * 
 * type CheckPublishedComment = ExpectType<
 * 	typeof publishedComment,
 * 	{
 * 		comment: Comment;
 * 		article: Article;
 * 	} | E.Fail,
 * 	"strict"
 * >;
 * 
 * const emptyContentResult = publishComment({
 * 	articleId: 12,
 * 	content: " ",
 * });
 * 
 * type CheckEmptyContentResult = ExpectType<
 * 	typeof emptyContentResult,
 * 	{
 * 		comment: Comment;
 * 		article: Article;
 * 	} | E.Fail,
 * 	"strict"
 * >;
 * 
 * const failingPublishComment = PublishCommentUseCase.getUseCase({
 * 	commentRepository: CommentRepository.createImplementation({
 * 		save: () => E.fail(),
 * 	}),
 * 	articleRepository: ArticleRepository.createImplementation({
 * 		findById: (articleId) => ({
 * 			id: articleId,
 * 			commentCount: 11,
 * 		}),
 * 		save: (article) => article,
 * 	}),
 * });
 * 
 * const repositoryFailureResult = failingPublishComment({
 * 	articleId: 12,
 * 	content: "New comment",
 * });
 * 
 * type CheckRepositoryFailureResult = ExpectType<
 * 	typeof repositoryFailureResult,
 * 	{
 * 		comment: Comment;
 * 		article: Article;
 * 	} | E.Fail,
 * 	"strict"
 * >;
 * ```
 * 
 * @remarks `chainedFunction` expects at least two functions in the chain. It does not catch thrown exceptions or rejected promises; model handled business errors with `Either.Left`.
 * The callback receives `(firstLink, { breakIfLeft })`. `breakIfLeft` is synchronous and narrows `value | Left` to `value`, yielding the `Left` branch to short-circuit when needed.
 * `requirements` act as compile-time guards for flow invariants: they can enforce that a step cannot run unless specific typed markers are provided, even when those markers are not useful as runtime arguments for the next function.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/chainedFunction
 * @see [`C.createUseCase`](https://utils.duplojs.dev/en/v1/api/clean/useCase)
 * @see [`E.Left`](https://utils.duplojs.dev/en/v1/api/either/left)
 * 
 * @namespace C
 * 
 */
export declare function chainedFunction<const GenericFunction1 extends FunctionOfChain, const GenericFunction2 extends FunctionOfChain, const GenericFunctions extends FunctionOfChain[]>(function1: GenericFunction1, function2: GenericFunction2, ...functions: GenericFunctions): ChainedFunction<[
    GenericFunction1,
    GenericFunction2,
    ...GenericFunctions
]>;
export declare namespace chainedFunction {
    var requirements: <GenericRequirements extends AnyTuple<unknown>>() => RequirementsChainedFunction<GenericRequirements>;
}
export {};
