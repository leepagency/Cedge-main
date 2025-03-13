import { Box } from "@mui/material";
import React from "react";
import { getHomePage } from "@/apis/home.api";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Loader from "@/components/loader/loader.component";
 

interface HomePageProps {
  params: {
    locale: string;
  };
}
export const generateMetadata = ({ params }: HomePageProps): Metadata => {
  const locale = params.locale;
  const title = locale === "ar" ? "سيدج                           " : "Cedge                           ";
  const description = locale === 'ar' ? 'تعرف على المزيد حول Cedge ورسالتنا وفريقنا.                 ' : 'Learn more about Cedge, our mission, and our team.          ';
  const canonicalUrl = `https://www.cedge.com.sa/${locale}`;
  const card = "summary_large_image";

  return {
    twitter: {
      card: card
    },
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: `https://www.cedge.com.sa/ar`,
        en: `https://www.cedge.com.sa/en`,
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

const HomeCustomersContentComponent = dynamic(() => import('../../components/homeCustomers/homeCustomersContent.component'), {
  ssr: true, // Optional: Disable server-side rendering if needed
  loading: () => <Loader />
});

const HomePageHeroContentComponent = dynamic(() => import('../../components/homePageHero/homePageHeroContent.component'), {
  ssr: true, // Optional: Disable server-side rendering if needed
  loading: () => <Loader />
});

const HomePageArcContentComponent = dynamic(() => import('../../components/homePageArc/homepageArcContent.component'), {
  ssr: true, // Optional: Disable server-side rendering if needed
  loading: () => <Loader />
});

const ExecutionSectionContentComponent = dynamic(() => import('../../components/executionSection/executionSectionContent.component'), {
  ssr: true, // Optional: Disable server-side rendering if needed
  loading: () => <Loader />
});

const HomeGrowSectionContentComponent = dynamic(() => import('../../components/homeGrowSection/homeGrowSectionContent.component'), {
  ssr: true, // Optional: Disable server-side rendering if needed
  loading: () => <Loader />
});

const HomePageExploreContentComponent = dynamic(() => import('../../components/homePageExplore/homePageExploreContent.component'), {
  ssr: true, // Optional: Disable server-side rendering if needed
  loading: () => <Loader />
});

const HomePageTrustContentComponent = dynamic(() => import('../../components/homePageTrust/homePageTrustContent.component'), {
  ssr: true, // Optional: Disable server-side rendering if needed
  loading: () => <Loader />
});

const SuccessSectionContentComponent = dynamic(() => import('../../components/successSection/successSectionContent.component'), {
  ssr: true, // Optional: Disable server-side rendering if needed
  loading: () => <Loader />
});

const Home: React.FC<HomePageProps> = async ({ params }) => {
  const data = await getHomePage(params.locale);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: {
          xs: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "7rem",
        },
      }}
    >

      <HomePageHeroContentComponent hero={data.hero} />
      <HomePageExploreContentComponent explore={data.explore} pioneer={data.pioneer} />
      {data?.success[0]?.status && <SuccessSectionContentComponent success={data.success} />}
      <HomePageArcContentComponent cards={data.card} />
      {data?.execution[0]?.status && <ExecutionSectionContentComponent execution={data.execution} />}{" "}
      {data?.testimonials?.status && data?.testimonials?.data?.length > 0 && (
        <HomeCustomersContentComponent testimonials={data.testimonials.data} />
      )}
      {data?.trusted?.data?.length > 0 && data.trusted.status && <HomePageTrustContentComponent clients={data.trusted.data} />}
      {data?.ready_to_grow[0]?.status && <HomeGrowSectionContentComponent {...data.ready_to_grow[0]} />}
    </Box>
  );
};
export default Home;
