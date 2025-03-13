import { IArticlePageResponse, IBlog, IBlogPageResponse, IBookPageResponse, IReportPageResponse } from "@/types";

import { GetData } from "./base.api";
import { baseUrl } from "@/constants";

export const getBlogPage = async (locale = "en") => {
  // const response = await fetch(`${baseUrl}blogs/all`);
  // const data = await response.json();
  const apiUrl = `${baseUrl}blogs/all`;
  const data = await GetData(apiUrl, locale);
  return data as IBlogPageResponse;
};
export const getArticlePage = async (locale = "en") => {
  // const response = await fetch(`${baseUrl}blogs/all`);
  // const data = await response.json();
  const apiUrl = `${baseUrl}articles/all`;
  const data = await GetData(apiUrl, locale);
  return data as IArticlePageResponse;
};
export const getReportPage = async (locale = "en") => {
  // const response = await fetch(`${baseUrl}blogs/all`);
  // const data = await response.json();
  const apiUrl = `${baseUrl}reports/all`;
  const data = await GetData(apiUrl, locale);
  return data as IReportPageResponse;
};
export const getEbookPage = async (locale = "en") => {
  // const response = await fetch(`${baseUrl}blogs/all`);
  // const data = await response.json();
  const apiUrl = `${baseUrl}ebooks/all`;
  const data = await GetData(apiUrl, locale);
  return data as IBookPageResponse;
};
export const getSingleBlog = async (id: string, locale = "en") => {
  try {
    // const response = await fetch(`${baseUrl}blogs/get/${id}`);
    // const data = await response.json();
    const apiUrl = `${baseUrl}blogs/get/${id}`;
    const data = await GetData(apiUrl, locale);
    return data as { blog: IBlog };
  } catch (e) {
    return { blog: { title: "", description: "", image: "", banner: "", banner_title: "", banner_description: "" } };
  }
};
