import { IReport, IReportResponse } from "@/types";

import { GetData } from "./base.api";
import { baseUrl } from "@/constants";

export const getReports = async (
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
  // const response = await fetch(`${baseUrl}reports/all?page=${page}&search_text=${search_text}&sort_key=${sort_key}`);
  // const data = await response.json();
  const apiUrl = `${baseUrl}reports/all?page=${page}&search_text=${search_text}&sort_key=${sort_key}&type=${type}&tag=${tag}`;
  const data = await GetData(apiUrl, locale);
  return data as IReportResponse;
};

export const getSingleReport = async (id: string, locale = "en") => {
  // const response = await fetch(`${baseUrl}reports/get/${id}`);
  // const data = await response.json();
  const apiUrl = `${baseUrl}reports/getBySlug/${id}`;
  const data = await GetData(apiUrl , locale);
  return data as {
    report: IReport;
  };
};
