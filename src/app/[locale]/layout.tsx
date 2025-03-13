// import "./globals.css";

// import { AR_LOCALE } from "@/constants";
// import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
// import { LayoutContent } from "@/components";
// import type { Metadata } from "next";
// import { NextIntlClientProvider } from "next-intl";
// import React from "react";
// import { ThemeRegistry } from "@/libs";
// import Script from "next/script";

// export const dynamic = "force-dynamic"; // we all make mistakes

// export const metadata: Metadata = {
//   title: {
//     default: 'Cedge                                                       ',
//     template: '%s | Cedge',
//   },
// };
// interface RootLayoutProps {
//   children: React.ReactNode;
//   params: {
//     locale: string;
//   };
// }
// export default async function RootLayout({ children, params: { locale } }: Readonly<RootLayoutProps>) {
//   // const messages = useMessages();
//   const messages = (await import(`../../../messages/${locale || "ar"}.json`)).default;

//   return (
//     <html lang={locale}>
//       <head>
//         <meta charSet="utf-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:site" content="@Cedge_sa" />
//         <meta property="og:url" content={ `https://www.cedge.com.sa`} />
//         <meta property="twitter:title" content={ `https://www.cedge.com.sa`} />
//         <meta property="twitter:image:src" content="https://dashboard.cedge.com.sa/uploads/home/hero/Cedge_Home_page_cover.jpg" />
//         <meta property="twitter:image" content="https://dashboard.cedge.com.sa/uploads/home/hero/Cedge_Home_page_cover.jpg" />
//         <meta property="og:image" content="https://dashboard.cedge.com.sa/uploads/home/hero/Cedge_Home_page_cover.jpg" />
        
//         {metadata.alternates?.canonical ?
//           <meta property="og:title" content={`https://www.cedge.com.sa${metadata?.alternates?.canonical}`}/>
//           :
//           <meta property="og:title" content={ `https://www.cedge.com.sa`} />
//         }

//          {/* Dynamic title */}

//         {/* Dynamic description */}
//         {metadata.description && (
//         <><meta name="description" content={metadata.description + '          '} /><meta name="twitter:description" content={metadata.description + '          '} /></>
//         )}
//         <meta property="og:image" content="https://dashboard.cedge.com.sa/uploads/home/hero/Cedge_Home_page_cover.jpg" />

//         {/* Dynamic canonical URL */}
//         {metadata.alternates?.canonical && (
//           <link rel="canonical" href={`https://www.cedge.com.sa${metadata.alternates.canonical}`} />
//         )}
//         <Script 
//             async
//             strategy="afterInteractive"
//             src="https://www.googletagmanager.com/gtag/js?id=G-9SPV5S5JBH"
//           />
//           <Script
//             async
//             id="google-analytics"
//             strategy="afterInteractive"
//             dangerouslySetInnerHTML={{
//               __html: `
//                 window.dataLayer = window.dataLayer || [];
//                 function gtag(){dataLayer.push(arguments);}
//                 gtag('js', new Date());
//                 gtag('config', 'G-9SPV5S5JBH');
//               `,
//             }}
//           />

//           {/* Google Tag Manager */}
//           <Script
//             async
//             id="google-tag-manager"
//             strategy="afterInteractive"
//             dangerouslySetInnerHTML={{
//               __html: `
//                 (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//                 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//                 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//                 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//                 })(window,document,'script','dataLayer','GTM-KB46SV6H');
//               `,
//             }}
//           />

//           {/* Google Search Console Verification */}
//           <meta name="google-site-verification" content="EqY-MdFZaAUnIfduuiqohvtbC9NtoupW9eIub72UTCY" />

//           {/* Google Ads Tracking Code */}
//           <Script
//             strategy="afterInteractive"
//             src="https://www.googletagmanager.com/gtag/js?id=AW-16652341547"
//           />
//           <Script
//             async
//             id="google-ads"
//             strategy="afterInteractive"
//             dangerouslySetInnerHTML={{
//               __html: `
//                 window.dataLayer = window.dataLayer || [];
//                 function gtag(){dataLayer.push(arguments);}
//                 gtag('js', new Date());
//                 gtag('config', 'AW-16652341547');
//               `,
//             }}
//           />
//       </head>
//       <NextIntlClientProvider locale={locale} messages={messages}>
//         <body dir={locale === AR_LOCALE ? "rtl" : "ltr"}>
//           <AppRouterCacheProvider>
//             <ThemeRegistry>
//               <LayoutContent locale={locale}>{children}</LayoutContent>
//             </ThemeRegistry>
//           </AppRouterCacheProvider>
//           <noscript>
//             <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KB46SV6H" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} ></iframe>
//           </noscript>
//         </body>
//       </NextIntlClientProvider>
//     </html>
//   );
// }

// // import type { Metadata } from "next";
// // import { NextIntlClientProvider } from "next-intl";
// // import React from "react";
// // import { dir } from "i18next";

// // export const dynamic = "force-dynamic"; // we all make mistakes
// // export const metadata: Metadata = {
// //   title: "Cedge",
// // };

// // export default async function RootLayout({
// //   children,
// //   params: { locale },
// // }: {
// //   children: React.ReactNode;
// //   params: {
// //     locale: string;
// //   };
// // }) {
// //   const messages = (await import(`../../messages/${locale || "ar"}.json`)).default;

// //   return (
// //     <html lang={locale} dir={dir(locale)}>
// //       <body
// //       // className={`${inter.variable} ${cairo.variable} antialiased bg-gradient-to-br from-primary to-gray-200 `}
// //       >
// //         <NextIntlClientProvider locale={locale} messages={messages}>
// //           <main className="">{children}</main>
// //         </NextIntlClientProvider>
// //       </body>
// //     </html>
// //   );
// // }

import "./globals.css";

import { AR_LOCALE } from "@/constants";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { LayoutContent } from "@/components";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import { ThemeRegistry } from "@/libs";
import Script from "next/script";

export const dynamic = "force-dynamic"; // we all make mistakes

export const metadata: Metadata = {
  title: {
    default: 'Cedge',
    template: '%s | Cedge',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({ children, params: { locale } }: Readonly<RootLayoutProps>) {
  // Add error handling for the messages import
  let messages = {};
  try {
    // Try to import from the correct path
    messages = (await import(`@/messages/${locale || "ar"}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Try alternative path if the first one fails
    try {
      messages = (await import(`../../../messages/${locale || "ar"}.json`)).default;
    } catch (innerError) {
      console.error(`Failed to load messages from alternative path for locale: ${locale}`, innerError);
      // Fallback to an empty object if both paths fail
    }
  }

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Rest of your meta tags */}
      </head>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body dir={locale === AR_LOCALE ? "rtl" : "ltr"}>
          <AppRouterCacheProvider>
            <ThemeRegistry>
              <LayoutContent locale={locale}>{children}</LayoutContent>
            </ThemeRegistry>
          </AppRouterCacheProvider>
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KB46SV6H" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
          </noscript>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}