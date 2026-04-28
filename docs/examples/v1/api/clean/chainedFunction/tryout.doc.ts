import { C, E, type ExpectType } from "@duplojs/utils";

interface CommentDraft {
	articleId: number;
	content: string;
}

interface Comment {
	id: number;
	articleId: number;
	content: string;
}

interface Article {
	id: number;
	commentCount: number;
}

interface CommentRepository {
	save(comment: Comment): Comment | E.Fail;
}

interface ArticleRepository {
	findById(articleId: number): Article | E.Fail;
	save(article: Article): Article | E.Fail;
}

const CommentRepository = C.createRepository<CommentRepository>();
const ArticleRepository = C.createRepository<ArticleRepository>();

const CommentPublicationAggregate = C.chainedFunction(
	[
		"createComment",
		(draft: CommentDraft) => draft.content.trim()
			? {
				id: 1,
				articleId: draft.articleId,
				content: draft.content.trim(),
			}
			: E.fail(),
	],
	[
		"incrementArticleCommentCount",
		(article: Article): Article => ({
			...article,
			commentCount: article.commentCount + 1,
		}),
	],
);

const PublishCommentUseCase = C.createUseCase(
	{
		CommentRepository,
		ArticleRepository,
	},
	({
		commentRepository,
		articleRepository,
	}) => (draft: CommentDraft) => CommentPublicationAggregate(function *(link1, { breakIfLeft }) {
		const [comment, link2] = yield *link1(({ createComment }) => createComment(draft));

		const savedComment = yield *breakIfLeft(commentRepository.save(comment));

		const article = yield *breakIfLeft(articleRepository.findById(savedComment.articleId));

		const [updatedArticle, chainEnd] = yield *link2(
			({ incrementArticleCommentCount }) => incrementArticleCommentCount(article),
		);

		const savedArticle = yield *breakIfLeft(articleRepository.save(updatedArticle));

		return chainEnd({
			comment: savedComment,
			article: savedArticle,
		});
	}),
);

const publishComment = PublishCommentUseCase.getUseCase({
	commentRepository: CommentRepository.createImplementation({
		save: (comment) => comment,
	}),
	articleRepository: ArticleRepository.createImplementation({
		findById: (articleId) => ({
			id: articleId,
			commentCount: 11,
		}),
		save: (article) => article,
	}),
});

const publishedComment = publishComment({
	articleId: 12,
	content: " New comment ",
});

type CheckPublishedComment = ExpectType<
	typeof publishedComment,
	{
		comment: Comment;
		article: Article;
	} | E.Fail,
	"strict"
>;
