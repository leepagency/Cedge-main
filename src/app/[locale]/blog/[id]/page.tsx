import { MainContainer, MainShadow, SubscribeArea } from "@/common";
import { Box, Stack } from "@mui/material";
import { ItemDetails } from "@/common/itemDetails";
import { MainBanner } from "@/common/mainBanner";
import React from "react";
import { getSingleArticle } from "@/apis";
import Image from "next/image";
import { MainBanners } from "@/common/notFoundPage";
import { Metadata } from "next";
 

type Props = {
  params: { id: string; locale: string };
};
export const generateMetadata = ({ params }: Props): Metadata => {
  const locale = params.locale;
  const title = locale === 'ar' ? 'مقالة' : 'Article';
  const description = locale === 'ar' 
    ? 'اقرأ أحدث المقالات والأفكار حول Cedge والصناعة.' 
    : 'Read the latest articles and insights about Cedge and the industry.';
  const canonicalUrl = `https://www.cedge.com.sa/${locale}/blog/${params.id}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        ar: `https://www.cedge.com.sa/ar/blog/${params.id}`,
        en: `https://www.cedge.com.sa/en/blog/${params.id}`,
        'x-default': `https://www.cedge.com.sa/en/blog/${params.id}`, // Default fallback
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
const ArticlePage: React.FC<Props> = async ({ params }) => {
  const { id, locale } = params;
  const { article, related_articles } = await getSingleArticle(id, locale);
  // Check if the article is available
  if (!article) {
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
    <Box
      sx={{
        position: "relative",
        background: "white",
      }}
    >
       

      <MainBanner
        smallTitle
        backUrl="/blog"
        title={article.banner_title}
        backgroundImage={article.banner}
        translation={false}
        description={article.banner_description}
        article
      />
      <MainContainer type="center">
        <ItemDetails
          iSHasRelated={related_articles?.length > 0}
          relatedCard={related_articles}
          relatedType="articles"
          article
          type="articles"
        >
          <Stack>
            <h1>{article.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: article?.description }} />
          </Stack>
          {article?.image1 && (
            <Stack
              sx={{
                "& img": {
                  height: {
                    xs: "180px",
                    md: "400px",
                  },
                },
              }}
            >
              <Image
                src={article?.image1}
                alt={article.title}
                width={500}
                height={500}
                unoptimized // Disable srcset and use src only
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />
              <div dangerouslySetInnerHTML={{ __html: article?.description1 }} />
            </Stack>
          )}
          {article?.image2 && (
            <Stack
              sx={{
                "& img": {
                  height: {
                    xs: "300px",
                    md: "400px",
                  },
                },
              }}
            >
              <Image
                src={article?.image2}
                alt={article.title}
                width={500}
                height={500}
                unoptimized // Disable srcset and use src only

                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />
              <div dangerouslySetInnerHTML={{ __html: article?.description2 }} />
            </Stack>
          )}
          {article?.image3 && (
            <Stack
              sx={{
                "& img": {
                  height: {
                    xs: "300px",
                    md: "400px",
                  },
                },
              }}
            >
              <Image
                src={article?.image3}
                alt={article.title}
                width={500}
                height={500}
                unoptimized // Disable srcset and use src only
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />
              <div dangerouslySetInnerHTML={{ __html: article?.description3 }} />
            </Stack>
          )}
        </ItemDetails>
      </MainContainer>
      <SubscribeArea />
      <MainShadow
        styles={{
          display: {
            xs: "none",
            md: "block",
          },
          height: {
            xs: "50px",
            md: "200px",
            lg: "300px",
          },
        }}
      />
    </Box>
  );
};

export default ArticlePage;
