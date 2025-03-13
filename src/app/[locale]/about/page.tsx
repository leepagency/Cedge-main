import { AboutHoc } from "@/hoc";
import React from "react";
import { getAboutPage } from "@/apis";
import { Metadata } from "next";

interface Props {
  params: {
    locale: string;
  };
}

export const generateMetadata = ({ params }: Props): Metadata => {
  const locale = params.locale;
  const title = locale === 'ar' ? 'حول                           ' : 'About                         ';
  const description = locale === 'ar' ? 'تعرف على المزيد حول Cedge ورسالتنا وفريقنا.                  ' : 'Learn more about Cedge, our mission, and our team.          ';
  const canonicalUrl = `https://www.cedge.com.sa/${locale}/about`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: `https://www.cedge.com.sa/ar/about`,
        en: `https://www.cedge.com.sa/en/about`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
    },
    metadataBase: new URL('https://www.cedge.com.sa'),
  };
};

const About: React.FC<Props> = async ({ params }) => {
  const data = await getAboutPage(params.locale);
  return <AboutHoc about={data} />;
};

export default About;
