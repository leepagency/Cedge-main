import { GetData } from "./base.api";
import { IAbout } from "@/types";
import { baseUrl } from "@/constants";

export const getAboutPage = async (locale = "en") => {
  const apiUrl = `${baseUrl}about`;
  const data = await GetData(apiUrl, locale);
  return data as IAbout;
};
