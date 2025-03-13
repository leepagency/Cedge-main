import { IArticle, IArticleResponse } from "@/types";

import { GetData } from "./base.api";
import { baseUrl } from "@/constants";

export const getArticles = async (
  {
    page = 1,
    search_text = "",
    sort_key = "2",
    type = "",
    tag = "",
  }: {
    page?: number;
    search_text?: string;
    sort_key?: string;
    type?: string;
    tag?: string;
  } = {},
  locale = "en"
) => {
  // const response = await fetch(`${baseUrl}articles/all?page=${page}&search_text=${search_text}&sort_key=${sort_key}`);
  const apiUrl = `${baseUrl}articles/all?page=${page}&search_text=${search_text}&sort_key=${sort_key}&type=${type}&tag=${tag}`;
  const data = await GetData(apiUrl, locale);
  // const data = await response.json();
  return data as IArticleResponse;
};

export const getSingleArticle = async (id: string, locale = "en") => {
  // const response = await fetch(`${baseUrl}articles/get/${id}`);
  // const data = await response.json();
  const apiUrl = `${baseUrl}articles/getBySlug/${id}`;
  const data = await GetData(apiUrl, locale);
  return data as {
    article: IArticle;
    related_articles: IArticle[];
  };
};
