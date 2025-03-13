import { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    locales: ["en", "ar"],
    defaultLocale: "ar",
  });
  return handleI18nRouting(request);
}

export const config = { matcher: ["/", "/(ar|en)/:path*"] };

// if (!modules) {
//   const { data: x } = await GetData({
//     endPoint: endPoints.myModules,
//   });
//   // {
//   // seting:true
//   // }
//   modules = x;
// }
// const lang = request.nextUrl.pathname.split("/")[1];
// request.headers.set("locale", lang);
// // request.headers.set("", lang);
// const absoluteUrl = new URL(${lang}/home, request.nextUrl.origin);

// let url = request.nextUrl.href.split("/");
// const accountType = request.cookies.get("type")?.value;
// const continueToRoute = accountType != "ADMIN" && (await checkModule(url));

// if (continueToRoute) {
//   return NextResponse.redirect(absoluteUrl.toString());
// }

// // redirect to login page if user is not logged in
// if (!token && request.nextUrl.pathname !== /${lang}) {
//   const absoluteUrl = new URL(${lang}, request.nextUrl.origin);
//   return NextResponse.redirect(absoluteUrl.toString());
// }
// // redirect to home page if user is logged in
// if (token && request.nextUrl.pathname === /${lang} && lang) {
//   const absoluteUrl = new URL(${lang}/home, request.nextUrl.origin);
//   return NextResponse.redirect(absoluteUrl.toString());
// }

// type ModuleType = any;  // Replace 'any' with the actual type if available
// type ModulesType = ModuleType[] | null;

// let modulesCache: ModulesType = null;

// async function fetchModules(): Promise<ModulesType> {
//   if (!modulesCache) {
//     const { data } = await GetData({ endPoint: endPoints.myModules });
//     modulesCache = data;
//   }
//   return modulesCache;
// }

// async function handleRouting(request: NextRequest, modules: ModulesType) {
//   const token = request.cookies.get(ACCESS_TOKEN)?.value;
//   const lang = request.nextUrl.pathname.split("/")[1];
//   const accountType = request.cookies.get("type")?.value;

//   const absoluteUrl = new URL(${lang}/home, request.nextUrl.origin);
//   const urlSegments = request.nextUrl.href.split("/");

//   request.headers.set("locale", lang);

//   if (accountType !== "ADMIN" && (await checkModule(urlSegments))) {
//     return NextResponse.redirect(absoluteUrl.toString());
//   }

//   if (!token && request.nextUrl.pathname !== /${lang}) {
//     const loginUrl = new URL(${lang}, request.nextUrl.origin);
//     return NextResponse.redirect(loginUrl.toString());
//   }

//   if (token && request.nextUrl.pathname === /${lang} && lang) {
//     return NextResponse.redirect(absoluteUrl.toString());
//   }

//   return null;
// }

// export default async function middleware(request: NextRequest) {
//   const modules = await fetchModules();
//   const routingResponse = await handleRouting(request, modules);

//   if (routingResponse) {
//     return routingResponse;
//   }
