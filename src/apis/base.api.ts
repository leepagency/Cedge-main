// import { returnTokenCookie } from "@/app/[locale]/savingCookie";

export async function GetData(endPoint: string, locale = "en") {
  // const baseUrl = process.env.BASE_URL as string;
  // const url = `${baseUrl}${endPoint}${paramId ? `?${paramId}` : ""}`;
  //   const tokenServer = returnTokenCookie()?.value;
  try {
    const res = await fetch(endPoint, {
      cache: "no-store",
      // next: {
      //   revalidate: 60,
      // },
      headers: {
        "Accept-Language": locale,
      },
    });
    // .then((res) => {
    //   return res.json();
    // });
    // if (!res.ok) {
    //   return new Error("Error fetching data");
    // }
    const data = await res.json();
    return data;
  } catch (e) {
    return new Error("Error fetching data");
  }
}

