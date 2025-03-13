import { GetData } from "./base.api";
import { IHome } from "@/types";
import { baseUrl } from "@/constants";

export const getHomePage = async (locale: string) => {
  const apiUrl = `${baseUrl}home`;
  const data = await GetData(apiUrl, locale);

  return data as IHome;
};
