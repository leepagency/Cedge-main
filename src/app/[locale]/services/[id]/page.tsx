import React, { Suspense } from "react";

import { Box } from "@mui/material";
import { CapabilityHoc } from "@/hoc";
import { MainBanner } from "@/common/mainBanner";
import { getSingleCapability } from "@/apis";
import { MainBanners } from "@/common/notFoundPage";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const LoaderComponent = dynamic(() => import('../../../../components/loader/loader.component'), {
  ssr: true, // Optional: Disable server-side rendering if needed
});

type Props = {
  params: { id: string; locale: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  const locale = params.locale;
  const title = locale === 'ar' ? 'الخدمات' : 'services';
  const description = locale === 'ar' 
    ? 'اقرأ أحدث المقالات والأفكار حول Cedge والصناعة.' 
    : 'Read the latest services and insights about Cedge and the industry.';
  const canonicalUrl = `https://www.cedge.com.sa/${locale}/services/${params.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: `https://www.cedge.com.sa/ar/services/${params.id}`,
        en: `https://www.cedge.com.sa/en/services/${params.id}`,
        'x-default': `https://www.cedge.com.sa/en/services/${params.id}`, // Default fallback
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
const capabilitiesPage: React.FC<Props> = async ({ params }) => {
  const { id, locale } = params;
  const { capability } = await getSingleCapability(id, locale);
  // Check if the article is available
  if (!capability) {
    return (
      <Box
        sx={{
          position: "relative",
          background: "#000",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <MainBanners title={'no_data_found'}/>
      </Box>
    );
  }
  return (
    <Box>
      <Suspense fallback={<LoaderComponent />}>
        <MainBanner
          backUrl="/services"
          title={capability.name}
          backgroundImage={capability.header_image}
          description={capability.banner_description}
          isNoMarginBottom={true}
          translation={false}
        />
        <CapabilityHoc {...capability} />
      </Suspense>
    </Box>
  );
};
export default capabilitiesPage;
