import { sortByPublishedDate } from "../utils/sort";

import { airIntakeArticles } from "./articles/air-intake/air-intake.collection";

export const articles = sortByPublishedDate([
    ...airIntakeArticles,
]);