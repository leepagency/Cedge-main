import { GetData } from "./base.api";
import { IFooter } from "@/types";
import { baseUrl } from "@/constants";

export const getFooterData = async (locale: string) => {
  const apiUrl = `${baseUrl}footer`;
  const data = await GetData(apiUrl, locale);
  return data.footer as IFooter;
};
