import { IBook, IBookResponse } from "@/types";

import { GetData } from "./base.api";
import { baseUrl } from "@/constants";

export const getBooks = async (
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
  // const response = await fetch(`${baseUrl}ebooks/all?page=${page}&search_text=${search_text}&sort_key=${sort_key}`);
  // const data = await response.json();
  const apiUrl = `${baseUrl}ebooks/all?page=${page}&search_text=${search_text}&sort_key=${sort_key}&type=${type}&tag=${tag}`;
  const data = await GetData(apiUrl, locale);
  return data as IBookResponse;
};

export const getSingeBook = async (id: string, locale = "en") => {
  // const response = await fetch(`${baseUrl}ebooks/get/${id}`);
  // const data = await response.json();
  const apiUrl = `${baseUrl}ebooks/getBySlug/${id}`;
  const data = await GetData(apiUrl, locale);
  return data as {
    ebook: IBook;
  };
};
