import { ICapabilitiesResponse, ICapability } from "@/types";

import { GetData } from "./base.api";
import { baseUrl } from "@/constants";

export const getCapabilities = async (locale = "en") => {
  const apiUrl = `${baseUrl}capabilities/all`;
  const data = await GetData(apiUrl, locale);
  
  return data as ICapabilitiesResponse;
};

export const getSingleCapability = async (slug: string, locale = "en") => {
  // const response = await fetch(`${baseUrl}ebooks/get/${id}`);
  // const data = await response.json();
  const apiUrl = `${baseUrl}capabilities/getBySlug/${slug}`;
  const data = await GetData(apiUrl, locale);
  return data as {
    capability: ICapability;
  };
};

export const getCapabilitiesTags = async (locale = "en") => {
  const apiUrl = `${baseUrl}capabilities/tags/all`;

  const data = await GetData(apiUrl, locale);
  return data as {
    tags: {
      id: string;
      tag: string;
    }[];
  };
};
