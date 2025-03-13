import { IIndustriesResponse, IIndustry } from "@/types";

import { GetData } from "./base.api";
import { baseUrl } from "@/constants";

export const getIndustries = async (locale = "en") => {
  const apiUrl = `${baseUrl}industries/all`;
  const data = await GetData(apiUrl, locale);
  return data as IIndustriesResponse;
};

export const getSingleIndustry = async (id: string, locale = "en") => {
  // const response = await fetch(`${baseUrl}ebooks/get/${id}`);
  // const data = await response.json();
  const apiUrl = `${baseUrl}industries/getBySlug/${id}`;
  const data = await GetData(apiUrl, locale);

  return data as {
    industry: IIndustry;
  };
};

export const getIndustriesTags = async (locale = "en") => {
  const apiUrl = `${baseUrl}industries/tags/all`;
  const data = await GetData(apiUrl, locale);
  return data as {
    tags: {
      id: string;
      tag: string;
    }[];
  };
};
