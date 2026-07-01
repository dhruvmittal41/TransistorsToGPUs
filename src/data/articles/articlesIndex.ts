import { Article } from "./articleTypes";

// This is where you'll import and register all your articles
// For now, it's an empty array - you'll add articles as you write them
import { transistorsArticle } from "./fundamentals/transistors";
import { historyArticle } from "./fundamentals/history";
import { LogicGatesArticle } from "./fundamentals/logic-gates";

export const allArticles: Article[] = [
  transistorsArticle,
  historyArticle,
  LogicGatesArticle,
];

// Helper functions to retrieve articles
export const getArticleById = (id: string): Article | undefined => {
  return allArticles.find((article) => article.id === id);
};

export const getArticlesByTopic = (topicSlug: string): Article[] => {
  return allArticles.filter((article) => article.topicSlug === topicSlug);
};

export const getArticleBySlug = (
  topicSlug: string,
  subtopicSlug: string,
): Article | undefined => {
  return allArticles.find(
    (article) =>
      article.topicSlug === topicSlug && article.subtopicSlug === subtopicSlug,
  );
};

export const getAllArticles = (): Article[] => {
  return allArticles;
};

export const searchArticles = (query: string): Article[] => {
  const lowerQuery = query.toLowerCase();
  return allArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.description.toLowerCase().includes(lowerQuery) ||
      article.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)),
  );
};
