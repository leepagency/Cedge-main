import { ICapability, IIndustry } from "@/types";

import { GetData } from "./base.api";
import { baseUrl } from "@/constants";

export const getHeaderData = async (locale: string) => {
  const apiUrl = `${baseUrl}header`;
  const data = await GetData(apiUrl, locale);
  return data as {
    data: {
      capabilities: ICapability[];
      industries: IIndustry[];
    };
  };
};
